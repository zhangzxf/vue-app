<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index.url">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		            <img src="../../assets/menu1.png" alt="">
		            <div class="mui-media-body">新闻资讯</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/No">
		            <img src="../../assets/menu2.png" alt="">
		            <div class="mui-media-body">图片分享</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		           <img src="../../assets/menu3.png" alt="">
		            <div class="mui-media-body">商品购买</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		           <img src="../../assets/menu4.png" alt="">
		            <div class="mui-media-body">留言反馈</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../assets/menu5.png" alt="">
		            <div class="mui-media-body">视频专区</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../assets/menu6.png" alt="">
		            <div class="mui-media-body">联系我们</div></a></li>
		  </ul> 
  </div>
</template>


<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图数据的方法

      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status === 0) {
          //成功了
          this.lunbotuList = result.body.message;
        } else {
          Toast("加载轮播图失败了。。。");
        }
      });
    }
  },
  components: {}
};
</script>


<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  img {
    width:100%;
    height:100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color:white;
  img{
    width:60px;
    height:60px;
  }
  .mui-media-body{
    font-size:12px;
  }

}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  background-color: white;
  border:none;
}

</style>
