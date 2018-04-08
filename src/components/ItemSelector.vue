<script>
import VueSelect from 'vue-select'
import OptionsForSelect from '@/mixins/OptionsForSelect'
import { ItemList } from '@/data/ItemList'

export default {
  name: 'ItemSelector',

  mixins: [
    OptionsForSelect,
  ],

  components: {
    VueSelect,
  },

  data() {
    return {
      itemList: this.convertToOptions(ItemList),
    }
  },

  methods: {
    itemSelected(option) {
      this.$emit('item-added', option.value);
    },
  },
}
</script>

<template>
  <div class='skill-item-selector'>
    <div class='skill-item-input input-item select-wrapper'>
      <span class='skill-item-label input-label'>
        Add item/buff
      </span>

      <vue-select
        placeholder='Type to search...'
        :options='itemList'
        @input='itemSelected'
      />
    </div>
  </div>
</template>
