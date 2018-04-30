<template>
  <div>
    Just a test page.
    <div>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <!-- <h2>{{mode}}</h2> -->
    </div>
    </div>
    <div><span>{{count}}</span></div>
    <div><button @click="count++">+1</button></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // mode: process.env.VUE_ENV === 'server' ? 'server' : 'client',
      count: 2
    }
  }
}
</script>
<style lang="css">

</style>
