<script>
import { SkillList } from '@/data/SkillList'

export default {
  name: 'SkillDisplay',

  props: {
    skill: Object,
    weapon: Object,
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

    displayClass() {
      var classNames = ['skill-item-display'];
      if(this.showWarning) {
        classNames.push('inactive');
      }
      return classNames;
    },

    showWarning() {
      return this.skill.id === 11 && !this.weapon.elementless; // Non-elemental Boost
    }
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
  <div :class='displayClass'>
    <div class='skill-header'>
      <div class='skill-item-name'>
        {{ skillName }}
      </div>

      <a class='icon-action skill-item-remove' href='#' @click.prevent='removeSkill' title='Remove'>
        <span class='glyphicon glyphicon-remove'></span>
      </a>
    </div>

    <div class='skill-edit skill-item-edit'>
      <div class='input-item'>
        <span class='input-label'>Level:</span>
        <select class='input-field' type='number' :value='skill.level' @change='updateSkillLevel'>
          <option v-for='level in skillLevels'>
            {{ level }}
          </option>
        </select>
      </div>

      <div v-if='enableActivationEdit' class='input-item skill-activation-input'>
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

    <div v-if='showWarning' class='skill-warning'>
      Weapon has an active element/status.
    </div>
  </div>
</template>

<style>
.skill-item-display.inactive .skill-item-name {
  color: #d80000;
}

.skill-edit {
  justify-content: space-between;
}

.skill-edit .input-label {
  margin-right: 20px;
}

.skill-edit .input-field {
  width: 55px;
}

.activation-input {
  margin-right: 5px;
}

.skill-warning {
  margin-top: 12px;
  font-style: italic;
  font-size: 14px;
  color: #d80000;
}

@media screen and (max-width: 1000px) {
  .skill-edit .input-label {
    margin-right: 12px;
  }
}
</style>
