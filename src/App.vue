<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  created(){

  },
  mounted(){

    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    
   window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
   })


  }
  
}
</script>

<style>
html{
  height: 100%;
  background-color: #f6f6f6;
}
body{
  min-width: 320px;
  -webkit-tap-highlight-color: transparent;
  font-family: "Lucida Grande", Verdana, "Microsoft Yahei", STXihei, hei;
  margin: 0;
  padding: 0px;
}
#app{
  height: 100%;
}
</style>
