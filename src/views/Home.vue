<template>
  <div class="container-fluid p-0">
    <NavBar />
    <Header />
    <Main />
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
// 元件
import NavBar from '@/views/layout/NavBar.vue';
import Header from '@/views/layout/Header.vue';
import Main from '@/views/layout/Main.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    Main,
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['getToken']),
  },
  computed: {
    ...mapGetters(['kkboxToken']),
  },
  created() {
    this.getToken();
  },
};
</script>
