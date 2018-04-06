<script>
import FindSkill from '@/mixins/FindSkill'
import { SkillList } from '@/data/SkillList'

export default {
  name: 'Calculator',

  mixins: [
    FindSkill,
  ],

  props: {
    weapon: Object,
    skills: Array,
    settings: {
      type: Object,
      default: {}
    }
  },

  created() {
    this.specialSkills = {
      criticalBoost: 0,
      nonElemBoost: 11,
    };
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

    weaponRaw() {
      var skill = this.findSkill(this.specialSkills.nonElemBoost);

      if(skill) {
        return this.weapon.raw * 1.1;
      }
      else {
        return this.weapon.raw;
      }
    },

    affinity() {
      return this.weapon.affinity / 100;
    },

    affinityMultiplier() {
      var skill = this.findSkill(this.specialSkills.criticalBoost);

      if(skill) {
        return 0.25 + skill.level * 0.05;
      }
      else {
        return 0.25;
      }
    },

    skillsForCalculation() {
      var _this = this;
      return this.skills.filter(function(skill) {
        return Object.values(_this.specialSkills).indexOf(skill.id) === -1;
      });
    },

    fixedSkills() {
      return this.skillsForCalculation.filter(function(skill) {
        return skill.activation >= 100;
      });
    },

    variableSkills() {
      return this.skillsForCalculation.filter(function(skill) {
        return skill.activation < 100 && skill.activation > 0;
      });
    },

    fixedRawAndAffinity() {
      var raw = this.weaponRaw,
          affinity = this.affinity;

      if(this.settings.debug && this.settings.verbose) {
        console.log('[ Calculating fixed raw and affinity ]');
      }

      for (var i = 0; i < this.fixedSkills.length; i++) {
        var skill = this.fixedSkills[i],
            skillData = this.getRawAndAffinityForSkill(skill);

        raw += skillData.raw;
        affinity += skillData.affinity;;

        affinity = Math.min(1, affinity);
        affinity = Math.max(-1, affinity);
      }

      return { raw, affinity };
    },

    finalAverageRaw() {
      var variablesCount = this.variableSkills.length;

      if(variablesCount < 1) {
        return this.averageRaw(this.fixedRawAndAffinity.raw, this.fixedRawAndAffinity.affinity);
      }
      else {
        console.log(`[ Calculating variable raw and affinity | Fixed Raw: ${this.fixedRawAndAffinity.raw} | Fixed Affinity: ${this.fixedRawAndAffinity.affinity} ]`);

        var permutations = 2 ** variablesCount,
            totalAverageRaw = 0;

        for (var i = 0; i < permutations; i++) {
          var config = this.convertToDecimal(i, variablesCount),
              configResults = this.getRawAndAffinityForConfig(config);

          if(this.settings.debug) {
            console.log(`Calculating raw for configuration ${config}. Chance: ${configResults.chance * 100}%`);
          }

          if(configResults.chance > 0) {
            totalAverageRaw += this.averageRaw(configResults.raw, configResults.affinity) * configResults.chance;
          }
        }
        return totalAverageRaw;
      }
    },

    displayFixeRaw() {
      return this.roundToDecimal(this.fixedRawAndAffinity.raw);
    },

    displayFixedAffinity() {
      return this.roundToDecimal(this.fixedRawAndAffinity.affinity * 100);
    },

    roundedFinalRaw() {
      return this.roundToDecimal(this.finalAverageRaw);
    },
  },

  methods: {
    convertToDecimal(num, size) {
      var binary = (num >>> 0).toString(2),
          padding = '0'.repeat(size - binary.length);
      return `${padding}${binary}`;
    },

    averageRaw(rawValue, affinity) {
      var multiplier = this.affinityMultiplier
      if(affinity < 0) {
        multiplier = .25;
      }

      var result = rawValue * this.sharpnessMultiplier * (1 + affinity * multiplier);
      if(this.settings.debug) {
        console.log(`> ${rawValue} * ${this.sharpnessMultiplier} * (1 + ${affinity} * ${multiplier}) = ${result}`);
      }
      return result;
    },

    getRawAndAffinityForConfig(config) {
      var configIndex = 0,
          raw = this.fixedRawAndAffinity.raw,
          affinity = this.fixedRawAndAffinity.affinity,
          chance = 1;

      for (var i = 0; i < this.variableSkills.length; i++) {
        var skill = this.variableSkills[i],
            activation = skill.activation / 100;

        if(config[configIndex] === '1') { // Skill is activated
          var skillData = this.getRawAndAffinityForSkill(skill);

          raw += skillData.raw;
          affinity += skillData.affinity;

          affinity = Math.min(1, affinity);
          affinity = Math.max(-1, affinity);

          chance *= activation;
        }
        else {  // Skill is not activated
          chance *= (1 - activation);
        }

        configIndex++;
      }

      return { raw, affinity, chance };
    },

    getRawAndAffinityForSkill(skill) {
      var skillData = SkillList[skill.id],
          raw = skillData.levels[skill.level - 1].rawModifier || 0,
          affinity = skillData.levels[skill.level - 1].affinityModifier || 0;

      if(this.settings.debug && this.settings.verbose) {
        console.log(`Checking data for skill "${skillData.name}" lv ${skill.level} | Raw: ${raw} | Affinity: ${affinity}`);
      }

      return { raw, affinity };
    },

    roundToDecimal(num) {
      var factor = Math.pow(10, this.settings.precision || 2);

      return Math.round(num * factor) / factor;
    },
  },
}
</script>

<template>
  <div class='damage-display bordered-box'>
    <div class='damage-item damage-detail'>
      <span class='damage-label'>Fixed raw:</span>
      <span class='damage-number'>{{ displayFixeRaw }}</span>
    </div>

    <div class='damage-item damage-detail'>
      <span class='damage-label'>Fixed affinity:</span>
      <span class='damage-number'>{{ displayFixedAffinity }}%</span>
    </div>

    <div class='damage-item damage-detail'>
      <span class='damage-label'>Affinity multiplier:</span>
      <span class='damage-number'>{{ affinityMultiplier }}</span>
    </div>

    <div class='damage-item damage-final'>
      <span class='damage-label'>Average raw:</span>
      <span class='damage-number'>{{ this.roundedFinalRaw }}</span>
    </div>
  </div>
</template>

<style>
.damage-display {
  max-width: 400px;
  flex: 1;
  margin-bottom: auto;
}

.damage-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.damage-detail {
  color: #777777;
}

.damage-final {
  font-size: 24px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 0;
}

.damage-final .damage-number {
  color: #62ff00;
}
</style>
