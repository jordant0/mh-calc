<script>
import WeaponInput from '@/components/WeaponInput'
import Calculator from '@/components/Calculator'
import SkillControl from '@/components/SkillControl'

export default {
  name: 'Main',

  components: {
    WeaponInput,
    Calculator,
    SkillControl,
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
      settings: {
        debug: false,
      }
    }
  }
}
</script>

<template>
  <div class='mh-calc'>
    <h1>MHW Damage Calculator</h1>

    <weapon-input :weapon='weapon' />

    <skill-control :skills.sync='skills' />

    <calculator
      :weapon='weapon'
      :skills='skills'
      :affinityMultiplier='affinityMultiplier'
      :settings='settings'
    />
  </div>
</template>
