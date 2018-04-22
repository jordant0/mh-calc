<script>
import Selector from '@/components/Selector'
import WeaponTypeData from '@/mixins/WeaponTypeData'
import RoundToDecimal from '@/mixins/RoundToDecimal'
import { Weapons } from '@/data/Weapons'
import { Sharpness } from '@/data/Sharpness'
import { Coatings } from '@/data/Coatings'
import { Augments } from '@/data/Augments'

export default {
  name: 'WeaponInput',

  mixins: [
    WeaponTypeData,
    RoundToDecimal,
  ],

  components: {
    Selector,
  },

  props: {
    weapon: Object,
  },

  data() {
    return {
      weaponTypeList: Weapons,
      sharpnessList: Sharpness,
      coatingList: Coatings,
      augmentList: Augments,
      showTrueRaw: true,
      displayRaw: 0,
    }
  },

  created() {
    this.updateDisplayRaw();
  },

  watch: {
    'weapon.type': function() {
      this.weapon.id = 0;
      this.updateDisplayRaw();
    },

    'weapon.id': function() {
      if(this.weapon.id === 0) {
        this.weapon.maxSharpness = 5;
        this.weapon.maxCoating = 2;
        this.weapon.augmentSlots = 3;
      }
      else {
        var data = this.weaponList[this.weapon.id];
        this.weapon.raw = data.raw;
        this.weapon.affinity = data.affinity;
        if(data.sharpness) {
          this.weapon.sharpness = data.sharpness.base;
          this.weapon.maxSharpness = data.sharpness.max;
        }
        if(data.coating) {
          this.weapon.coating = data.coating;
          this.weapon.maxCoating = data.coating;
        }

        this.weapon.elementless = !data.element || data.element.hidden;

        if(data.augmentable) {
          this.weapon.augmentSlots = Math.min(Math.max(9 - data.rarity, 0), 3);
        }
        else {
          this.weapon.augmentSlots = 0;
        }
        this.weapon.activation = 100;
      }
    },

    'weapon.raw': function() {
      if(this.showTrueRaw || this.weapon.id !== 0) {
        this.updateDisplayRaw();
      }
    },

    displayRaw: function() {
      if(!this.showTrueRaw && this.weapon.id === 0) {
        this.updateTrueRaw()
      }
    },
  },

  computed: {
    typeInfo() {
      return Weapons[this.weapon.type];
    },

    showSharpness() {
      return this.typeInfo.category === 'blademaster';
    },

    showCoating() {
      return this.typeInfo.category === 'bow';
    },

    showActivation() {
      return this.showSharpness || this.showCoating;
    },

    weaponList() {
      return this.weaponData[this.weapon.type];
    },

    augmentIterator() {
      return new Array(this.weapon.augmentSlots);
    },

    allowedSharpness() {
      var result = {};

      for(var key in this.sharpnessList) {
        if(key <= this.weapon.maxSharpness) {
          result[key] = this.sharpnessList[key];
        }
      }

      return result;
    },

    allowedCoatings() {
      var result = {};

      for(var key in this.coatingList) {
        if(key <= this.weapon.maxCoating) {
          result[key] = this.coatingList[key];
        }
      }

      return result;
    },

    bloatValue() {
      return this.typeInfo.bloatValue;
    }
  },

  methods: {
    flipSign() {
      this.weapon.affinity = -this.weapon.affinity;
    },

    updateDisplayRaw() {
      this.displayRaw = this.roundToDecimal(this.weapon.raw * this.bloatValue, 0);
    },

    updateTrueRaw() {
      this.weapon.raw = this.roundToDecimal(this.displayRaw / this.bloatValue, 0);
    },
  }
}
</script>

