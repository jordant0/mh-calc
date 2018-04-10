<script>
import WeaponInput from '@/components/WeaponInput'
import Calculator from '@/components/Calculator'
import SkillControl from '@/components/SkillControl'
import ItemControl from '@/components/ItemControl'
import SaveManager from '@/components/SaveManager'
import JsonProcessor from '@/mixins/JsonProcessor'

const LOCAL_STORAGE_KEY = 'MhCalc-SavedData';
const LOCAL_STORAGE_VERSION = 'MhCalc-SaveVersion';

export default {
  name: 'Main',

  metaInfo: {
     title: 'MHW Damage Calculator',
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'shortcut icon', type: 'image/png', href: '/static/favicon.png' },
    ]
  },

  mixins: [
    JsonProcessor
  ],

  components: {
    WeaponInput,
    Calculator,
    SkillControl,
    ItemControl,
    SaveManager,
  },

  watch: {
    'weapon.affinity': function() {
      if(this.weapon.affinity > 100) {
        this.weapon.affinity = 100;
      }

      if(this.weapon.affinity < -100) {
        this.weapon.affinity = -100;
      }
    },

    'weapon.activation': function() {
      if(this.weapon.activation > 100) {
        this.weapon.activation = 100;
      }

      if(this.weapon.activation < 0) {
        this.weapon.activation = 0;
      }
    },

    saves: function() {
      this.saveToLocalStorage(LOCAL_STORAGE_KEY, this.saves);
      window.localStorage.setItem(LOCAL_STORAGE_VERSION, this.settings.version);
    },
  },

  data() {
    return {
      weapon: {
        id: 0,
        type: 1,
        raw: 200,
        affinity: 0,
        sharpness: 3, // Green
        coating: 2, // Power
        activation: 100,
        augments: [0, 0, 0],
        augmentSlots: 3,
        maxSharpness: 5,
        maxCoating: 2,
        elementless: true,
      },
      skills: [],
      items: [],
      finalRaw: 0,
      saves: this.loadFromLocalStorage(LOCAL_STORAGE_KEY, []),
      settings: {
        debug: this.$route.query.debug === 'true',
        verbose:  this.$route.query.verbose === 'true',
        precision: 2,
        version: '2.1.1',
        contactEmail: 'mhw.calc.dev@gmail.com',
      },
      showSaveSection: false,
    }
  },

  computed: {
    contactLink() {
      return `mailto:${this.settings.contactEmail}`;
    },
  },

  methods: {
    updatedFinalRaw(value) {
      this.finalRaw = value;
    },

    toggleSaveSection() {
      this.showSaveSection = !this.showSaveSection;
    },
  }
}
</script>

<template>
  <div class='mh-calc'>
    <div class='body-section'>
      <div class='header'>
        <div class='header-info'>
          <div class='header-title'>
            MHW Damage Calculator
          </div>
          <div class='version-number'>
            v{{ settings.version }}
          </div>
        </div>

        <div class='header-icon'>
          <a href='#' class='setting-link' @click.prevent='toggleSaveSection' title='Manage saves'>
            <span class='glyphicon glyphicon-cog'></span>
          </a>
        </div>
      </div>

      <div class='body-content'>
        <div class='left-sidebar'>
          <weapon-input :weapon='weapon' />

          <calculator
            :weapon='weapon'
            :skills='skills'
            :items='items'
            :settings='settings'
            :final-raw='finalRaw'
            @updated-final-raw='updatedFinalRaw'
          />
        </div>

        <div class='main-content'>
          <div class='current-data'>
            <skill-control :skills.sync='skills' :weapon='weapon' />

            <item-control :items.sync='items' />
          </div>

          <div class='footer'>
            To report bugs or ask any question, <a :href='contactLink'>contact us</a>.
          </div>
        </div>
      </div>
    </div>

    <transition name='slide'>
      <save-manager
        :weapon.sync='weapon'
        :skills.sync='skills'
        :items.sync='items'
        :settings='settings'
        :final-raw='finalRaw'
        :saves.sync='saves'
        :shown='showSaveSection'
        @toogle-save-section='toggleSaveSection'
      />
    </transition>
  </div>
</template>

<style>
.mh-calc {
  display: flex;
  height: 100vh;
}

.header {
  background-color: #212121;
  top: 0;
  color: white;
  display: flex;
  z-index: 10;
  justify-content: space-between;
}

.body-section {
  flex: 1;
}

.body-content {
  height: calc(100vh - 49px);
}

.header-info {
  display: flex;
  align-items: center;
  padding: 12px 20px;
}

.header-title {
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
  font-size: 18px;
}

.header-icon {
  padding: 0 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
}

.setting-link, .setting-link:hover, .setting-link:focus {
  color: white;
}

.version-number {
  font-weight: 400;
  font-size: 12px;
  color: #777777;
}

.left-sidebar {
  color: black;
  background-color: #1f9e75;
  top: 45px;
  float: left;
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.left-sidebar .vue-select-input {
  border: 0;
}

.left-sidebar .vue-select-dropdown {
  top: 37px;
}

.main-content {
  margin-left: 300px;
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.input-item {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-label {
  font-weight: 600;
  margin-right: 40px;
}

.input-field {
  padding: 4px 5px;
  border-radius: 3px;
  border: 1px solid #d6d4d4;
  width: 80px;
}

.button {
  padding: 8px 12px;
  background-color: white;
  border-radius: 3px;
  color: black;
  border: 1px solid #b5b5b5;
}

.button:hover {
  background-color: #cccccc;
  text-decoration: none;
  color: black;
}

.button.green-button {
  color: white;
  background-color: #1f9e75;
  border-color: #1f9e75;
}

.button.green-button:hover {
  color: white;
  background-color: #23b384;
  border-color: #23b384;
  text-decoration: none;
}

.button.bold-button {
  font-weight: 600;
}

.icon-action {
  display: flex;
  font-size: 20px;
  color: #aba7a7;
}

.icon-action:hover, .icon-action:focus {
  text-decoration: none;
  color: black;
}

.icon-action .glyphicon {
  top: 0;
}

.skill-item-control {
  margin: 20px 30px;
}

.skill-item-selector.vue-selector {
  width: 300px;
}

.skill-item-header {
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #d6d4d4;
  margin-bottom: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-item-header_title {
  font-size: 22px;
}

.skill-item-input {
  padding: 5px 0;
}

.skill-item-label {
  font-weight: 400;
}

.skills-items-display {
  display: flex;
  flex-wrap: wrap;
}

.skill-item-display {
  width: 375px;
  box-sizing: border-box;
  padding: 16px 20px;
  margin: 0;
  position: relative;
  border: 1px solid #d6d4d4;
  border-left: 5px solid #d6d4d4;
  margin: 6px;
  position: relative;
}

.skill-item-display:hover {
  border-left: 5px solid #f67519;
}

.skill-item-remove {
  position: absolute;
  top: 10px;
  right: 10px;
}

.skill-item-name {
  color: #1f9e75;
  font-size: 18px;
  text-align: left;
  margin-bottom: 12px;
}

.skill-item-edit {
  display: flex;
  flex-wrap: wrap;
}

.skill-item-edit.input-item, .skill-item-edit .input-item {
  padding: 0;
}

.footer {
  padding: 15px;
  color: #777777;
  font-style: italic;
  text-align: right;
}
</style>
