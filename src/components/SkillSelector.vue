<script>
import VueSelect from 'vue-select'
import { SkillList } from '@/data/SkillList'

export default {
  name: 'SkillSelector',

  components: {
    VueSelect,
  },

  data() {
    var listOfSkills = Object.entries(SkillList)
      .map(function(item) {
        return {
          label: item[1].name,
          value: parseInt(item[0])
        };
      })
      .sort(function(a, b) {
        var nameA = a.label.toUpperCase();
        var nameB = b.label.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

    return {
      skillList: listOfSkills,
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
  <div class='skill-selector'>
    <div class='skills-input input-item'>
      <span class='input-label'>
        Select skills
      </span>

      <vue-select
        placeholder='Type to search...'
        :options='skillList'
        @input='skillSelected'
      />
    </div>
  </div>
</template>

<style>
.v-select .dropdown-toggle {
  border-color: white !important;
  background-color: white !important;
  width: 400px;
}

.skills-input {
  width: 580px;
}
</style>
