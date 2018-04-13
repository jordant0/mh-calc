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
      highlighted: null,
    }
  },

  watch: {
    value() {
      this.resetInputValue();
    },

    filteredOptions() {
      this.resetHighlighted();
    },

    highlighted() {
      var optionHeight = this.$refs.selectInput.offsetHeight,
          highlightedTop = optionHeight * this.highlighted,
          highlightedBottom = highlightedTop + optionHeight,
          dropdownHeight = this.$refs.selectDropdown.offsetHeight,
          scrollTop = this.$refs.selectDropdown.scrollTop,
          scrollBottom = scrollTop + dropdownHeight;

      if(highlightedTop < scrollTop) {
        this.$refs.selectDropdown.scrollTop = highlightedTop;
      }

      if(highlightedBottom > scrollBottom) {
        this.$refs.selectDropdown.scrollTop = highlightedBottom - dropdownHeight;
      }
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

    noOptionFound() {
      return !Object.keys(this.filteredOptions).length;
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

    highlightedValue() {
      if(!this.highlighted && this.highlighted !== 0) {
        return null;
      }
      return Object.keys(this.filteredOptions)[this.highlighted];
    }
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

    selectHighlighted(value) {
      this.selectOption(this.highlightedValue);
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
      this.resetHighlighted();
      this.clearQuery();
    },

    closeDropdown() {
      this.showDropdown = false;
      this.resetInputValue();
    },

    resetHighlighted() {
      this.highlighted = null;
    },

    highlightUp() {
      if(this.highlighted || this.highlighted === 0) {
        this.highlighted = Math.max(this.highlighted - 1, 0);
      }
      else {
        this.highlighted = 0;
      }
    },

    highlightDown() {
      if(this.highlighted || this.highlighted === 0) {
        this.highlighted = Math.min(this.highlighted + 1, Object.keys(this.filteredOptions).length - 1);
      }
      else {
        this.highlighted = 0;
      }
    },

    changeHighlight(index) {
      this.highlighted = index;
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
        autocomplete='off'
        type='text'
        :value='inputValue'
        @input='query = inputValue = $event.target.value'
        :placeholder='placeholder'
        @focus='openDropdown'
        @blur='closeDropdown'
        @keydown.up='highlightUp'
        @keydown.down='highlightDown'
        @keydown.enter='selectHighlighted'
        ref='selectInput'
      />

      <span class='vue-select_expand-icon'>
        <span class='glyphicon glyphicon glyphicon-chevron-down'></span>
      </span>
    </div>

    <ul
      :class='dropDownClass'
      :style='{ maxHeight: maxHeight }'
      ref='selectDropdown'
    >
      <selector-option
        v-for='(optionData, optionValue, index) in filteredOptions'
        :option-value='optionValue'
        :option-data='optionData'
        :selected='selected'
        :key='optionValue'
        :highlighted='highlightedValue'
        :index='index'
        @select-option='selectOption'
        @option-hover='changeHighlight'
      />
      <li v-if='noOptionFound' class='vue-select_no-result'>
        No result found
      </li>
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

.vue-select_no-result {
  padding: 8px;
  text-align: center;
  color: #cecece;
  font-style: italic;
}
</style>
