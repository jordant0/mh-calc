<script>
import { SkillList } from '@/data/SkillList'

export default {
  name: 'SkillDisplay',

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
    },

    enableActivationEdit() {
      return !this.skillData.fixedActivation;
    },
  },

  methods: {
    updateSkillLevel($event) {
      this.$emit('skill-level-update', this.skill.id, parseInt($event.target.value));
    },

    updateSkillActivation($event) {
      if(this.skill.activation > 100) {
        this.skill.activation = 100;
      }

      if(this.skill.activation < 0) {
        this.skill.activation = 0;
      }
      this.$emit('skill-level-activation', this.skill.id, parseInt($event.target.value));
    },

    removeSkill() {
      this.$emit('skill-remove', this.skill.id);
    },
  }
}
</script>

<template>
  <div class='skill-display-item bordered-box dashed-border'>
    <div class='skill-header'>
      <div class='skill-name'>
        {{ skillName }}
      </div>

      <a class='remove-link' href='#' @click.prevent='removeSkill'>x</a>
    </div>

    <div class='skill-edit'>
      <div class='input-item'>
        <span class='input-label'>Level:</span>
        <select class='input-field' type='number' :value='skill.level' @change='updateSkillLevel'>
          <option v-for='level in skillLevels'>
            {{ level }}
          </option>
        </select>
      </div>

      <div v-if='enableActivationEdit' class='input-item'>
        <span class='input-label'>Activation:</span>
        <div>
          <input
            class='activation-input input-field'
            type='number'
            :value='skill.activation'
            :min='0'
            :max='100'
            @change='updateSkillActivation'
          />%
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.skill-display-item {
  width: 406px;
  box-sizing: border-box;
  padding: 16px 24px;
  margin: 0;
  margin-right: 30px;
  margin-top: 24px;
  position: relative;
}

.remove-link:hover {
  border-color: #efefef;
}

.skill-name {
  font-weight: 600;
  color: #24d0f7;
  font-size: 20px;
  text-align: left;
  margin-bottom: 12px;
}

.skill-edit {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.skill-edit .input-label {
  margin-right: 20px;
}

.skill-edit .input-field {
  width: 50px;
}

.activation-input {
  margin-right: 5px;
}
</style>
