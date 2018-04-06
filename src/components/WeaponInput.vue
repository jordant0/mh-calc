<script>
export default {
  name: 'WeaponInput',

  props: {
    weapon: Object,
  },

  methods: {
    flipSign() {
      this.weapon.affinity = -this.weapon.affinity;
    }
  }
}
</script>

<template>
  <form class='weapon-input'>
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
  </form>
</template>

<style>
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
