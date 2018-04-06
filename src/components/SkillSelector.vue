<script>
import VueSelect from 'vue-select'
import { SkillList } from '@/mixins/SkillList'

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
      selectedSkill: '',
    }
  },

  methods: {
    skillSelected(option) {
      this.$emit('skill-added', option.value);
      var skillIndex = this.skillList.findIndex(function(skill) {
        return skill.value === option.value;
      });
    },
  },
}
</script>

<template>
  <div class='skill-selector'>
    <div>
      Select skills
    </div>
    <vue-select
      placeholder='Select skills...'
      :clear-search-on-select='true'
      :options='skillList'
      :on-change='skillSelected'
    />
  </div>
</template>
