<script>
import SkillDisplayItem from '@/components/SkillDisplayItem'
import { SkillList } from '@/mixins/SkillList'

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
    }
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
    />
  </div>
</template>
