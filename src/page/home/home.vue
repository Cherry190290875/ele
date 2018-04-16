<template>
    <div class="home">
      <headTop>
        <span slot="logo" @click="reload">ele.me</span>
        <span slot="loginUser">{{register}}</span>
      </headTop>
      <nav class="cityNav">
        <div class="cityWrap">
          <div class="textLeft">当前定位城市：</div>
          <div class="textRight">定位不准时，请在城市列表中选择</div>
        </div>
        <router-link to="/City" class="cityWrap">
          <div class="textLeft cityName">{{cityMsg}}</div>
          <div class="textRight"> > </div>
        </router-link>
      </nav>
      <section class="hotCity">
        <h4>热门城市</h4>
        <ul>
          <li v-for="item in citys">{{item.city}}</li>
        </ul>
      </section>
    </div>
</template>

<script>
  import headTop from '../../components/header/header.vue'
    export default {
      name: 'app',
      data (){
        return {
          cityMsg:"上海",
          register: "登录/注册",
          citys:[
            {city:'上海'},
            {city:'哈尔滨'},
            {city:'南京'},
            {city:'广州'},
            {city:'厦门'},
            {city:'杭州'},
            {city:'天津'},
            {city:'青岛'},
          ]
        }
      },
      components:{
        headTop
      },
      methods: {
        reload(){
            window.location.reload()
        }
      }
    }
</script>

<style scoped>
  .home {
    font-size: 26px;
  }
  .cityNav {
    margin-top: 100px;
    margin-bottom: 30px;
  }
  .cityWrap{
    padding: 0 30px;
    font-size: 26px;
    height: 100px;
    line-height: 100px;
    display: flex;
    border-bottom: 1px solid #DDD;
  }
  .textLeft {
    flex:1;
    text-align: left;
  }
  .textRight {
    flex: 2;
    text-align: right;
  }
  .cityName {
    color:#3190e8;
    font-size: 40px;
  }
  .hotCity {
    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
    height: 240px;
  }
  h4 {
    font-size: 26px;
    line-height: 80px;
    height: 80px;
    text-align: left;
    padding-left: 30px;
  }
  ul {
    list-style: none;
  }
  ul li {
    line-height: 80px;
    border-top: 1px solid #DDD;
    border-right:1px solid #DDD;
    box-sizing: border-box;
    float: left;
    width: 25%;
    color:#3190e8;
  }
  ul li:nth-child(4n) {
    border-right: none;
  }
  a {
    text-decoration: none;
  }
</style>
