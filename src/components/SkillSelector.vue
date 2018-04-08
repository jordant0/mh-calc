<script>
import VueSelect from 'vue-select'
import OptionsForSelect from '@/mixins/OptionsForSelect'
import { SkillList } from '@/data/SkillList'

export default {
  name: 'SkillSelector',

  mixins: [
    OptionsForSelect,
  ],

  components: {
    VueSelect,
  },

  data() {
    return {
      skillList: this.convertToOptions(SkillList),
    }
  },

  methods: {
    skillSelected(option) {
      this.$emit('skill-added', option.value);
    },
  },
}
</script>

<template>
  <div class='skill-item-selector'>
    <div class='skill-item-input input-item select-wrapper'>
      <span class='skill-item-label input-label'>
        Add skill
      </span>

      <vue-select
        placeholder='Type to search...'
        :options='skillList'
        @input='skillSelected'
      />
    </div>
  </div>
</template>
