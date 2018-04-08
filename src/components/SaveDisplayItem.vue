<script>
import { ItemList } from '@/data/ItemList'

export default {
  name: 'SaveDisplayItem',

  props: {
    item: Object,
    index: Number,
    length: Number,
  },

  computed: {
    itemData() {
      return ItemList[this.item.id];
    },

    comma() {
      if(this.index === this.length - 1) {
        return '';
      }
      else {
        return ', ';
      }
    }
  },
}
</script>

<template>
  <span>{{ itemData.name }}{{comma}}</span>
</template>
