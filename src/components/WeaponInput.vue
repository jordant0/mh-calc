<script>
import { Weapons } from '@/data/Weapons'
import { Sharpness } from '@/data/Sharpness'
import { Coatings } from '@/data/Coatings'
import { Augments } from '@/data/Augments'

export default {
  name: 'WeaponInput',

  props: {
    weapon: Object,
  },

  data() {
    return {
      weaponList: Weapons,
      sharpnessList: Sharpness,
      coatingList: Coatings,
      augmentList: Augments,
    }
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
  },

  methods: {
    flipSign() {
      this.weapon.affinity = -this.weapon.affinity;
    },
  }
}
</script>

<template>
  <div class='weapon-info bordered-box'>
    <form class='weapon-input'>
      <div class='weapon-stats'>
        <div class='input-item'>
          <span class='input-label'>Weapon:</span>
          <select class='input-field type-field' v-model='weapon.type'>
            <option v-for='(info, id) in weaponList' :value='id'>
              {{ info.name }}
            </option>
          </select>
        </div>

        <div class='input-item'>
          <span class='input-label'>Raw</span>
          <input class='input-field' type='number' v-model.number='weapon.raw' />
        </div>

        <div class='input-item'>
          <span class='input-label'>Affinity</span>
          <div>
            <input
              class='affinity-input input-field'
              type='number'
              v-model.number='weapon.affinity'
              :min='-100'
              :max='100'
            />%
          </div>
        </div>
        <a class='convert-to-negative' href='#' @click.prevent='flipSign'>Flip sign</a>

        <div v-if='showSharpness' class='input-item'>
          <span class='input-label'>Sharpness</span>
          <select class='input-field' v-model='weapon.sharpness'>
            <option v-for='(info, id) in sharpnessList' :value='id'>
              {{ info.name }}
            </option>
          </select>
        </div>

        <div v-if='showCoating' class='input-item'>
          <span class='input-label'>Coating</span>
          <select class='input-field coating-field' v-model='weapon.coating'>
            <option v-for='(info, id) in coatingList' :value='id'>
              {{ info.name }}
            </option>
          </select>
        </div>

        <div v-if='showActivation' class='input-item'>
          <span class='input-label'>Activation:</span>
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
      </div>

      <div class='weapon-argments input-item'>
        <span class='input-label'>Augments</span>
        <select
          v-for='(augment, index) in weapon.augments'
          class='input-field'
          v-model='weapon.augments[index]'
        >
          <option v-for='(id, name) in augmentList' :value='id'>
            {{ name }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<style>
.weapon-info {
  box-sizing: border-box;
  width: 60%;
}

.weapon-input {
  display: flex;
  justify-content: space-between;
}

.weapon-stats {
  width: 280px;
}

.type-field {
  width: 130px;
}

.weapon-argments {
  display: flex;
  flex-direction: column;
  justify-content: normal;
  width: 180px;
}

.weapon-argments .input-label {
  margin: 0;
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 15px;
}

.weapon-argments .input-field {
  width: 150px;
  margin-bottom: 15px;
}

.weapon-argments .input-field:last-child {
  margin-bottom: 0;
}

.coating-field {
  width: 120px;
}

.affinity-input, .activation-input {
  margin-right: 5px;
  width: 62px;
}

.convert-to-negative {
  font-size: 12px;
  text-align: right;
  display: block;
  margin-left: auto;
  width: 122px;
  margin-bottom: 4px;
}
</style>
