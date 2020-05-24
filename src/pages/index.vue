<template>
  <div class="page-index c-fff">
    <van-tabs>
      <van-tab title="精选">
       <div class="mt-20">
          <swiper  ref="mySwiper" :options="swiperOptions">
            <swiper-slide><div class="swiper-item">1</div></swiper-slide>
            <swiper-slide><div class="swiper-item">2</div></swiper-slide>
            <swiper-slide><div class="swiper-item">3</div></swiper-slide>
          </swiper>
       </div>
       <div class=" pd-20">
         <div class="login-tip fsb">
            <div class="fz28">
              <img src="" alt="">
              <div>登录发现更多精彩</div>
            </div>
            <div class="btn-login">登录</div>
          </div>
          <div class="ad bs10 mb-20">
            <div class="btn-click">点击领取</div>
          </div>
          <div class="df flex-w">
            <card-item></card-item>
            <card-item></card-item>
            <card-item></card-item>
            <card-item></card-item>
          </div>
          <div class="fz32 fw-b ptb-20">剧集</div>
          <div><img src="" alt=""></div>
          <div class="df flex-w">
            <card-item></card-item>
            <card-item></card-item>
            <card-item></card-item>
            <card-item></card-item>
          </div>
       </div>
      </van-tab>
      <van-tab title="剧集">
       精选2
      </van-tab>
      <van-tab title="电视">
       电视
      </van-tab>
      <van-tab title="综艺">
       综艺
      </van-tab>
      <van-tab title="少儿">
       少儿
      </van-tab>
      <van-tab title="学堂">
       学堂
      </van-tab>
    </van-tabs>
    <div>
      
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import cardItem from '@/components/card-item'
export default {
  data() {
    return {
      swiperOptions: {
         direction: 'horizontal',
        loop: true,
        slidesPerView: "auto",
        centeredSlides:true,
        spaceBetween: 5,
        coverflowEffect: {
          rotate: 0, // 旋转的角度
          stretch: -4, // 拉伸   图片间左右的间距和密集度
          depth: 100, // 深度   切换图片间上下的间距和密集度
          modifier: 1, // 修正值 该值越大前面的效果越明显
          slideShadows: false // 页面阴影效果
        },
      }
    }
  },
  created() {

  },
  methods:{

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    cardItem
  }
}
</script>

<style lang="less">
  .page-index {
    min-height: 100%;
    background-color: rgb(25, 25, 25);
    .van-tabs__nav {
      background-color: rgb(25, 25, 25);
      color: #fff;
      .van-tab__text {
        color: #fff;
      }
    }
    .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
      border:none;
    }
    .swiper-slide {
      width: 90%;
      height: 300px;
      background-color: red;
    }
    .btn-login {
      border: 1PX solid #f33333;
      padding: 10px 20px;
      border-radius: 20px;
    }
    .ad {
      height: 120px;
      background-image: url();
      position: relative;
      
      .btn-click {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 60px;
      }
    }
  }
</style>