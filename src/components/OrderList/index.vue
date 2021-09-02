<template>
  <ul class="list-group col-4">
    <template v-for="(order, index) in orders">
      <li
        :key="`order-list-${index}`"
        class="list-group-item title-bg"
      >
        <div class="title-content">
          {{ order.text }}
        </div>
      </li>
      <ListItem 
        :key="`order-list-item-${index}`"
        v-if="order.items" 
        :items="order.items"
      />
    </template>
  </ul>
</template>

<script>
import ListItem from './components/ListItem'

export default {
  name: 'OrderList',
  components: {
    ListItem
  },
  computed: {
    orders () {
      return [
        {
          text: '進行中',
          items: this.$store.state.orderList.inProgress
        },
        {
          text: '已完成',
          items: this.$store.state.orderList.isFinished
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-group-item {
    &.item-list {
      height: 120px;
    }
    height: 50px;
    color: #363636;

    &.title-bg {
      background-color: #F5F5F5;
    }
  }
  .title-content {
    line-height: 30px;
    padding: 0 10px;
    border-left: solid 5px;
    border-color: #029F48;
  }
</style>