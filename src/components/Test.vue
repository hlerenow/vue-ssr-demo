<template>
  <div>
    Just a test page.
    <div>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <h2>{{mode}}</h2>
    </div>
    </div>
    <div><span>{{count}}</span></div>
    <div><button @click="count++">+1</button></div>
  </div>
</template>
<script>
export default {
  name: 'test',
  asyncData ({store, route}) {
    return store.dispatch('fetchItem', route.params.id)
  },
  data () {
    return {
      mode: 'client',
      count: 2
    }
  },
  computed: {
    item () {
      return this.$store.state.items[this.$route.parmas.id]
    }
  }
}
</script>
<style lang="css">

</style>
