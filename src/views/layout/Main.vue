
<template>
  <div>
    <main class="main container my-5">
      <section class="music row">
        <div class="music-search col-lg-6">
          <div class="input-group mb-3">
            <select
              id="category"
              name="category"
            >
              <option value="song">
                歌曲
              </option>
            </select>
            <input
              class="form-control"
              type="text"
              placeholder="搜尋歌曲"
              aria-label="searchname"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                id="button-addon2"
                class="btn btn-outline-secondary"
                type="button"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
          <ul class="song list-group">
            <li class="song-item list-group-item ">
              <img
                src="https://i.kfs.io/artist/global/6721287,0v2/fit/160x160.jpg"
                alt=""
                class="song-img"
              />
              <div class="song-title">
                <h3>我難過</h3>
                <span>歌手: 5566</span>
              </div>
              <a><i class="fas fa-plus"></i></a>
            </li>
            <li class="list-group-item">
              <img
                src=""
                alt=""
                class="song-img"
              />
            </li>
            <li class="list-group-item">
              <img
                src=""
                alt=""
                class="song-img"
              />
            </li>
            <li class="list-group-item">
              <img
                src=""
                alt=""
                class="song-img"
              />
            </li>
            <li class="list-group-item p-0">
              <img
                src=""
                alt=""
                class="song-img"
              />
            </li>
          </ul>
        </div>
        <div class="music-mysong col-lg-6">
          <li class="list-group-item p-2 text-center">
            <h5>
              我的歌曲
            </h5>
          </li>
          <ul class="song list-group">
            <li class="song-item list-group-item ">
              <img
                src="https://i.kfs.io/artist/global/6721287,0v2/fit/160x160.jpg"
                alt=""
                class="song-img"
              />
              <div class="song-title">
                <h3>我難過</h3>
                <span>歌手: 5566</span>
              </div>
              <a><i class="fab fa-gratipay"></i></a>
            </li>
            <li class="list-group-item">
              <img
                src=""
                alt=""
                class="song-img"
              />
            </li>
            <li class="list-group-item">
              <img
                src=""
                alt=""
                class="song-img"
              />
            </li>
            <li class="list-group-item">
              <img
                src=""
                alt=""
                class="song-img"
              />
            </li>
            <li class="list-group-item p-0">
              <img
                src=""
                alt=""
                class="song-img"
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
  .main {
    height: 100%;
    width: 100%;
  }
  .song {

    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0
    }
    &-img {
      width: 75px;
      height: 75px;
    }
    .fa-plus {
      margin: 0 5%;
      font-size: 1.8rem;
      color:rgb(185,185,185);
      transition: color 0.2s;
      &:hover {
        color: #DF6868;
      }
    }
    .fa-gratipay {
      margin: 0 5%;
      font-size: 1.5rem;
      color: #DF6868;
      &:active,&:visited,&:link {
        color:rgb(185,185,185);
      }
    }
  }
</style>
