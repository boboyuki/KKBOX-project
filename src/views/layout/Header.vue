<template>
  <div>
    <header class="header">
      <section class="music">
        <ul class="navbar-nav d-flex flex-row justify-content-center pt-3">
          <li class="nav-item mr-3">
            <a href="">最新熱門歌榜</a>
          </li>
          <li class="nav-item">
            <a href="">最新發行專輯</a>
          </li>
        </ul>
        <div class="music-swiper">
          <swiper
            :options="swiperOptions"
          >
            <swiper-slide>
              <div class="music-item">
                132456
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="music-item">
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="music-item">
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="music-item">
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="music-item">
              </div>
            </swiper-slide>
            <div
              slot="pagination"
              class="swiper-pagination"
            ></div>
          </swiper>
        </div>
      </section>
    </header>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Carrousel',
  data() {
    return {
      kkboxconfig: this.$store.state.config,

      // swiper
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: true,
        speed: 1000,
        loop: true,
        slidesPerView: 5,

        centeredSlides: true,
        centeredSlidesBounds: true,
        // breakpoint
        breakpoint: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },

        },
      },
    };
  },
  computed: {
    ...mapGetters(['config']),
  },
  created() {
    this.getToken();
    this.getHitChart();
  },
  methods: {
    getHitChart() {
      console.log(this.config);
      this.$http.get('https://api.kkbox.com/v1.1/new-hits-playlists?territory=JP', this.config)
        .then((res) => {
          console.log(res.data);
        });
    },
    ...mapActions(['getToken']),
  },


};
</script>
<style lang="scss">
  .header {
    height: 400px;
    width: 100%;
    color: #fff;
    background-image: url("https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
    background-size: cover;
    background-position: 100% 100%;
    background-repeat: no-repeat;
  }
  .swiper-silde {
  }
  .music {
    &-swiper {
      height: 300px;
      width: 100%;
      margin-top: 20px;
    }
    &-item {
        width: 300px;
        height: 300px;
        margin: auto;
        background-color: #fff;
    }
  }
</style>