<template>
  <div class='weapon-info'>
    <form class='weapon-input'>
      <div class='input-item'>
        <span class='input-label weapon-label'>Weapon</span>

        <selector
          class='weapon-type-selector'
          placeholder='Weapon type'
          :value.sync='weapon.type'
          :options='weaponTypeList'
        />
      </div>

      <selector
        class='weapon-selector'
        placeholder='Find weapon...'
        :value.sync='weapon.id'
        :options='weaponList'
      />

      <div class='input-item'>
        <div class='weapon-input_raw-selector'>
          <input
            v-if='weapon.id === 0'
            type='radio'
            class='weapon-input_raw-radio'
            :value='false'
            v-model='showTrueRaw'
          >
          <span class='input-label'>Display Raw</span>
        </div>

        <input
          v-if='weapon.id === 0 && !showTrueRaw'
          class='input-field'
          type='number'
          v-model.number='displayRaw'
        />
        <span v-else class='input-field text-display'>{{ displayRaw }}</span>
      </div>

      <div class='input-item'>
        <div class='weapon-input_raw-selector'>
          <input
            v-if='weapon.id === 0'
            type='radio'
            class='weapon-input_raw-radio'
            :value='true'
            v-model='showTrueRaw'
          >
          <span class='input-label'>True Raw</span>
        </div>

        <input
          v-if='weapon.id === 0 && showTrueRaw'
          class='input-field'
          type='number'
          v-model.number='weapon.raw'
        />
        <span v-else class='input-field text-display'>{{ weapon.raw }}</span>
      </div>

      <div class='input-item'>
        <span class='input-label'>Affinity</span>
        <div v-if='weapon.id === 0'>
          <input
            class='affinity-input input-field'
            type='number'
            v-model.number='weapon.affinity'
            :min='-100'
            :max='100'
          />%
        </div>
        <span v-if='weapon.id !== 0' class='input-field text-display'>{{ weapon.affinity }}%</span>
      </div>
      <a v-if='weapon.id === 0' class='convert-to-negative' href='#' @click.prevent='flipSign'>Flip sign</a>

      <div v-if='showSharpness' class='input-item sharpness-input'>
        <span class='input-label'>Sharpness</span>

        <selector
          class='sharpness-selector'
          placeholder='Sharpness'
          :value.sync='weapon.sharpness'
          :options='allowedSharpness'
          max-height='230px'
        />
      </div>

      <div v-if='showCoating' class='input-item'>
        <span class='input-label coating-label'>Coating</span>

        <selector
          class='coating-selector'
          placeholder='Coating'
          :value.sync='weapon.coating'
          :options='allowedCoatings'
          max-height='120px'
        />
      </div>

      <div v-if='showActivation' class='input-item'>
        <span class='input-label'>Activation</span>
        <div>
          <input
            class='input-field activation-input'
            type='number'
            :min='0'
            :max='100'
            v-model='weapon.activation'
          />%
        </div>
      </div>

      <div v-if='weapon.augmentSlots > 0' class='weapon-argments input-item'>
        <span class='input-label'>Augments</span>
        <selector
          v-for='(dummy, index) in augmentIterator'
          :key='index'
          class='augment-selector'
          placeholder='Augment'
          :value.sync='weapon.augments[index]'
          :options='augmentList'
          max-height='120px'
        />
      </div>
    </form>
  </div>
</template>

<style>
.type-field {
  width: 145px;
}

.weapon-label {
  margin-right: 10px;
}

.weapon-info .input-field {
  border: 0;
}

.coating-field {
  width: 120px;
}

.affinity-input, .activation-input {
  margin-right: 5px;
  width: 62px;
}

.input-field.text-display {
  text-align: right;
  font-weight: 600;
  border: 0;
  background-color: transparent;
}

.convert-to-negative {
  font-size: 12px;
  text-align: right;
  display: block;
  margin-left: auto;
  width: 122px;
  margin-bottom: 4px;
}

.weapon-selector.vue-selector {
  width: 100%;
  margin-bottom: 12px;
}

.weapon-selector .vue-select-input {
  text-align: center;
}

.weapon-selector .vue-select-display.custom {
  font-style: italic;
}

.weapon-type-selector .vue-select-display {
  position: relative;
}

.weapon-type-selector .vue-select-option .vue-select-option_link,
.weapon-type-selector .vue-select-display .vue-select-input {
  padding-left: 42px;
  text-align: center;
}

.weapon-type-selector .vue-select-display:before {
  content: '';
  height: 30px;
  width: 30px;
  left: 7px;
  top: 3px;
  position: absolute;
  background-size: 100%;
  background-repeat: no-repeat;
}

.weapon-type-selector .vue-select-display.great-sword:before {
  background-image: url('./../assets/weapon-icons/great-sword.png');
}

.weapon-type-selector .vue-select-display.long-sword:before {
  background-image: url('./../assets/weapon-icons/long-sword.png');
}

.weapon-type-selector .vue-select-display.sword-and-shield:before {
  background-image: url('./../assets/weapon-icons/sword-and-shield.png');
}

.weapon-type-selector .vue-select-display.dual-blades:before {
  background-image: url('./../assets/weapon-icons/dual-blades.png');
}

.weapon-type-selector .vue-select-display.hammer:before {
  background-image: url('./../assets/weapon-icons/hammer.png');
}

.weapon-type-selector .vue-select-display.hunting-horn:before {
  background-image: url('./../assets/weapon-icons/hunting-horn.png');
}

.weapon-type-selector .vue-select-display.lance:before {
  background-image: url('./../assets/weapon-icons/lance.png');
}

.weapon-type-selector .vue-select-display.gunlance:before {
  background-image: url('./../assets/weapon-icons/gunlance.png');
}

.weapon-type-selector .vue-select-display.switch-axe:before {
  background-image: url('./../assets/weapon-icons/switch-axe.png');
}

