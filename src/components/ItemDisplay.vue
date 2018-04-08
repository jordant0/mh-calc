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
      if(this.item.activation > 100) {
        this.item.activation = 100;
      }

      if(this.item.activation < 0) {
        this.item.activation = 0;
      }

      this.$emit('item-level-activation', this.item.id, parseInt($event.target.value));
    },

    removeItem() {
      this.$emit('item-remove', this.item.id);
    },
  }
}
</script>

<template>
  <div class='skill-item-display'>
    <div class='item-header'>
      <div class='skill-item-name'>
        {{ itemName }}
      </div>

      <a class='icon-action skill-item-remove' href='#' @click.prevent='removeItem' title='Remove'>
        <span class='glyphicon glyphicon-remove'></span>
      </a>
    </div>

    <div v-if='enableActivationEdit' class='input-item item-edit skill-item-edit'>
      <span class='input-label'>Activation:</span>
      <div>
        <input
          class='activation-input input-field'
          type='number'
          :value='item.activation'
          :min='0'
          :max='100'
          @change='updateItemActivation'
        />%
      </div>
    </div>

    <div v-if='showCategory' class='item-category'>
      <span class='input-label category-label'>Category:</span>
      <span class='category-name'>{{ itemCategory }}</span>
    </div>
  </div>
</template>

<style>
.item-edit {
  justify-content: flex-end;
}

.item-edit .input-label {
  margin-right: 20px;
}

.item-edit .input-field {
  width: 55px;
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
