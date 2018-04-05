<script>
import WeaponInput from '@/components/WeaponInput'

export default {
  name: 'Main',

  components: {
    WeaponInput,
  },

  data() {
    return {
      weapon: {
        raw: 100,
        affinity: 0,
        sharpness: 'Green'
      },
      skills: [],
    }
  }
}
</script>

<template>
  <div class='mh-calc'>
    <h1>MHW Damage Calculator</h1>

    <weapon-input :weapon='weapon' />
  </div>
</template>
