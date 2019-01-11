<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120">

    </textarea>

    <mt-button type="primary" size="large" class="cmt-info">发表评论</mt-button>
      <div class="cmt-list">
        <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_item">
          <div class="cmt-title"> 
            第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_item | dateFormat}}
          </div>
          <div class="cmt-body">
            {{item.content}}
          </div>
        </div>
      </div>
     <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data (){
    return {
      pageIndex: 1, // 默认展示第一页数据
      comments:[]
    }
  }  ,
  created(){
    this.getComments()
  },
  methods: {
    getComments(){
      this.$http.get("api/getcomments/" +this.id+"?pageindex="+this.pageIndex).then(result => {
        if(result.body.status === 0){
          this.comments = result.body.message
        }else{
          Toast("获取评论失败了！！！")
        }
      })
    }
  },
  props:["id"]
}
</script>

<style lang="less" scoped>

 h3 {
   font-size:18px;

 }
 textarea {
   font-size:14px;
 }
.cmt-info {
  margin-top:-15px;
  margin-bottom:5px;
}
  .cmt-title {
    background-color:rgb(204, 204, 204);
    font-size:14px;
    height:30px;
    line-height:30px;
    padding-left:5px;
  }
  .cmt-body{
    height:40px;
    line-height:40px;
    padding-left: 5px ;
    font-size:14px;

  }
</style>
