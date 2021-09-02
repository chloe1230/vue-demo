<template>
  <div class="container text-left">
    <div class="row justify-content-center mt-5">
      <OrderList />
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import OrderList from '@/components/OrderList'
import { inProgress, isFinished } from '@/filters'

export default {
  name: 'Home',
  components: {
    OrderList
  },
  data() {
    return {
      orders: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      this.$store.dispatch('updateOverlay', true)
      const { data } = await Axios.get('http://localhost:3000/orders/')
        .finally(() => {
          setTimeout(() => {
            this.$store.dispatch('updateOverlay', false)
          }, 800)
        })
      data.sort((a, b) => {
          return +new Date(b.date) - +new Date(a.date)
      })
      this.orders = {
        inProgress: data.filter((item) => inProgress(item)),
        isFinished: data.filter((item) => isFinished(item))
      }
      this.$store.dispatch('updateOrderList', this.orders)
    }
  },
}
</script>
