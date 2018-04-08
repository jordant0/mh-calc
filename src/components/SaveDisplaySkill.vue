<script>
import { SkillList } from '@/data/SkillList'

export default {
  name: 'SaveDisplaySkill',

  props: {
    skill: Object,
    index: Number,
  },

  computed: {
    skillData() {
      return SkillList[this.skill.id];
    },

    classNames() {
      var names = ['save-detail', 'save-skill'];
      if(this.index !== 0) {
        names.push('right-align');
      }
      return names;
    }
  },
}
</script>

<template>
  <div :class='classNames'>
    <span v-if='index === 0'>Skills:</span>
    {{ skillData.name }} lv {{ skill.level }}
  </div>
</template>

<style>
  .save-skill.right-align {
    justify-content: flex-end;
  }
</style>
