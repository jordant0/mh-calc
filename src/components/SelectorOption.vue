<script>
import ClassNameConverter from '@/mixins/ClassNameConverter'

export default {
  name: 'SelectorOption',

  mixins: [
    ClassNameConverter
  ],

  props: {
    optionValue: [Number, String],
    optionData: Object,
    selected: String,
  },


  computed: {
    optionClass() {
      var classNames = ['vue-select-option_link', 'vue-select-display'];
      if(this.optionData.className) {
        classNames.push(this.optionData.className);
      }
      else {
        classNames.push(this.toClassName(this.optionData.name));
      }

      if(this.selected === this.optionValue.toString()) {
        classNames.push('vue-select-option--selected');
      }
      return classNames;
    },
  },

  methods: {
    selectOption(value) {
      this.$emit('select-option', value)
    }
  },
}
</script>

<template>
  <li class='vue-select-option'>
    <a :class='optionClass' href='#' @mousedown.prevent @click.prevent.stop='selectOption(optionValue)'>
      {{ optionData.name }}
    </a>
  </li>
</template>

<style>
.vue-select-option_link {
  padding: 8px;
  display: block;
}

.vue-select-option:hover {
  background-color: #eeeeee;
}

.vue-select-option_link {
  z-index: 52px;
}

.vue-select-option_link, .vue-select-option_link:hover, .vue-select-option_link:focus {
  color: #2c3e50;
  text-decoration: none;
}

.vue-select-option--selected {
  background-color: #e4f7ff;
  font-weight: 600;
}

.vue-select-option--selected:hover {
  background-color: #cce8f5;
}
</style>
