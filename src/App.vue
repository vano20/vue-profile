<template>
  <v-app>
    <nav-bar v-if="hideNav" />

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <main-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavBar from '@/components/NavBar.vue'
import MainFooter from '@/components/Footer.vue'

@Component({
  components: {
    NavBar,
    MainFooter,
  },
})
export default class App extends Vue {
  get hideNav(): boolean {
    return !(this.$route.path === '/')
  }
}
</script>
<style lang="scss">
html {
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
