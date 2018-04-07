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
      savesFile: null,
    }
  },

  watch: {
    saves() {
      this.createSaveFile();
    },
  },

  created() {
    this.createSaveFile();
  },

  mounted() {
    var elements = document.querySelectorAll('.save-area');
    StickyFill.add(elements);
  },

  methods: {
    getSaveName() {
      this.saveName = this.getTimeStamp();
      this.editModalShown = true;
    },

    getTimeStamp() {
      var timeStamp = new Date();
      return timeStamp.toLocaleString();
    },

    closeEditModal() {
      this.editModalShown = false;
    },

    getSaveData(name) {
      return {
        name,
        weapon: this.deepClone(this.weapon),
        skills: this.deepClone(this.skills),
        items: this.deepClone(this.items),
        finalRaw: this.deepClone(this.finalRaw),
      };
    },

    saveData(name) {
      if(!name.length) {
        name = this.getTimeStamp();
      }

      this.closeEditModal();

      var saveData = this.getSaveData(name);

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
        this.$emit('update:weapon', this.deepClone(save.weapon));
        this.$emit('update:skills', this.deepClone(save.skills));
        this.$emit('update:items', this.deepClone(save.items));
      }
    },

    overwriteSave(index) {
      var save = this.saves[index],
          saveData = this.getSaveData(save.name),
          newSaves = this.deepClone(this.saves);

      newSaves[index] = saveData;
      this.$emit('update:saves', newSaves);
    },

    clearAllSaves() {
      if(confirm('Are you SURE you want to delete all saved data?')) {
        this.$emit('update:saves', []);
      }
    },

    createSaveFile() {
      var saveData = JSON.stringify(this.saves),
          file = new Blob([saveData], {type: 'text/plain'});

      if (this.savesFile !== null) {
        window.URL.revokeObjectURL(this.savesFile);
      }

      this.savesFile = window.URL.createObjectURL(file);
    },

    importSave(event) {
      if(event.target.files.length) {
        var file = event.target.files[0],
            reader = new FileReader();

        reader.onload = this.processImportedSave;
        reader.readAsText(file);
      }
    },

    processImportedSave(event) {
      var data = event.target.result;
      if(confirm('Replace current save data with imported data?')) {
        try {
          var newSaves = JSON.parse(data);
          this.$emit('update:saves', newSaves);
        }
        catch(e) {
          console.log(e);
        }
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
          @overrite-save='overwriteSave'
        />
      </div>

      <div class='save-export-import'>
        <a class='button' :href='savesFile' download='MHCalc-Saves.txt'>Export Saves</a>
        <div class='import-wrapper'>
          <a class='button' href='#' @click.prevent='triggerSaveImport'>Import Saves</a>
          <input @change='importSave' class='saves-import' name='saves' type='file' accept='text/plain'>
        </div>
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

.save-export-import {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.import-wrapper {
  position: relative;
  display: flex;
}

.saves-import {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.import-wrapper:hover, .saves-import:hover {
  cursor: pointer;
}
</style>
