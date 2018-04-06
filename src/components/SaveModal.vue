<script>
export default {
  name: 'SaveModal',

  props: {
    saveName: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      tempSaveName: this.saveName,
    }
  },

  methods: {
    closeModal() {
      this.$emit('close');
    },

    modalSaved() {
      this.$emit('save', this.tempSaveName);
    },
  }
}
</script>

<template>
  <transition name='modal'>
    <div class='modal-mask' @click.prevent='closeModal'>
      <div class='modal-wrapper'>
        <div class='modal-container' @click.stop>

          <div class='modal-header'>
            Enter a name for the save:
          </div>

          <div class='modal-body'>
            <form class='save-name-edit' @submit.prevent='modalSaved'>
              <input
                class='input-field'
                type='text'
                v-model='tempSaveName'
                maxlength='50'
                autofocus
              />
            </form>
          </div>

          <div class='modal-footer'>
            <a class='button' href='#' @click.prevent='closeModal'>Cancel</a>
            <a class='button' href='#' @click.prevent='modalSaved'>Save</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  color: black;
}

.modal-container .input-field {
  border: 1px solid #c7c5c5;
  width: 100%;
  text-align: center;
  padding: 8px 12px;
  box-sizing: border-box;
  border-radius: 4px;
}

.modal-header {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: flex;
  justify-content: space-evenly;
  margin-top: 36px;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
