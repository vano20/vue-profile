<template>
  <v-container class="position-relative basic-container" fluid>
    <!-- <div class="position-absolute background font-baloo font-background">
      about<br />me
    </div> -->
    <div class="d-flex justify-center align-center basic-content px-4">
      <div>
        <p class="text-h2 text-decoration-underline font-source-code">
          about me
        </p>
        <p class="text-body-1 font-source-code">
          I am telco engineer working as web developer started from being a
          hobby.
        </p>
        <p class="text-body-1 font-source-code">
          Currently only based on Surabaya, Indonesia.
        </p>
        <p class="text-body-1 font-source-code">
          I am familiar with general full-stack development and currently
          focused on
          <span class="red--text">front-end</span> development, specifically the
          front-end trinity:
          <span class="orange--text text--darken-1">html</span>,
          <span class="yellow--text text--darken-3">javascript</span>
          language and frameworks, and
          <span class="blue--text text--darken-3">css</span>.
        </p>
        <p class="text-body-1 font-source-code">
          I Like doing PC gaming on free time such as RPG and Action RTS games.
        </p>

        <p class="almamater-link pt-4 mb-2">
          <a
            href="https://pens.ac.id/"
            class="text-body-1 font-weight-bold"
            @click="toPens"
          >
            Electronics Engineering Polytechnic of Surabaya🔗
          </a>
        </p>
        <p class="text-body-2">
          <!-- <v-icon>mdi-school</v-icon> -->
          🎓 B.A.Sc Telecommunication Engineering, 2009 - 2014
        </p>
      </div>
    </div>
    <div class="scroll-down cursor-pointer" @click="toSkills">
      <div class="scroll-text text-center">scroll down</div>
      <div class="scroll-arrow text-center">↓</div>
    </div>
  </v-container>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import Base from '@/components/Base'

@Component({
  name: 'Basic',
})
export default class Basic extends Base {
  get isDesktop(): boolean {
    return this.$vuetify.breakpoint.mdAndUp
  }
  get bgColor(): string {
    return this.$vuetify.theme.dark ? 'white' : 'black'
  }
  toPens(e: Event): void {
    e.preventDefault()
    this.url = 'pens.ac.id'
    this.openNewtab()
  }

  toSkills(): void {
    this.$vuetify.goTo('#skill', {
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
    })
  }
}
</script>
<style lang="scss" scoped>
.basic-container {
  min-height: calc(100vh - 48px);
}
.background {
  top: 20%;
  left: 1%;
  line-height: 0.5;
  color: #00000022;
  text-align: right;
  z-index: 1;
}
.theme--dark .background {
  color: #ffffff22;
}
.basic-content {
  z-index: 3;
}
.font-background {
  font-size: 10rem;
}
.scroll-down {
  .scroll-text {
    bottom: 0;
    font-size: 14px;
    -webkit-animation-name: bounce-1;
    animation-name: bounce-1;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
  .scroll-arrow {
    font-size: 20px;
  }
}
.almamater-link {
  a {
    color: inherit;
    text-decoration: inherit;
  }
}
@media only screen and (min-width: 900px) {
  .scroll-down {
    left: 1%;
    bottom: 1rem;
    position: absolute;
    .scroll-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
  }
}
@media only screen and (min-width: 900px) {
  .basic-content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    width: 80%;
  }
}
@media only screen and (min-width: 1280px) {
  .font-background {
    font-size: 18rem;
  }
}

@keyframes bounce-1 {
  /* declare animation actions here */
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(8px);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
