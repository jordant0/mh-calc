<script>
import ItemSelector from '@/components/ItemSelector'
import ItemDisplay from '@/components/ItemDisplay'
import ListLookup from '@/mixins/ListLookup'
import { ItemList } from '@/data/ItemList'

export default {
  name: 'ItemControl',

  components: {
    ItemSelector,
    ItemDisplay,
  },

  mixins: [
    ListLookup,
  ],

  props: {
    items: Array,
  },

  methods: {
    addItem(itemId) {
      var itemIndex = this.findItemIndex(itemId);

      if(itemIndex < 0) {
        var newItems = this.items;
        newItems.push({
          id: itemId,
          activation: ItemList[itemId].defaultActiviation,
        });
        this.$emit('update:items', newItems);
      }
    },

    updateItemActivation(itemId, itemActivation) {
      var itemIndex = this.findItemIndex(itemId);

      if(itemActivation > 100) {
        itemActivation = 100;
      }

      if(itemActivation < 0) {
        itemActivation = 0;
      }

      if(itemIndex >= 0 && this.items[itemIndex].activation !== itemActivation) {
        var newItems = this.items;
        newItems[itemIndex].activation = itemActivation;
        this.$emit('update:items', newItems);
      }
    },

    removeItem(itemId) {
      var itemIndex = this.findItemIndex(itemId);

      if(itemIndex >= 0) {
        var newItems = this.items;
        newItems.splice(itemIndex, 1);
        this.$emit('update:items', newItems);
      }
    },
  }
}
</script>

<template>
  <div class='item-controls skill-item-control'>
    <div class='skill-item-header'>
      <div class='skill-item-header_title'>
        Active Items/Buffs:
      </div>

      <item-selector @item-added='addItem' />
    </div>

    <div class='items-notice'>
      Note: Items/buffs in the same category will override each other. The strongest effect will be kept.
    </div>

    <div class='skills-items-display'>
      <item-display
        v-for='item in items'
        :key='item.id'
        :item='item'
        @item-level-activation='updateItemActivation'
        @item-remove='removeItem'
      />
    </div>
  </div>
</template>

<style>
.item-controls {
  margin-top: 40px;
  margin-bottom: 40px;
}

.items-notice {
  text-align: left;
  color: #777777;
  font-style: italic;
  margin: 15px 0px;
}
</style>
