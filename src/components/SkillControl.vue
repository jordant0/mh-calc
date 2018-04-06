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

      if(skillIndex >= 0 && this.skills[skillIndex].level !== skillLevel) {
        var newSkills = this.skills;
        newSkills[skillIndex].level = skillLevel;
        this.$emit('update:skills', newSkills);
      }
    },

    updateSkillActivation(skillId, skillActivation) {
      var skillIndex = this.findSkillIndex(skillId);

      if(skillActivation > 100) {
        skillActivation = 100;
      }

      if(skillActivation < 0) {
        skillActivation = 0;
      }

      if(skillIndex >= 0 && this.skills[skillIndex].activation !== skillActivation) {
        var newSkills = this.skills;
        newSkills[skillIndex].activation = skillActivation;
        this.$emit('update:skills', newSkills);
      }
    },

    removeSkill(skillId) {
      var skillIndex = this.findSkillIndex(skillId);

      if(skillIndex >= 0) {
        var newSkills = this.skills;
        newSkills.splice(skillIndex, 1);
        this.$emit('update:skills', newSkills);
      }
    },
  }
}
</script>

<template>
  <div class='skill-controls bordered-box'>
    <skill-selector @skill-added='addSkill' />

    <skill-display
      :skills.sync='skills'
      @skill-level-update='updateSkillLevel'
      @skill-level-activation='updateSkillActivation'
      @skill-remove='removeSkill'
    />
  </div>
</template>