.weapon-type-selector .vue-select-display.charge-blade:before {
  background-image: url('./../assets/weapon-icons/charge-blade.png');
}

.weapon-type-selector .vue-select-display.insect-glaive:before {
  background-image: url('./../assets/weapon-icons/insect-glaive.png');
}

.weapon-type-selector .vue-select-display.light-bowgun:before {
  background-image: url('./../assets/weapon-icons/light-bowgun.png');
}

.weapon-type-selector .vue-select-display.heavy-bowgun:before {
  background-image: url('./../assets/weapon-icons/heavy-bowgun.png');
}

.weapon-type-selector .vue-select-display.bow:before {
  background-image: url('./../assets/weapon-icons/bow.png');
}

.sharpness-input {
  flex-wrap: wrap;
}

.vue-selector.sharpness-selector {
  width: 185px;
  margin-lefT: auto;
  margin-top: 8px;
}

.sharpness-selector .vue-select-display {
  position: relative;
}

.sharpness-selector .vue-select-option .vue-select-option_link,
.sharpness-selector .vue-select-display .vue-select-input {
  padding-left: 104px;
  text-align: left;
}

.sharpness-selector .vue-select-display:before {
  content: '';
  height: 16px;
  width: 84px;
  left: 7px;
  top: 9px;
  position: absolute;
  background-size: auto 100%;
  background-repeat: no-repeat;
}

.sharpness-selector .vue-select-display.red:before {
  background-image: url('./../assets/sharpness/red.png');
}

.sharpness-selector .vue-select-display.orange:before {
  background-image: url('./../assets/sharpness/orange.png');
}

.sharpness-selector .vue-select-display.yellow:before {
  background-image: url('./../assets/sharpness/yellow.png');
}

.sharpness-selector .vue-select-display.green:before {
  background-image: url('./../assets/sharpness/green.png');
}

.sharpness-selector .vue-select-display.blue:before {
  background-image: url('./../assets/sharpness/blue.png');
}

.sharpness-selector .vue-select-display.white:before {
  background-image: url('./../assets/sharpness/white.png');
}

.coating-label {
  margin-right: 20px;
}

.coating-selector .vue-select-display {
  position: relative;
}

.coating-selector .vue-select-option .vue-select-option_link,
.coating-selector .vue-select-display .vue-select-input {
  padding-left: 42px;
  text-align: center;
}

.vue-selector.coating-selector {
  width: 175px;
}

.coating-selector .vue-select-display:before {
  content: '';
  height: 25px;
  width: 25px;
  left: 7px;
  top: 5px;
  position: absolute;
  background-size: auto 100%;
  background-repeat: no-repeat;
}

.coating-selector .vue-select-display.none,
.coating-selector .vue-select-display.none .vue-select-input {
  font-style: italic;
}

.coating-selector .vue-select-display.none:before {
  background-image: url('./../assets/coatings/empty-phial.png');
}

.coating-selector .vue-select-display.close-range:before {
  background-image: url('./../assets/coatings/close-range.png');
}

.coating-selector .vue-select-display.power:before {
  background-image: url('./../assets/coatings/power.png');
}

.weapon-argments {
  display: flex;
  flex-direction: column;
  justify-content: normal;
}

.weapon-argments .input-label {
  margin: 0;
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 15px;
}

.augment-selector {
  width: 150px;
  margin-bottom: 15px;
}

.augment-selector .vue-select_expand-icon {
  right: 9px;
}

.augment-selector .vue-select-option_link.vue-select-display,
.augment-selector .vue-select_input-wrapper.vue-select-display .vue-select-input {
  color: white;
  letter-spacing: 2px;
  padding: 2px;
  border: 6px double white;
  text-align: center;
}

.augment-selector .vue-select-option_link.vue-select-display.none,
.augment-selector .vue-select_input-wrapper.vue-select-display.none .vue-select-input {
  background-color: #3c3c3c;
  border-color: #525252;
}

.augment-selector .vue-select-option_link.vue-select-display.attack,
.augment-selector .vue-select_input-wrapper.vue-select-display.attack .vue-select-input {
  background-color: #6f3535;
  border-color: #a76262;
}

.augment-selector .vue-select-option_link.vue-select-display.affinity,
.augment-selector .vue-select_input-wrapper.vue-select-display.affinity .vue-select-input {
  background-color: #523067;
  border-color: #8453a2;
}

.weapon-input_raw-selector {
  display: flex;
  align-items: center;
}

input.weapon-input_raw-radio[type=radio] {
  margin-right: 7px;
  margin-top: 0;
}

@media screen and (max-width: 1000px) {
  .weapon-info {
    border-bottom: 1px solid #d6d4d4;
  }

  .weapon-info .input-field {
    border: 1px solid #d6d4d4;
  }

  .input-field.text-display {
    border: 0;
  }
}
</style>
