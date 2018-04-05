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
    <div>
      <label>Raw:</label>
      <input type='text' v-model='weapon.raw' />
    </div>

    <div>
      <label>Affinity:</label>
      <input type='text' v-model='weapon.affinity' />%
    </div>

    <div>
      <label>Sharpness:</label>
      <select v-model='weapon.sharpness'>
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
