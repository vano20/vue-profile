<template>
  <v-container class="landing-section pa-0 ma-0 fill-height" fluid>
    <!-- <div class="overlay"></div> -->
    <div class="content d-flex flex-column">
      <div class="d-flex flex-column align-md-center">
        <p class="text-h4 text-md-h2 text-lg-h3 text-xl-h2 font-source-code">
          savano miatama
        </p>
        <div class="text-h6 text-sm-h5 text-md-h5 text-lg-h5 text-xl-h4">
          <transition-group name="list-complete">
            <div v-if="feShow" class="list-item" key="fe">
              <span class="red--text">front-end</span>
              developer
            </div>
            <div v-else-if="jsShow" class="list-item" key="js">
              <span class="yellow--text text--darken-2">javascript</span>
              developer
            </div>
          </transition-group>
        </div>
      </div>
      <div class="py-5 d-flex align-center justify-center">
        <nav-icon @click="toGithub">mdi-github</nav-icon>
        <nav-icon @click="toLinkedin">mdi-linkedin</nav-icon>
        <nav-icon @click="toTweet">mdi-twitter</nav-icon>
        <nav-icon @click="toResume">mdi-file-document</nav-icon>
      </div>
      <div
        class="mt-4 d-flex flex-row align-center justify-center landing-route"
      >
        <router-link to="/about" custom v-slot="{ href, navigate, isActive }">
          <a
            :href="href"
            class="nav-item text-h6 text-sm-h5 text-md-h5 text-lg-h5 text-xl-h4"
            :class="{ active: isActive }"
            @click="navigate"
          >
            about
          </a>
        </router-link>
        <router-link
          to="/projects"
          custom
          v-slot="{ href, navigate, isActive }"
        >
          <a
            :href="href"
            class="nav-item text-h6 text-sm-h5 text-md-h5 text-lg-h5 text-xl-h4"
            :class="{ active: isActive }"
            @click="navigate"
          >
            projects
          </a>
        </router-link>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" scoped>
import { Component } from 'vue-property-decorator'
import NavIcon from '@/components/Base/NavIcon.vue'
import Base from '@/components/Base'

@Component({
  name: 'LandingContent',
  components: {
    NavIcon,
  },
})
export default class LandingContent extends Base {
  feShow = true
  jsShow = false
  currentInterval: number | undefined

  mounted(): void {
    this.currentInterval = setInterval(() => {
      this.toggle()
    }, 2500)
  }

  beforeDestroy(): void {
    clearInterval(this.currentInterval)
  }

  toggle(): void {
    this.feShow = !this.feShow
    this.jsShow = !this.feShow
  }
  toGithub(): void {
    this.url = 'github.com/vano20'
    this.openNewtab()
  }
  toLinkedin(): void {
    this.url = 'linkedin.com/in/savano-miatama/'
    this.openNewtab()
  }
  toTweet(): void {
    this.url = 'twitter.com/savano20'
    this.openNewtab()
  }
  toResume(): void {
    this.url =
      'docs.google.com/document/d/1lqqQAT6DRopJiVrfpjHKWnfEFP7McjQWavUvXbjHYIw/edit'
    this.openNewtab()
  }
}
</script>
<style lang="scss" scoped>
.landing-section {
  background: #ffffff44;
  object-fit: contain;
}
.overlay {
  background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%);
  z-index: 1;
  position: absolute;
  height: 100vh;
  width: 100%;
}
.content {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span,
  a {
    font-family: $font-baloo !important;
  }
}

.landing-route {
  a {
    margin: 0 10px;
  }
}

.list-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
