<script>
import { Augments } from '@/data/Augments'

export default {
  name: 'WeaponInput',

  props: {
    weapon: Object,
  },

  data() {
    return {
      augmentList: Augments,
    }
  },

  methods: {
    flipSign() {
      this.weapon.affinity = -this.weapon.affinity;
    }
  }
}
</script>

<template>
  <div class='weapon-info bordered-box'>
    <form class='weapon-input'>
      <div class='weapon-stats'>
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
            />%
          </div>
        </div>
        <a class='convert-to-negative' href='#' @click.prevent='flipSign'>Flip sign</a>

        <div class='input-item'>
          <span class='input-label'>Sharpness</span>
          <select class='input-field' v-model='weapon.sharpness'>
            <option>White</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Yellow</option>
            <option>Orange</option>
            <option>Red</option>
          </select>
        </div>
      </div>

      <div class='weapon-argments input-item'>
        <span class='input-label'>Augments</span>
        <select
          v-for='(augment, index) in weapon.augments'
          class='input-field'
          v-model='weapon.augments[index]'
        >
          <option
            v-for='(id, name) in augmentList'
            :value='id'
          >
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

.weapon-argments {
  display: flex;
  flex-direction: column;
  width: 180px;
}

.weapon-argments .input-label {
  margin: 0;
  display: block;
  width: 100%;
  text-align: left;
}

.weapon-argments .input-field {
  width: 150px;
}

.affinity-input {
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
