<template>
  <div>
    <router-view />
    <b-overlay :show="show" no-wrap>
      <template #overlay>
        <b-spinner class="overlay-style" />
      </template>
    </b-overlay>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    show () {
      return this.$store.state.showOverlay
    }
  }
}
</script>

<style lang="scss" scoped>
  .overlay-style {
    width: 3rem;
    height: 3rem;
    color: #0EA156;
  }
</style>
