<template>
    <div class="detail">
      <headTop>
        <span slot="logo">
          <i class="iconfont icon-fangdajing"></i>
        </span>
        <span slot="title">浦东新区张江创业园</span>
        <span slot="loginUser">登录/注册</span>
      </headTop>
      <section class="content">
        <ul >
          <li v-for="classify in items" @click="goFirst">
            <span><img :src="classify.imgurl" alt=""></span>
            <span>{{classify.name}}</span>
          </li>
        </ul>
      </section>
      <section class="seller">
        <p class="near">附近商家</p>
        <list></list>
      </section>
      <foot></foot>
    </div>
</template>

<script>
  import tianpin from "../../images/1.jpeg"
  import headTop from '../../components/header/header.vue'
  import foot from '../../components/foot/footer.vue'
  import list from '../../components/common/list.vue'
    export default {
      data(){
        return {
          items: [
            {
              name:"甜品饮品",
              imgurl:tianpin
            },
            {
              name:"商超便利",
              imgurl:tianpin
            },
            {
              name:"美食",
              imgurl:tianpin
            },
            {
              name:"简餐",
              imgurl:tianpin
            },
            {
              name:"新店特惠",
              imgurl:tianpin
            },
            {
              name:"准时达",
              imgurl:tianpin
            },
            {
              name:"预定早餐",
              imgurl:tianpin
            },
            {
              name:"土豪推荐",
              imgurl:tianpin
            }
          ]
        }
      },
      components: {
        headTop,
        foot,
        list
      },
      methods:{
        goFirst: function () {
          this.$router.push("/food")
        }
      }
    }
</script>

<style scoped>
  @import "../../icon/iconfont.css";
  .content {
    position: relative;
    margin-top: 100px;
    height: 401px;
    border-bottom: 1px solid #DDD;
  }
  ul {
    list-style: none;
    background: #FFF;
    width: 100%;
  }
  ul li {
    width: 25%;
    padding:20px 0;
    float: left;
    height:160px ;
    background: #FFF;
  }
  ul li span {
    display: block;
    padding: 10px 0;
    font-size: 30px;
  }
  ul li img  {
    width: 100px;
  }
  .seller {
    width: 100%;
    background: #FFF;
    border-top: 1px solid #CCC;
    margin-top: 20px;
  }
  .near {
    color:#666;
    font-size: 28px;
    text-align: left;
    padding-left: 15px;
    line-height: 50px;
    letter-spacing: 3px;
  }
</style>
