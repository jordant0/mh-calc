<script>
import SelectorOption from '@/components/SelectorOption'
import ClassNameConverter from '@/mixins/ClassNameConverter'

export default {
  name: 'Selector',

  mixins: [
    ClassNameConverter
  ],

  components: {
    SelectorOption
  },

  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    options: Object,
    placeholder: {
      type: String,
      default: 'Type to search...'
    },
    maxHeight: {
      type: String,
      default: '400px',
    }
  },

  data() {
    return {
      query: '',
      showDropdown: false,
      inputValue: '',
    }
  },

  watch: {
    value() {
      this.resetInputValue()
    },
  },

  created() {
    this.resetInputValue();
  },

  computed: {
    selected() {
      if(typeof this.value === 'number') {
        return this.value.toString();
      }
      else {
        return this.value;
      }
    },

    selectedData() {
      return this.options[this.optionKey(this.selected)];
    },

    displayText() {
      if(this.selectedData) {
        return this.selectedData.name;
      }
      else {
        return null;
      }
    },

    filteredOptions() {
      if(!(this.query.length)) {
        return this.options;
      }

      var result = {},
          searchQuery = this.query.toLowerCase();

      for(var key in this.options) {
        var label = this.options[key].name.toLowerCase();
        if(label.indexOf(searchQuery) > -1) {
          result[key] = this.options[key];
        }
      }

      return result;
    },

    inputClass() {
      var classNames = ['vue-select_input-wrapper'];
      if(this.showDropdown) {
        classNames.push('vue-select--dropdown-shown');
      }

      if(!this.showDropdown && this.displayText) {
        classNames.push('vue-select-display');
        if(this.selectedData.className) {
          classNames.push(this.selectedData.className);
        }
        else {
          classNames.push(this.toClassName(this.selectedData.name));
        }
      }
      return classNames;
    },

    dropDownClass() {
      var classNames = ['vue-select-dropdown'];
      if(!this.showDropdown) {
        classNames.push('dropdown-hidden');
      }
      return classNames;
    },

    expandClassNames() {
      var names = ['selector-expand-icon', 'icon-action', 'expand-icon'];
      if(this.showDropdown) {
        names.push('expanded');
      }
      return names;
    },
  },

  methods: {
    optionKey(key) {
      if(!isNaN(key)) {
        var numberKey = parseInt(key);
        if(this.options[numberKey]) {
          return numberKey;
        }
      }
      return key;
    },

    selectOption(value) {
      this.$emit('update:value', this.optionKey(value));
      this.resetInputValue();
      this.$refs.selectInput.blur();
    },

    clearQuery() {
      this.query = '';
      this.inputValue = '';
    },

    resetInputValue() {
      this.inputValue = this.displayText;
    },

    openDropdown() {
      this.showDropdown = true;
      this.clearQuery();
    },

    closeDropdown() {
      this.showDropdown = false;
      this.resetInputValue();
    },
  },
}
</script>

<template>
  <div class='vue-selector'>
    <div :class='inputClass'>
      <input
        class='vue-select-input'
        spellcheck='false'
        type='text'
        :value='inputValue'
        @input='query = inputValue = $event.target.value'
        :placeholder='placeholder'
        @focus='openDropdown'
        @blur='closeDropdown'
        ref='selectInput'
      />

      <span class='vue-select_expand-icon'>
        <span class='glyphicon glyphicon glyphicon-chevron-down'></span>
      </span>
    </div>

    <ul :class='dropDownClass' :style='{ maxHeight: maxHeight }'>
      <selector-option
        v-for='(optionData, optionValue) in filteredOptions'
        :option-value='optionValue'
        :option-data='optionData'
        :selected='selected'
        :key='optionValue'
        @select-option='selectOption'
      />
    </ul>
  </div>
</template>

<style>
.vue-selector {
  width: 250px;
  position: relative;
}

.vue-select_input-wrapper {
  position: relative;
}

.vue-select-input {
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  padding: 8px 30px 8px 10px;
  border-radius: 3px;
  color: #2c3e50;
  border: 1px solid #d6d4d4;
}

.vue-select_expand-icon {
  transition: transform 0.2s;
  position: absolute;
  top: 10px;
  right: 7px;
  height: 16px;
  width: 16px;
  color: #8e8e8e;
}

.vue-select_expand-icon.glyphicon {
  top: 0;
}

.vue-select--dropdown-shown .vue-select_expand-icon {
  transform: rotate(180deg);
}

.vue-select-dropdown {
  width: 100%;
  height: auto;
  overflow: auto;
  transition: max-height 0.2s linear;
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid #d6d4d4;
  border-top: 0;
  background-color: white;
  position: absolute;
  z-index: 50;
  top: 39px;
}

.vue-select-dropdown.dropdown-hidden {
  max-height: 0 !important;
  overflow: hidden;
  border: 0;
}
</style>
