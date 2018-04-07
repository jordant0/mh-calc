<script>
import ListLookup from '@/mixins/ListLookup'
import RoundToDecimal from '@/mixins/RoundToDecimal'
import JsonProcessor from '@/mixins/JsonProcessor'
import { SkillList } from '@/data/SkillList'
import { ItemList } from '@/data/ItemList'
import { Sharpness } from '@/data/Sharpness'
import { Weapons } from '@/data/Weapons'
import { Coatings } from '@/data/Coatings'
import { Augments } from '@/data/Augments'

export default {
  name: 'Calculator',

  mixins: [
    ListLookup,
    RoundToDecimal,
    JsonProcessor,
  ],

  props: {
    weapon: Object,
    skills: Array,
    items: Array,
    finalRaw: Number,
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

    this.categoriesQueue = [];
  },

  computed: {
    debugOn() {
      return this.settings.debug;
    },

    verboseOn() {
      return this.debugOn && this.settings.verbose;
    },

    attackAugmentsBonus() {
      return 5 * this.getAugmentCount(Augments['Attack']);
    },

    affinityAugmentsBonus() {
      var count = this.getAugmentCount(Augments['Affinity']);
      if(count < 1) {
        return 0;
      }
      else if(count === 1) {
        return 10;
      }
      else {
        return 10 + 5 * (count - 1);
      }
    },

    weaponRaw() {
      var raw = this.weapon.raw + this.attackAugmentsBonus,
          skill = this.findSkill(this.specialSkills.nonElemBoost);

      if(skill) {
        return raw * 1.1;
      }
      else {
        return raw;
      }
    },

    affinity() {
      return (this.weapon.affinity + this.affinityAugmentsBonus) / 100;
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

    weaponCategory() {
      return Weapons[this.weapon.type].category;
    },

    middleMultiplierLevel() {
      if(this.weaponCategory === 'blademaster') {
        return this.weapon.sharpness;
      }
      else if(this.weaponCategory === 'bow') {
        return this.weapon.coating;
      }
      else {
        return 0;
      }
    },

    previousMultiplierLevel() {
      var prev = this.middleMultiplierLevel - 1;
      if(prev < 0) {
        prev = 0;
      }
      return prev;
    },

    variableMiddleMultiplier() {
      return this.weaponCategory !== 'gunner' && this.weapon.activation < 100 && this.middleMultiplierLevel !== this.previousMultiplierLevel;
    },

    skillsForCalculation() {
      var _this = this;
      return this.skills.filter(function(skill) {
        return Object.values(_this.specialSkills).indexOf(skill.id) === -1 && skill.activation > 0;
      });
    },

    fixedSkills() {
      return this.skillsForCalculation.filter(function(skill) {
        return skill.activation >= 100;
      });
    },

    variableSkills() {
      return this.skillsForCalculation.filter(function(skill) {
        return skill.activation < 100;
      });
    },

    itemsForCalculation() {
      return this.items.filter(function(item) {
        return item.activation > 0;
      });
    },

    fixedItems() {
      return this.itemsForCalculation.filter(function(item) {
        return item.activation >= 100;
      });
    },

    variableItems() {
      return this.itemsForCalculation.filter(function(item) {
        return item.activation < 100;
      });
    },

    fixedBonus() {
      var raw = 0,
          affinity = 0,
          rawBoost = 1;

      this.categoriesQueue = {}; // Reset category queue

      if(this.verboseOn) {
        console.log('[ Calculating fixed raw and affinity ]');
      }

      for(var i = 0; i < this.fixedItems.length; i++) {
        var item = this.fixedItems[i],
            itemData = this.adjustedItemBonus(item);

        raw += itemData.raw;
        affinity += itemData.affinity;
        rawBoost *= itemData.rawBoost;
      }

      for(var i = 0; i < this.fixedSkills.length; i++) {
        var skill = this.fixedSkills[i],
            skillData = this.getDataForSkill(skill);

        raw += skillData.raw;
        affinity += skillData.affinity;
      }

      return { raw, affinity, rawBoost };
    },

    finalAverageRaw() {
      var finalResult = 0,
          variablesCount = this.variableItems.length + this.variableSkills.length;

      if(this.variableMiddleMultiplier) {
        variablesCount += 1;
      }

      if(variablesCount < 1) {
        finalResult = this.averageRaw(
          this.fixedBonus.rawBoost,
          this.fixedBonus.raw,
          this.middleMultiplierLevel,
          this.fixedBonus.affinity
        );
      }
      else {
        if(this.verboseOn) {
          console.log(`[ Calculating variable raw and affinity ]`);
        }

        var permutations = 2 ** variablesCount,
            totalAverageRaw = 0,
            fixedQueue = this.deepClone(this.categoriesQueue);

        for (var i = 0; i < permutations; i++) {
          var config = this.convertToDecimal(i, variablesCount),
              configResults = this.getBonusForConfig(config);

          this.categoriesQueue = this.deepClone(fixedQueue); // Reset queue each time

          if(this.debugOn) {
            console.log(`Calculating raw for configuration ${config}. Chance: ${configResults.chance * 100}%`);
          }

          if(configResults.chance > 0) {
            totalAverageRaw += this.averageRaw(
              configResults.rawBoost,
              configResults.raw,
              configResults.middleMultiplierLevel,
              configResults.affinity
            ) * configResults.chance;
          }
        }
        finalResult = totalAverageRaw;
      }

      if(finalResult !== this.finalRaw) {
        this.$emit('updated-final-raw', finalResult);
      }

      return finalResult;
    },

    displayFixeRaw() {
      return this.roundToDecimal(this.weaponRaw * this.fixedBonus.rawBoost + this.fixedBonus.raw, 0);
    },

    displayFixedAffinity() {
      return this.roundToDecimal(this.adjustAffinity(this.affinity + this.fixedBonus.affinity) * 100);
    },

    roundedFinalRaw() {
      return this.roundToDecimal(this.finalAverageRaw);
    },
  },

  methods: {
    getAugmentCount(augment) {
      return this.weapon.augments.filter(x => x === augment).length;
    },

    convertToDecimal(num, size) {
      var binary = (num >>> 0).toString(2),
          padding = '0'.repeat(size - binary.length);
      return `${padding}${binary}`;
    },

    sharpnessMultiplier(level) {
      return Sharpness[level].multiplier;
    },

    coatingMultiplier(level) {
      return Coatings[level].multiplier;
    },

    middleMultiplier(level) {
      if(this.weaponCategory === 'blademaster') {
        return this.sharpnessMultiplier(level);
      }
      else if(this.weaponCategory === 'bow') {
        return this.coatingMultiplier(level);
      }
      else {
        return 1;
      }
    },

    averageRaw(rawBoost, rawBonus, middleMultiplierLevel, affinityBonus) {
      var multiplier = this.affinityMultiplier,
          affinity = this.adjustAffinity(this.affinity + affinityBonus),
          middleMultiplier = this.middleMultiplier(middleMultiplierLevel);

      if(affinity < 0) {
        multiplier = .25;
      }

      var result = (this.weaponRaw * rawBoost + rawBonus) * middleMultiplier * (1 + (affinity * multiplier));
      if(this.settings.debug) {
        console.log(`> (${this.weaponRaw} * ${rawBoost} + ${rawBonus}) * ${middleMultiplier} * (1 + (${affinity} * ${multiplier})) = ${result}`);
      }
      return result;
    },

    adjustAffinity(affinity) {
      affinity = Math.min(1, affinity);
      affinity = Math.max(-1, affinity);
      return affinity;
    },

    getBonusForConfig(config) {
      var configIndex = 0,
          raw = this.fixedBonus.raw,
          affinity = this.fixedBonus.affinity,
          rawBoost = this.fixedBonus.rawBoost,
          middleMultiplierLevel = this.middleMultiplierLevel,
          chance = 1;

      if(this.variableMiddleMultiplier) {
        activation = this.weapon.activation / 100;
        if(config[configIndex] === '1') { // Current sharpness/coating level
          middleMultiplierLevel = this.middleMultiplierLevel;
          chance *= activation;
        }
        else {  // Drop down to previous sharpness/coating
          middleMultiplierLevel = this.previousMultiplierLevel;
          chance *= (1 - activation);
        }
        configIndex++;
      }

      for (var i = 0; i < this.variableItems.length; i++) {
        var item = this.variableItems[i],
            activation = item.activation / 100;

        if(config[configIndex] === '1') { // Item is activated
          var itemData = this.adjustedItemBonus(item);

          raw += itemData.raw;
          affinity += itemData.affinity;
          rawBoost *= itemData.rawBoost;

          chance *= activation;
        }
        else {  // Item is not activated
          chance *= (1 - activation);
        }

        configIndex++;
      }

      for (var i = 0; i < this.variableSkills.length; i++) {
        var skill = this.variableSkills[i],
            activation = skill.activation / 100;

        if(config[configIndex] === '1') { // Skill is activated
          var skillData = this.getDataForSkill(skill);

          raw += skillData.raw;
          affinity += skillData.affinity;

          chance *= activation;
        }
        else {  // Skill is not activated
          chance *= (1 - activation);
        }

        configIndex++;
      }

      return {
        raw,
        affinity,
        rawBoost,
        middleMultiplierLevel,
        chance,
      };
    },

    getDataForSkill(skill) {
      var skillData = SkillList[skill.id],
          raw = skillData.levels[skill.level - 1].rawModifier || 0,
          affinity = skillData.levels[skill.level - 1].affinityModifier || 0;

      if(this.verboseOn) {
        console.log(`Checking data for skill "${skillData.name}" lv ${skill.level} | Raw: ${raw} | Affinity: ${affinity}`);
      }

      return { raw, affinity };
    },

    getDataForItem(item) {
      var itemData = ItemList[item.id],
          raw = itemData.effect.rawModifier || 0,
          affinity = itemData.effect.affinityModifier || 0,
          rawBoost = 1;

      if(itemData.effect.rawBoost) {
        rawBoost = 1 + itemData.effect.rawBoost;
      }

      if(this.verboseOn) {
        console.log(`Checking data for item "${itemData.name}" | Raw: ${raw} | Affinity: ${affinity} | Raw Boost: ${rawBoost}`);
      }

      return { raw, affinity, rawBoost };
    },

    adjustedItemBonus(item) {
      var itemData = ItemList[item.id],
          itemBonus = this.getDataForItem(item);

      if(itemData.itemCategory) {
        if(this.categoriesQueue[itemData.itemCategory]) { // Handle other active items in same category
          var previousConfig = this.categoriesQueue[itemData.itemCategory],
              stats = [
                { name: 'raw', multiplicative: false },
                { name: 'affinity', multiplicative: false },
                { name: 'rawBoost', multiplicative: true },
              ];

          for(var i = 0; i < stats.length; i++) {
            var stat = stats[i],
                defaultValue = (stat.multiplicative ? 1 : 0),
                oldBonus = (previousConfig[stat.name] || defaultValue),
                newBonus = (itemBonus[stat.name] || defaultValue);

            if(newBonus > defaultValue && oldBonus > defaultValue) {
              if(oldBonus >= newBonus) {
                if(this.verboseOn) {
                  console.log(`Stronger ${stat.name} effect for item "${itemData.name}" already exists, nullifying bonus`);
                }
                itemBonus[stat.name] = defaultValue;
              }
              else {
                if(stat.multiplicative) {
                  itemBonus[stat.name] = newBonus / oldBonus;
                }
                else {
                  itemBonus[stat.name] = newBonus - oldBonus;
                }
                if(this.verboseOn) {
                  console.log(`Weaker ${stat.name} effect for item "${itemData.name}" already exists at ${oldBonus}. Applying a difference of ${itemBonus[stat.name]}`);
                }
                this.categoriesQueue[itemData.itemCategory][stat.name] = newBonus;
              };
            }
          }
        }
        else {
          if(this.verboseOn) {
            console.log(`Initializing category queue for category ${item.itemCategory}`);
          }
          this.categoriesQueue[itemData.itemCategory] = this.deepClone(itemBonus);
        }
      }

      return itemBonus;
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
  max-width: 320px;
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

.damage-label {
  text-align: left;
}

.damage-final .damage-number {
  color: #62ff00;
}
</style>
