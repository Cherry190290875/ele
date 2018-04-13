<template>
    <div id="head-top">
        {{msg}}
    </div>
</template>

<script>
    export default {
      data(){
        return {
           msg:'我是一直猪'
        }
      }
    }
</script>

<style>
  #head-top {
    background-color: dodgerblue;
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 1.95rem;
    color:#FFF;
  }
</style>
