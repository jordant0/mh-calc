<script>
export default {
  name: 'Calculator',

  props: {
    weapon: Object,
    skills: Array,
    affinityMultiplier: Number,
  },

  computed: {
    sharpnessMultiplier() {
      switch(this.weapon.sharpness) {
        case 'White':
          return 1.32;
        case 'Blue':
          return 1.2;
        case 'Green':
          return 1.05;
        case 'Yellow':
          return 1;
        case 'Red':
          return 0.75;
        case 'Orange':
          return 0.50;
        default:
          return 1;
      }
    },

    affinity() {
      return this.weapon.affinity / 100;
    },

    rawValue() {
      return this.weapon.raw * this.sharpnessMultiplier;
    },

    finalAverageRaw() {
      return this.rawValue * (1 + this.affinity * this.affinityMultiplier);
    }
  }
}
</script>

<template>
  <div class='damage-display'>
    Average raw: {{ this.finalAverageRaw }}
  </div>
</template>
