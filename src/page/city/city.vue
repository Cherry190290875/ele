<template>
    <div class="city" >
      <headTop>
        <span slot="logo">
          <
        </span>
        <span slot="title">上海</span>
        <span slot="loginUser">切换城市</span>
      </headTop>
      <form class="form" >
        <input type="search" placeholder="输入学校、商务楼、地址" v-model="value">
        <p v-if="necessary" class="cueText">请填写此字段</p>
        <button @click="submit">提交</button>
      </form>
      <section class="historySection">
        <p class="historyText">搜索历史</p>
      </section>
      <section class="record" v-if="history">
        <ul v-for = "item in sites">
          <li @click="gotoDetail">
            <span class="siteName">{{item.name}}</span>
            <span class="site">{{item.site}}</span>
          </li>
        </ul>
        <p class="text" @click="clearAll">清空所有</p>
      </section>
    </div>
</template>

<script>
    import headTop from '../../components/header/header.vue'
    export default {
      data(){
        return {
          value:  '',
          necessary: false,
          history:true,
          sites:[
            {
              name: '顺丰上海产业园',
              site: '上海市青浦区华新镇华南路555号'
            },
            {
              name: '圆通上海产业园',
              site: '上海市青浦区华新镇华南路555号'
            },
            {
              name: '中通上海产业园',
              site: '上海市青浦区华新镇华南路555号'
            },
            {
              name: '韵达上海产业园',
              site: '上海市青浦区华新镇华南路555号'
            },
          ]
        }
      },
      components: {
        headTop
      },
      methods: {
        submit(){
          if (this.value === "") {
              this.necessary = true
          }
        },
        gotoDetail(){
          this.$router.push('/detail')
        },
        clearAll(){
          this.history = false
        }
      }
    }
</script>

<style scoped>
  .form {
    border-top: 1px solid #DDD;
    border-bottom:1px solid #DDD;
    padding:30px;
    background-color: #fff;
    margin-top: 120px;
    margin-bottom: 30px;
    position: relative;
  }
  input {
    display: block;
    width: 99%;
    height:60px;
    padding:0 3%;
    line-height: 60px;
    border:1px solid #c1c1c1;
  }
  *:focus {
    outline: none;
  }
  button {
    background-color:#3190e8 ;
    width: 100%;
    border: none;
    color:#FFF;
    font-size: 32px;
    line-height: 60px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .historyText {
    font-size: 26px;
    height: 50px;
    line-height: 50px;
    text-align: left;
    padding-left: 30px;
  }
  .historySection {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #DDD;
  }
  .cueText {
    position: absolute;
    border:1px solid red;
    background: #FFF;
    padding:20px;
    font-size: 26px;
    width: 180px;
    left:50%;
    margin-left: -90px;
  }
  .record {
    background: 100%;
    background: #fff;
    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
  }
  .text {
    font-size: 30px;
    line-height: 80px;
    text-align: center;
  }
  ul {
    list-style: none;
  }
  ul li {
    border-bottom: 1px solid #DDD;
    padding:30px 0;
  }
  ul li span {
    display: block;
    text-align: left;
    padding-left:30px;
  }
  .siteName {
    font-size: 30px;
    line-height: 50px;
  }
  .site {
    font-size: 26px;
    line-height: 40px;
    margin-top: 20px;
    color:#a09f9f;
  }
</style>
