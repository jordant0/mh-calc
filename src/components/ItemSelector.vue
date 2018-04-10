<script>
import Selector from '@/components/Selector'
import { ItemList } from '@/data/ItemList'

export default {
  name: 'ItemSelector',

  components: {
    Selector,
  },

  watch: {
    selected() {
      this.$emit('item-added', this.selected);
    }
  },

  data() {
    return {
      selected: null,
      itemList: ItemList,
    }
  },
}
</script>

<template>
  <div class='skill-item-selector'>
    <div class='skill-item-input input-item select-wrapper'>
      <span class='skill-item-label input-label'>
        Add item/buff
      </span>

      <selector
        class='skill-item-selector'
        :value.sync='selected'
        :options='itemList'
      />
    </div>
  </div>
</template>
