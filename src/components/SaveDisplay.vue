<script>
import RoundToDecimal from '@/mixins/RoundToDecimal'

export default {
  name: 'SaveDisplay',

  mixins: [
    RoundToDecimal,
  ],

  props: {
    save: Object,
    index: Number,
    currentFinalRaw: Number,
    settings: Object,
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
  },

  methods: {
    removeSave() {
      if(confirm('Are you sure you want to remove this save?')) {
        this.$emit('remove-save', this.index);
      }
    },

    restoreSave() {
      if(confirm('Override current data with save data?')) {
        this.$emit('restore-save', this.index);
      }
    },
  }
}
</script>

<template>
  <div class='save-display-item bordered-box dashed-border'>
    <a class='remove-link' href='#' @click.prevent='removeSave'>x</a>

    <div class='save-name'>
      {{ save.name }}
    </div>

    <div class='save-detail weapon-data'>
      <div class='save-detail-label'>
        Weapon:
      </div>
      <div class='save-detail-text'>
        {{ save.weapon.raw }} Raw | {{ save.weapon.affinity }}% Affinity
      </div>
    </div>

    <div class='save-detail average-raw'>
      <div class='save-detail-label'>
        Average Raw:
      </div>
      <div :class='finalRawClass'>
        {{ roundedRaw }}
      </div>
    </div>

    <div class='save-detail-actions'>
      <a class='button' href='#' @click.prevent='restoreSave'>Restore</a>
    </div>
  </div>
</template>

<style>
.save-display-item {
  margin: 0;
  margin-top: 20px;
  position: relative;
  padding: 16px;
}

.save-display-item:first-child {
  margin-top: 32px;
}

.save-name {
  font-weight: 600;
  text-align: left;
  margin-right: 24px;
}

.save-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777777;
  margin-top: 8px;
}

.weapon-data {
  margin-top: 12px;
}

.save-final-raw {
  font-weight: 600;
  font-size: 18px;
  color: yellow;
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
  color: #62ff00;
}

.save-final-raw--higher:after {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #62ff00;

}

.save-final-raw--lower {
  color: red;
}

.save-final-raw--lower:after {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid red;
}

.save-detail-actions {
  display: flex;
  margin-top: 12px;
}
</style>
