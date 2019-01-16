<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" class="cmt-info" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageIndex: 1, // 默认展示第一页数据
      comments: [], // 所有评论
      msg: "" // 添加评论
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      // 获取评论
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            //this.comments = result.body.message
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("获取评论失败了！！！");
          }
        });
    },
    getMore() {
      // 获取更多评论
      this.pageIndex++, this.getComments();
    },
    postComment() {
      // 添加评论
      // 校验数据是否为空
      if (this.msg.trim().length === 0) {
        return Toast("你提交的内容为空");
      }
      // 参数1：请求的URL地址
      // 参数2：提交给服务器的数据对象{ content:this.msg }
      // 参数3：定义提交的时候，表单中的数据格式 options.emulateJSON = true
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(result => {
          if (result.body.status === 0) {
            // 拼接出一个评论对象
            let cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt);
             this.msg = "";
          }
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="less" scoped>
h3 {
  font-size: 18px;
}
textarea {
  font-size: 14px;
}
.cmt-info {
  margin-top: -15px;
  margin-bottom: 5px;
}
.cmt-title {
  background-color: rgb(204, 204, 204);
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
}
.cmt-body {
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
  font-size: 14px;
}
</style>
