<script>
import SkillDisplayItem from '@/components/SkillDisplayItem'
import { SkillList } from '@/data/SkillList'

export default {
  name: 'SkillDisplay',

  components: {
    SkillDisplayItem,
  },

  props: {
    skills: Array,
  },

  methods: {
    updateSkillLevel(skillId, skillLevel) {
      this.$emit('skill-level-update', skillId, skillLevel);
    },

    updateSkillActivation(skillId, updateSkillActivation) {
      this.$emit('skill-level-activation', skillId, updateSkillActivation);
    },

    removeSkill(skillId) {
      this.$emit('skill-remove', skillId);
    },
  }
}
</script>

<template>
  <div class='skills-display'>
    <skill-display-item
      v-for='skill in skills'
      :key='skill.id'
      :skill='skill'
      @skill-level-update='updateSkillLevel'
      @skill-level-activation='updateSkillActivation'
      @skill-remove='removeSkill'
    />
  </div>
</template>

<style>
.skills-display {
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;
}
</style>
