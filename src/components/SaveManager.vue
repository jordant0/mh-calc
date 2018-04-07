<script>
import StickyFill from 'stickyfilljs'
import SaveModal from '@/components/SaveModal'
import SaveDisplay from '@/components/SaveDisplay'
import JsonProcessor from '@/mixins/JsonProcessor'

export default {
  name: 'SaveManager',

  components: {
    SaveModal,
    SaveDisplay,
  },

  mixins: [
    JsonProcessor,
  ],

  props: {
    weapon: Object,
    skills: Array,
    items: Array,
    finalRaw: Number,
    saves: Array,
    settings: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      editModalShown: false,
      saveName: '',
      customName: false,
    }
  },

  mounted() {
    var elements = document.querySelectorAll('.save-area');
    StickyFill.add(elements);
  },

  methods: {
    getSaveName() {
      if(!this.customName || !this.saveName.length) {
        this.saveName = this.getTimeStamp();
      }
      this.editModalShown = true;
    },

    getTimeStamp() {
      var timeStamp = new Date();
      return timeStamp.toLocaleString();
    },

    closeEditModal() {
      this.editModalShown = false;
    },

    saveData(name) {
      if(name.length) {
        this.saveName = name;
        this.customName = true;
      }
      else {
        name = this.getTimeStamp();
        this.customName = false;
      }

      this.closeEditModal();

      var saveData = {
        name,
        weapon: this.deepClone(this.weapon),
        skills: this.deepClone(this.skills),
        items: this.deepClone(this.items),
        finalRaw: this.deepClone(this.finalRaw),
      };

      var newSaves = this.saves;
      newSaves.push(saveData);

      this.$emit('update:saves', newSaves);
    },

    removeSave(index) {
      if(this.saves[index]) {
        var newSaves = this.saves;
        newSaves.splice(index, 1);
        this.$emit('update:saves', newSaves);
      }
    },

    restoreSave(index) {
      var save = this.saves[index];
      if(save) {
        this.$emit('update:weapon', save.weapon);
        this.$emit('update:skills', save.skills);
        this.$emit('update:items', save.items);
      }
    },

    clearAllSaves() {
      if(confirm('Are you SURE you want to delete all saved data?')) {
        this.$emit('update:saves', []);
      }
    }
  }
}
</script>

<template>
  <span class='save-area'>
    <div class='save-manager bordered-box'>
      <div class='save-actions'>
        <a class='clear-saves-links' href='#' @click.prevent='clearAllSaves'>Clear All Saves</a>
        <a class='button' href='#' @click.prevent='getSaveName'>Save</a>
      </div>

      <div class='saves-display'>
        <save-display
          v-for='(save, index) in saves'
          :key='index'
          :save='save'
          :index='index'
          :settings='settings'
          :current-final-raw='finalRaw'
          @remove-save='removeSave'
          @restore-save='restoreSave'
        />
      </div>
    </div>

    <save-modal
      v-if='editModalShown'
      :save-name='saveName'
      @close='closeEditModal'
      @save='saveData'
    />
  </span>
</template>

<style>
.save-manager {
  width: 25%;
  float: right;
  box-sizing: border-box;
  position: -webkit-sticky;
  position: sticky;
  top: 24px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
}

.save-actions {
  display: flex;
  justify-content: space-between;
}

.clear-saves-links {
  font-size: 14px;
}
</style>
