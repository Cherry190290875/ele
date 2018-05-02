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
          <li v-for="classify in items">
            <span><img :src="classify.imgurl" alt=""></span>
            <span>{{classify.name}}</span>
          </li>
        </ul>
      </section>
      <section class="seller">
        <p class="near">附近商家</p>
        <div v-for="seller in sellers">
          <div class="left">
            <img :src="seller.imgurl" alt="">
          </div>
          <div class="right">
            <p class="title"><span class="brand">品牌</span>{{seller.name}} <span class="assure">保准票</span> </p>
            <p class="amount size-18"><i class="red">{{seller.star}}</i> <span>月销量{{seller.number}}单</span> <span class="time">准时达</span><span class="fn">蜂鸟专送</span></p>
            <p class="size-16"><span class="fee">￥{{seller.startFee}}起送/配送费约￥{{seller.fee}}</span> <span  class="distance">{{seller.distance}}公里/ <i class="blue">{{seller.time}}</i></span> </p>
          </div>
        </div>
      </section>
      <foot></foot>
    </div>
</template>

<script>
  import headTop from '../../components/header/header.vue'
  import tianpin from "../../images/1.jpeg"
  import picture from "../../images/2.jpeg"
  import foot from '../../components/foot/footer.vue'
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
          ],
          sellers:[
            {
              name:"效果演示",
              number:"16",
              startFee:"20",
              fee: "5",
              distance: "139.8",
              time:"2小时30分",
              star :"4.8",
              imgurl:picture
            },
            {
              name:"2222",
              number:"16",
              startFee:"45",
              fee: "5",
              distance: "139.8",
              time:"1小时30分",
              star :"4.8",
              imgurl:picture
            },
            {
              name:"3333",
              number:"16",
              startFee:"20",
              fee: "5",
              distance: "139.8",
              time:"2小时30分",
              star :"4.8",
              imgurl:picture
            },
            {
              name:"444",
              number:"16",
              startFee:"20",
              fee: "5",
              distance: "139.8",
              time:"2小时30分",
              star :"4.8",
              imgurl:picture
            },
            {
              name:"555",
              number:"16",
              startFee:"20",
              fee: "5",
              distance: "139.8",
              time:"2小时30分",
              star :"4.8",
              imgurl:picture
            },
            {
              name:"666",
              number:"16",
              startFee:"20",
              fee: "5",
              distance: "139.8",
              time:"2小时30分",
              star :"4.8",
              imgurl:picture
            },


          ]
        }
      },
      components: {
        headTop,
        foot
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
  .seller>div {
    padding:20px 15px;
    display: flex;
    border-bottom: 1px solid #DDD;
  }
  .seller .left {
    flex:1;
    padding-right: 20px;
  }
  .seller .left img {
    width: 150px;
    height: 150px;
  }
  .seller .right {
    flex: auto;
    text-align: left;
  }
  .seller .right .title {
    font-size: 30px;
    line-height: 50px;
    font-weight: bolder;
    color:#000;
    font-family: "Microsoft Yahei";
  }
  .seller .right .brand {
    background: #ffd930;
    padding: 0 15px;
    font-size: 26px;
    font-weight: bolder;
    margin-right: 10px;
  }
  .assure {
    float:right;
    letter-spacing: 10px;
    font-size: 20px;
    color: #aaa;
  }
  .size-18 {
    font-size: 20px;
    color:#AAA;
    line-height: 50px;
  }
  .size-16 {
    font-size: 14px;
    color:#AAA;
    line-height: 50px;
  }
  .fee {
    color:#333;
  }
  .distance {
    float: right;
  }
  .blue {
    color:#3190e8;
  }
  .fn {
    color:#FFF;
    background: #3190e8;
    float: right;
    line-height: 30px;
    margin-right: 10px;
  }
  .time {
    color: #3190e8;
    border:1px solid #3190e8;
    float: right;
    line-height: 30px;
  }
  .red {
    color:#ff6000;
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
