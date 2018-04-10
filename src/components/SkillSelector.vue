<script>
import Selector from '@/components/Selector'
import { SkillList } from '@/data/SkillList'

export default {
  name: 'SkillSelector',

  components: {
    Selector,
  },

  props: {
    skills: Array
  },

  watch: {
    selected() {
      if(this.selected || this.selected === 0) {
        this.$emit('skill-added', this.selected);
        this.selected = null;
      }
    }
  },

  data() {
    return {
      selected: null,
      skillList: SkillList,
    }
  },

  computed: {
    skillIds() {
      return this.skills.map(skill => skill.id.toString());
    },

    filteredList() {
      var result = {};

      for(var key in this.skillList) {
        if(this.skillIds.indexOf(key) === -1) {
          result[key] = this.skillList[key];
        }
      }

      return result;
    },
  }
}
</script>

<template>
  <div class='skill-item-selector'>
    <div class='skill-item-input input-item select-wrapper'>
      <span class='skill-item-label input-label'>
        Add skill
      </span>

      <selector
        class='skill-item-selector'
        :value.sync='selected'
        :options='filteredList'
      />
    </div>
  </div>
</template>
