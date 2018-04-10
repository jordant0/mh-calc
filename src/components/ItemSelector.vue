<script>
import Selector from '@/components/Selector'
import { ItemList } from '@/data/ItemList'

export default {
  name: 'ItemSelector',

  components: {
    Selector,
  },

  props: {
    items: Array
  },

  watch: {
    selected() {
      if(this.selected || this.selected === 0) {
        this.$emit('item-added', this.selected);
        this.selected = null;
      }
    }
  },

  data() {
    return {
      selected: null,
      itemList: ItemList,
    }
  },

  computed: {
    itemIds() {
      return this.items.map(item => item.id.toString());
    },

    filteredList() {
      var result = {};

      for(var key in this.itemList) {
        if(this.itemIds.indexOf(key) === -1) {
          result[key] = this.itemList[key];
        }
      }

      return result;
    },
  }
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
        :options='filteredList'
      />
    </div>
  </div>
</template>
