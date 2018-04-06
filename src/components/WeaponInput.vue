<script>
export default {
  name: 'WeaponInput',

  props: {
    weapon: Object,
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
</style>
