<script>
import WeaponInput from '@/components/WeaponInput'
import Calculator from '@/components/Calculator'
import SkillControl from '@/components/SkillControl'
import ItemControl from '@/components/ItemControl'
import SaveManager from '@/components/SaveManager'
import JsonProcessor from '@/mixins/JsonProcessor'

const LOCAL_STORAGE_KEY = 'MhCalc-SavedData';

export default {
  name: 'Main',

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

    saves: function() {
      this.saveToLocalStorage(LOCAL_STORAGE_KEY, this.saves);
    },
  },

  data() {
    return {
      weapon: {
        raw: 200,
        affinity: 0,
        sharpness: 'Green',
        augments: [0, 0, 0],
      },
      skills: [],
      items: [],
      finalRaw: 0,
      saves: this.loadFromLocalStorage(LOCAL_STORAGE_KEY, []),
      settings: {
        debug: false,
        verbose: false,
        precision: 2,
        version: '0.2.5',
      },
    }
  },

  methods: {
    updatedFinalRaw(value) {
      this.finalRaw = value;
    },
  }
}
</script>

<template>
  <div class='mh-calc'>
    <h1>
      MHW Damage Calculator
      <div class='version-number'>
        v{{ settings.version }}
      </div>
    </h1>

    <div class='main-content'>
      <save-manager
        :weapon.sync='weapon'
        :skills.sync='skills'
        :items.sync='items'
        :settings='settings'
        :final-raw='finalRaw'
        :saves.sync='saves'
      />

      <div class='current-data'>
        <div class='general-data'>
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

        <skill-control :skills.sync='skills' />

        <item-control :items.sync='items' />
      </div>
    </div>
  </div>
</template>

<style>
.mh-calc {
  max-width: 1400px;
  margin: auto;
}

h1 {
  margin: 0;
  padding-top: 20px;
  color: #e6d027;
}

.version-number {
  font-weight: 400;
  font-size: 12px;
  color: #777777;
  margin-top: 10px;
}

.general-data {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
}

.bordered-box {
  border: 3px solid #c78306;
  border-radius: 5px;
  padding: 24px 32px;
  margin: 0 20px;
}

.dashed-border {
  border: 1px dashed #b9b9b5;
  border-radius: 2px;
}

.current-data {
  width: 70%;
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
  border-radius: 2px;
  border: 0;
  width: 80px;
}

a {
  color: #bbbbbb;
  text-decoration: none;
}

a:hover {
  color: #efefef;
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
  color: black;
}

.remove-link {
  position: absolute;
  top: 12px;
  right: 12px;

  display: inline-block;
  height: 20px;
  width: 20px;
  border: 1px solid #bbbbbb;
  border-radius: 50%;
}

.v-select .dropdown-toggle {
  border-color: white !important;
  background-color: white !important;
  width: 500px;
}

.select-wrapper {
  width: 680px;
}
</style>
