<template>
  <div>
    <template v-for="(item, index) in items">
      <li
        :key="`list-item-${index}`"
        class="list-group-item item-list align-items-center"
      >
        <div class="d-flex align-items-center">
          <img :class="['item-logo', { 'item-logo-disabled': isFinishedStatus(item) }]" :src="item.logo">
          <div class="d-flex flex-column mx-3 col-8">
            <div class="item-status">
              <span :class="{ 'proccess-text-color': inProgressStatus(item) }">
                {{ item.status.type }}
              </span>
              <span v-if="inProgressStatus(item)" class="mx-4">
                預計出貨：{{ item.date }}
              </span>
            </div>
            <span class="item-name">
              {{ item.name }}
            </span>
          </div>
          <i class="arrow right mx-2" />
        </div>
      </li>
    </template>
  </div>
</template>

<script>
import { inProgress, isFinished } from '@/filters'

export default {
  name: 'ListItem',
  filters: {
    inProgress
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    inProgressStatus (item) {
      return inProgress(item)
    },
    isFinishedStatus (item) {
      return isFinished(item)
    }
  },
}
</script>

<style lang="scss" scoped>
  .item-logo {
    width: 4rem;
    height: 4rem;
  }
  .item-logo-disabled {
    -webkit-filter: grayscale(1);
  }
  .arrow {
    border: solid #909090;
    border-width: 0px 3px 3px 0;
    display: inline-block;
    padding: 6px;
  }
  .right {
    transform: rotate(-45deg);
  }
  .item-status {
    color: #555555;
  }
  .item-name {
    color: #707070;
    margin-top: 5px;
    line-height: 28px;
  }
  .proccess-text-color {
    color: #0EA156
  }
</style>
