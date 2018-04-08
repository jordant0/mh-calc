<script>
import RoundToDecimal from '@/mixins/RoundToDecimal'
import SaveDisplaySkill from '@/components/SaveDisplaySkill'
import SaveDisplayItem from '@/components/SaveDisplayItem'

export default {
  name: 'SaveDisplay',

  mixins: [
    RoundToDecimal,
  ],

  components: {
    SaveDisplaySkill,
    SaveDisplayItem
  },

  props: {
    save: Object,
    index: Number,
    currentFinalRaw: Number,
    settings: Object,
  },

  data() {
    return {
      infoShown: false,
    }
  },

  computed: {
    finalRawClass() {
      var classNames = ['save-detail-text', 'save-final-raw'];

      if(this.save.finalRaw > this.currentFinalRaw) {
        classNames.push('save-final-raw--higher');
      }

      if(this.save.finalRaw < this.currentFinalRaw) {
        classNames.push('save-final-raw--lower');
      }

      return classNames;
    },

    roundedRaw() {
      return this.roundToDecimal(this.save.finalRaw);
    },

    infoClassNames() {
      var names = ['save-info'];
      if(this.infoShown) {
        names.push('shown');
      }
      return names;
    },

    expandClassNames() {
      var names = ['icon-action', 'expand-icon'];
      if(this.infoShown) {
        names.push('expanded');
      }
      return names;
    },

    expandTitle() {
      if(this.infoShown) {
        return 'Collapse';
      }
      else {
        return 'Expand';
      }
    },
  },

  methods: {
    toggleExpand() {
      this.infoShown = !this.infoShown;
    },

    removeSave() {
      if(confirm('Are you sure you want to remove this save?')) {
        this.$emit('remove-save', this.index);
      }
    },

    restoreSave() {
      if(confirm('Overwrite current data with save data?')) {
        this.$emit('restore-save', this.index);
      }
    },

    overwriteSave() {
      if(confirm('Overwrite this save with current data?')) {
        this.$emit('overrite-save', this.index);
      }
    },
  }
}
</script>

<template>
  <div class='save-display-item'>
    <div class='save-iten-header'>
      <div class='save-display-info'>
        <div class='save-name'>
          {{ save.name }}
        </div>
        <div :class='finalRawClass'>
          {{ roundedRaw }}
        </div>
      </div>

      <div class='save-display-actions'>
        <div class='save-display-icons'>
          <a class='icon-action' href='#' @click.prevent='overwriteSave' title='Overwrite'>
            <span class='glyphicon glyphicon-floppy-disk'></span>
          </a>

          <a class='icon-action' href='#' @click.prevent='restoreSave' title='Load'>
            <span class='glyphicon glyphicon-open'></span>
          </a>

          <a class='icon-action save-remove' href='#' @click.prevent='removeSave' title='Remove'>
            <span class='glyphicon glyphicon-remove'></span>
          </a>
        </div>

        <a :class='expandClassNames' href='#' :title='expandTitle' @click.prevent='toggleExpand'>
          <span class='glyphicon glyphicon glyphicon-chevron-down'></span>
        </a>
      </div>
    </div>

    <div :class='infoClassNames'>
      <div class='save-detail weapon-data'>
        <div class='save-detail-label'>
          Weapon:
        </div>
        <div class='save-detail-text'>
          {{ save.weapon.raw }} Raw | {{ save.weapon.affinity }}% Affinity
        </div>
      </div>

      <save-display-skill
        v-for='(skill, index) in save.skills'
        :skill='skill'
        :index='index'
        :key='index'
      />

      <div v-if='save.items.length > 0' class='save-detail save-items'>
        Items:
        <save-display-item
          v-for='(item, index) in save.items'
          :item='item'
          :index='index'
          :length='save.items.length'
          :key='index'
        />
      </div>
    </div>
  </div>
</template>

<style>
.save-display-item {
  margin: 0;
  position: relative;
  padding: 12px;
  background-color: white;
  border-bottom: 1px solid #d6d4d4;
  border-right: 1px solid #d6d4d4;
  border-left: 5px solid #d6d4d4;
}

.save-display-item:hover {
  border-left: 5px solid #f67519;
}

.save-display-item:first-child {
  border-top: 1px solid #d6d4d4;
}

.save-info {
  height: auto;
  max-height: 0;
  transition: max-height 0.5s linear;
  overflow: hidden;
}

.save-info.shown {
  max-height: 500px;
}

.weapon-data {
  margin-top: 20px;
}

.save-display-info, .save-display-actions {
  display: flex;
  justify-content: space-between;
}

.save-name {
  text-align: left;
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.save-display-actions {
  margin-top: 12px;
}

.save-display-icons {
  display: flex;
}

.save-remove {
  margin-left: 12px;
}

.expand-icon {
  transition: transform 0.5s;
}

.expand-icon.expanded {
  transform: rotate(180deg);
}

.save-display-item:hover .save-name {
  white-space: normal;
}

.save-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777777;
  font-size: 14px;
}

.save-display-icons .icon-action {
  margin-right: 12px;
}

.save-final-raw {
  font-size: 18px;
  padding-left: 20px;
  position: relative;
}

.save-final-raw:after {
  content: '';
  position: absolute;
  top: 8px;
  left: 3px;
}

.save-final-raw--higher {
  color: #00a50e;
}

.save-final-raw--higher:after {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #00a50e;

}

.save-final-raw--lower {
  color: #ce1010;
}

.save-final-raw--lower:after {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #ce1010;
}

.save-items {
  display: block;
  text-align: left;
}
</style>
