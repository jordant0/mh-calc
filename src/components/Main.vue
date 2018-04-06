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

  watch: {
    'weapon.affinity': function (val) {
      if(this.weapon.affinity > 100) {
        this.weapon.affinity = 100;
      }

      if(this.weapon.affinity < 0) {
        this.weapon.affinity = 0;
      }
    },
  },

  data() {
    return {
      weapon: {
        raw: 200,
        affinity: 0,
        sharpness: 'Green'
      },
      skills: [],
      affinityMultiplier: 0.25,
      settings: {
        debug: false,
        verbose: false,
        precision: 2,
        version: '0.0.3',
      }
    }
  }
}
</script>

<template>
  <div class='mh-calc'>
    <h1>
      MHW Damage Calculator
      <div class='version-number'>
        v{{ settings.version }}
      </div>
    </h1>

    <div class='main-content'>
      <div class='weapon-col bordered-box'>
        <weapon-input :weapon='weapon' />
      </div>

      <calculator
        :weapon='weapon'
        :skills='skills'
        :affinityMultiplier='affinityMultiplier'
        :settings='settings'
      />
    </div>

    <div class='skills-col'>
      <skill-control :skills.sync='skills' />
    </div>
  </div>
</template>

<style>
.mh-calc {
  max-width: 1400px;
  margin: auto;
}

h1 {
  color: #e6d027;
}

.version-number {
  font-weight: 400;
  font-size: 12px;
  color: #777777;
  margin-top: 10px;
}

.main-content {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 50px;
}

.bordered-box {
  border: 3px solid #c78306;
  border-radius: 5px;
  padding: 24px 32px;
  margin: 0 20px;
}

.input-item {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-label {
  font-weight: 600;
  margin-right: 40px;
}

.input-field {
  padding: 4px 5px;
  border-radius: 2px;
  border: 0;
  width: 80px;
}

a {
  color: #bbbbbb;
  text-decoration: none;
}

a:hover {
  color: #efefef;
}
</style>
