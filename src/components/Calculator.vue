<script>
import { SkillList } from '@/mixins/SkillList'

export default {
  name: 'Calculator',

  props: {
    weapon: Object,
    skills: Array,
    affinityMultiplier: Number,
    settings: {
      type: Object,
      default: {}
    }
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

    finalAverageRaw() {
      if(this.skills.length < 1) {
        return this.averageRaw(this.weapon.raw, this.affinity);
      }
      else {
        var permutations = 2 ** this.skills.length,
            totalAverageRaw = 0;

        for (var i = 0; i < permutations; i++) {
          var config = this.convertToDecimal(i, this.skills.length),
              configResults = this.getRawAndAffinityForConfig(config);

          if(this.settings.debug) {
            console.log(`Calculating raw for configuration ${config} with raw ${configResults.raw} and affitity ${configResults.affinity}. Chance: ${configResults.chance * 100}%`);
          }
          totalAverageRaw += this.averageRaw(configResults.raw, configResults.affinity) * configResults.chance;
        }
        return totalAverageRaw;
      }
    }
  },

  methods: {
    convertToDecimal(num, size) {
      var binary = (num >>> 0).toString(2),
          padding = '0'.repeat(size - binary.length);
      return `${padding}${binary}`;
    },

    averageRaw(rawValue, affinity) {
      return rawValue * this.sharpnessMultiplier * (1 + affinity * this.affinityMultiplier);
    },

    getRawAndAffinityForConfig(config) {
      var configIndex = 0,
          affinity = this.affinity,
          raw = this.weapon.raw,
          chance = 1;

      for (var i = 0; i < this.skills.length; i++) {
        var skill = this.skills[i],
            activation = skill.activation / 100;

        if(config[configIndex] === '1') { // Skill is activated
          var skillData = SkillList[skill.id];

          raw += skillData.levels[skill.level - 1].rawModifier;
          affinity += skillData.levels[skill.level - 1].affinityModifier;
          affinity = Math.min(1, affinity);
          chance *= activation;
        }
        else {  // Skill is not activated
          chance *= (1 - activation);
        }

        configIndex++;
      }

      return { raw, affinity, chance };
    },
  },
}
</script>

<template>
  <div class='damage-display'>
    Average raw: {{ this.finalAverageRaw }}
  </div>
</template>
