<script>
import { SkillList } from '@/mixins/SkillList'

export default {
  name: 'SkillDisplayItem',

  props: {
    skill: Object,
  },

  computed: {
    skillData() {
      return SkillList[this.skill.id];
    },

    skillName() {
      return this.skillData.name;
    },

    skillLevels() {
      return [...Array(this.skillData.levels.length).keys()].map(i => i+1);
    }
  },

  methods: {
    updateSkillLevel($event) {
      this.$emit('skill-level-update', this.skill.id, parseInt($event.target.value));
    },

    updateSkillActivation($event) {
      this.$emit('skill-level-activation', this.skill.id, parseInt($event.target.value));
    },
  }
}
</script>

<template>
  <div class='skill-display-item'>
    {{ skillName }}
    <form class='skill-edit'>
      <div>
        Level:
        <select type='number' :value='skill.level' @change='updateSkillLevel'>
          <option v-for='level in skillLevels'>
            {{ level }}
          </option>
        </select>
      </div>
      <div>
        Activation:
        <input type='number' :value='skill.activation' @change='updateSkillActivation' />
      </div>
    </form>
  </div>
</template>
