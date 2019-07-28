<template>
    <div>
        <h1>Hello World</h1>
        <p> Server status is {{status}}</p>
        <button @click="changeStatus">Change status</button>
    </div>
</template>

<script>
export default {
  
  data : function(){
    return {status:"running"}
  }
  ,methods:{
      changeStatus(){
          this.status="Normal";
      }
  }
}
</script>

<style>

</style>
