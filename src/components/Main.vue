<script>
import WeaponInput from '@/components/WeaponInput'
import Calculator from '@/components/Calculator'

export default {
  name: 'Main',

  components: {
    WeaponInput,
    Calculator,
  },

  data() {
    return {
      weapon: {
        raw: 100,
        affinity: 0,
        sharpness: 'Green'
      },
      skills: [],
      affinityMultiplier: 0.25,
    }
  }
}
</script>

<template>
  <div class='mh-calc'>
    <h1>MHW Damage Calculator</h1>

    <weapon-input :weapon='weapon' />

    <calculator
      :weapon='weapon'
      :skills='skills'
      :affinityMultiplier='affinityMultiplier'
    />
  </div>
</template>
