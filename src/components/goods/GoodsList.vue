<template>
  <div class="goods-list">
    <div class="goods-item">
      <img src="//m.360buyimg.com/mobilecms/s750x750_jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg!q80.dpg" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥1999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
        
      </div>
    </div>
    <div class="goods-item">
      <img src="//m.360buyimg.com/mobilecms/s750x750_jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg!q80.dpg" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥1999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
        
      </div>
    </div>
    <div class="goods-item">
      <img src="//m.360buyimg.com/mobilecms/s750x750_jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg!q80.dpg" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥1999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
        
      </div>
    </div>
  </div>

</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;

    .goods-item {
      width: 49%;
      border: 1px solid #ddd;
      box-shadow: 0 0 8px #ccc;
      margin: 4px 0 ;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        width: 100%;
      }
      .title {
        font-size: 16px;
      }
      .info {
         background-color: #eee;
         padding: 2px;
         p{
           margin: 0;
           
         }
        .now {
          color: red;
          font-size: 15px;
         
        }
        .old {
          font-size: 12px;
          margin-left: 5px;
          text-decoration: line-through;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
</style>
