<script>
import { ItemList } from '@/data/ItemList'
import { ItemCategories } from '@/data/ItemCategories'

export default {
  name: 'ItemDisplay',

  props: {
    item: Object,
  },

  computed: {
    itemData() {
      return ItemList[this.item.id];
    },

    itemName() {
      return this.itemData.name;
    },

    enableActivationEdit() {
      return !this.itemData.fixedActivation;
    },

    showCategory() {
      return this.itemData.itemCategory;
    },

    itemCategory() {
      return ItemCategories[this.itemData.itemCategory];
    },
  },

  methods: {
    updateItemActivation($event) {
      this.$emit('item-level-activation', this.item.id, parseInt($event.target.value));
    },

    removeItem() {
      this.$emit('item-remove', this.item.id);
    },
  }
}
</script>

<template>
  <div class='item-display-item bordered-box dashed-border'>
    <div class='item-header'>
      <div class='item-name'>
        {{ itemName }}
      </div>

      <a class='remove-link' href='#' @click.prevent='removeItem'>x</a>
    </div>

    <form v-if='enableActivationEdit' class='item-edit'>
      <div class='input-item'>
        <span class='input-label'>Activation:</span>
        <div>
          <input class='activation-input input-field' type='number' :value='item.activation' @change='updateItemActivation' />%
        </div>
      </div>
    </form>

    <div v-if='showCategory' class='item-category'>
      <span class='input-label category-label'>Category:</span>
      <span class='category-name'>{{ itemCategory }}</span>
    </div>
  </div>
</template>

<style>
.item-display-item {
  width: 406px;
  box-sizing: border-box;
  padding: 16px 24px;
  margin: 0;
  margin-right: 30px;
  margin-top: 24px;
  position: relative;
}

.remove-link:hover {
  border-color: #efefef;
}

.item-name {
  font-weight: 600;
  color: #24d0f7;
  font-size: 20px;
  text-align: left;
  margin-bottom: 12px;
}

.item-edit {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.item-edit .input-label {
  margin-right: 20px;
}

.item-edit .input-field {
  width: 50px;
}

.activation-input {
  margin-right: 5px;
}

.item-category {
  margin-top: 10px;
  color: #777777;
  font-size: 14px;
  text-align: right;
}

.category-label {
  margin-right: 10px;
}
</style>
