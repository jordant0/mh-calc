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
  <div class='item-selector'>
    <div class='items-input input-item select-wrapper'>
      <span class='input-label'>
        Select item/buff
      </span>

      <vue-select
        placeholder='Type to search...'
        :options='itemList'
        @input='itemSelected'
      />
    </div>
  </div>
</template>
