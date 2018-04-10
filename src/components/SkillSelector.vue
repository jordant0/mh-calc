<script>
import Selector from '@/components/Selector'
import { SkillList } from '@/data/SkillList'

export default {
  name: 'SkillSelector',

  components: {
    Selector,
  },

  watch: {
    selected() {
      this.$emit('skill-added', this.selected);
    }
  },

  data() {
    return {
      selected: null,
      skillList: SkillList,
    }
  },
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
        :options='skillList'
      />
    </div>
  </div>
</template>
