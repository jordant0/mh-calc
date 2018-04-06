<script>
import SkillSelector from '@/components/SkillSelector'
import SkillDisplay from '@/components/SkillDisplay'
import { SkillList } from '@/mixins/SkillList'

export default {
  name: 'SkillControl',

  components: {
    SkillSelector,
    SkillDisplay,
  },

  props: {
    skills: Array,
  },

  methods: {
    findSkillIndex(skillId) {
      return this.skills.findIndex(function(skill) {
        return skill.id === skillId;
      });
    },

    addSkill(skillId) {
      var skillIndex = this.findSkillIndex(skillId);

      if(skillIndex < 0) {
        var newSkills = this.skills;
        newSkills.push({
          id: skillId,
          level: 1,
          activation: SkillList[skillId].defaultActiviation,
        });
        this.$emit('update:skills', newSkills);
      }
    },

    updateSkillLevel(skillId, skillLevel) {
      var skillIndex = this.findSkillIndex(skillId);

      if(this.skills[skillIndex].level !== skillLevel) {
        var newSkills = this.skills;
        newSkills[skillIndex].level = skillLevel;
        this.$emit('update:skills', newSkills);
      }
    },

    updateSkillActivation(skillId, skillActivation) {
      var skillIndex = this.findSkillIndex(skillId);

      if(this.skills[skillIndex].activation !== skillActivation) {
        var newSkills = this.skills;
        newSkills[skillIndex].activation = skillActivation;
        this.$emit('update:skills', newSkills);
      }
    }
  }
}
</script>

<template>
  <div class='skill-controls'>
    <skill-selector @skill-added='addSkill' />

    <skill-display
      :skills='skills'
      @skill-level-update='updateSkillLevel'
      @skill-level-activation='updateSkillActivation'
    />
  </div>
</template>
