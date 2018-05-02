<template>
    <div id="head-top">
      <div class="wrap">
        <div class="left">
          <slot name="logo"></slot>
        </div>
        <div class="middle">
          <slot name="title"></slot>
        </div>
        <div class="right">
          <slot name="loginUser" ></slot>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          logo:'ele.me',
          rightmsg:'登录/注册'
        }
      }
    }
</script>

<style scoped>
  #head-top {
    background-color: #3190e8;
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 100px;
    color:#FFF;
    line-height: 100px;
    z-index: 10;
  }
  .wrap {
    padding:0 30px;
    display: flex;
  }
  .left {
    flex:1;
    text-align: left;
    font-size: 40px;
  }
  .middle {
    flex:1;
    text-align: center;
    font-size: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .right {
    flex:1;
    text-align: right;
    font-size: 30px;
  }
</style>
