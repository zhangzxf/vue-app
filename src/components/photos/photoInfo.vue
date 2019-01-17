<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
      <div class="thumbs">
       <vue-preview :slides="thumbImgList"></vue-preview>
    </div>
    <!-- 图片内容区域 -->
      <div class="content" v-html="photoinfo.content"></div>
    <!-- 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
//  导入子组件
import comment from '../subcomponents/comment.vue'
export default {
  data(){
    return {
      id:this.$route.params.id, // 从路由中获取到的图片 id
      photoinfo : {},// 图片详情
      thumbImgList : []  // 缩略图数组
    }
  },
  created(){
    this.getPhotoInfo()
    this.getThumbImages()
  },
  methods:{
    getPhotoInfo (){
      // 获取图片的详情
      this.$http.get("api/getimageInfo/"+this.id).then(result =>{
        if(result.body.status === 0){
          this.photoinfo = result.body.message[0];
        }
      })
    },
   async getThumbImages () {
      // 获取缩略图
     const { data } = await this.$http.get("api/getthumimages/" + this.id);
        if(data.status === 0){
          // 循环每个图片数组，补全图片宽和高
           data.message.forEach(item => {
              item.w = 600;
              item.h = 400;
              item.msrc = item.src
          });
          // 把完整的数据保存在getThumbImages中
          this.thumbImgList = data.message
        }
      
    }
  },
  components:{  //注册评论子组件
    'cmt-box':comment
  }
}
</script>
 
 <style lang="less" scoped>
  .photoinfo-container {
    padding: 3px;
    h3 {
      color: #26a2ff;
      font-size: 15px;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
    .content {
      font-size: 13px;
      line-height: 30px;
    }
  }
 </style>
 