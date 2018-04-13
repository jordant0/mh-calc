<script>
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
    },
    shown: Boolean,
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

  computed: {
    classNames() {
      var classNames = ['save-area'];
      if(this.shown) {
        classNames.push('shown')
      }
      return classNames;
    }
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
      var saveInfo = { version: this.settings.version, data: this.saves },
          saveData = JSON.stringify(saveInfo),
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
      var content = event.target.result;
      if(confirm('Replace current save data with imported data?')) {
        try {
          var newSaves = JSON.parse(content).data;
          this.$emit('update:saves', newSaves);
        }
        catch(e) {
          console.log(e);
        }
      }
    },

    toggleSaveSection() {
      this.$emit('toogle-save-section');
    },
  }
}
</script>

<template>
  <span :class='classNames'>
    <div class='save-manager'>
      <div class='save-top-section'>
        <div class='save-actions save-header'>
          <a class='button green-button bold-button' href='#' @click.prevent='getSaveName'>
            New Save
          </a>
          <a href='#' class='close-save-link' @click.prevent='toggleSaveSection'>
            <span class='glyphicon glyphicon-remove'></span>
          </a>
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
      </div>

      <div class='save-bottom-section'>
        <div class='save-actions save-export-import'>
          <a class='button' :href='savesFile' download='MHCalc-Saves.txt'>Export</a>
          <div class='import-wrapper'>
            <a class='button' href='#' @click.prevent='triggerSaveImport'>Import</a>
            <input @change='importSave' class='saves-import' name='saves' type='file' accept='text/plain'>
          </div>
        </div>

        <div class='save-actions'>
          <a class='clear-saves-links' href='#' @click.prevent='clearAllSaves'>Clear All</a>
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
.save-area {
  width: 0;
  transition: width 0.5s;
  overflow: hidden;
}

.close-save-link {
  font-size: 24px;
  color: #23527c;
  position: absolute;
  top: 10px;
  right: 10px;
}

.save-area.shown {
  width: 320px;
}

.save-manager {
  width: 320px;
  height: 100vh;
  top: 0;
  max-height: 100vh;
  overflow-y: auto;
  background-color: white;
  background-color: #ebf0f6;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  border-left: 6px solid #1f9e75;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.save-actions {
  display: flex;
  justify-content: space-between;
}

.clear-saves-links {
  font-size: 14px;
}

.saves-display {
  margin: 20px 0;
  max-height: calc(100vh - 160px);
  overflow: auto;
}

.save-bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.save-export-import {
  justify-content: normal
}

.saves-import {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.import-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  margin-left: 12px;
}

.import-wrapper:hover, .saves-import:hover {
  cursor: pointer;
}

.import-wrapper:hover .button, .saves-import:hover .button {
  background-color: #cccccc;
}

@media screen and (max-width: 1000px) {
  .save-area {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 10;
  }

  .save-manager {
    height: 100%;
    padding-bottom: 78px;
  }
}
</style>
