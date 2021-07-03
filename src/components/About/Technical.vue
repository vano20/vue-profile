<template>
  <v-container
    id="skill"
    class="technical fill-height"
    :class="techClass"
    fluid
  >
    <v-row>
      <v-col cols="12" lg="8" offset-lg="2">
        <v-row>
          <v-col cols="12" lg="6" class="pa-xl-16">
            <tech-card>
              <template #title> Front-end development </template>
              <template #icon>
                <!-- <i class="devicon-html5-plain-wordmark colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-php-plain colored"></i> -->
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  html
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  css
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  scss
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  javascript
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  typescript
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  vue
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  nuxt
                </v-btn>
              </template>
            </tech-card>
          </v-col>
          <v-col cols="12" lg="6" class="pa-xl-16">
            <tech-card>
              <template #title> Back-end development </template>
              <template #icon>
                <!-- <i class="devicon-sass-original colored"></i>
                <i class="devicon-vuejs-plain colored"></i>
                <i class="devicon-react-original colored"></i>
                <i class="devicon-jquery-plain colored"></i>
                <i class="devicon-laravel-plain colored"></i>
                <i class="devicon-codeigniter-plain colored"></i>
                <i class="devicon-nodejs-plain colored"></i>
                <i class="devicon-express-original"></i>
                <i class="devicon-typescript-plain colored"></i> -->
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  php
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  nodejs
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  express
                </v-btn>
              </template>
            </tech-card>
          </v-col>
          <v-col cols="12" lg="6" class="pa-xl-16">
            <tech-card>
              <template #title> Mobile development </template>
              <template #icon>
                <!-- <i class="devicon-git-plain colored"></i>
                <v-icon size="60px" class="blue--text text--darken-1">
                  mdi-jira
                </v-icon> -->
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  react-native
                </v-btn>
              </template>
            </tech-card>
          </v-col>
          <v-col cols="12" lg="6" class="pa-xl-16">
            <tech-card>
              <template #title> Learning </template>
              <template #icon>
                <!-- <i class="devicon-git-plain colored"></i>
                <v-icon size="60px" class="blue--text text--darken-1">
                  mdi-jira
                </v-icon> -->
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  react
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  react-native
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  docker
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  bundler
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  pwa
                </v-btn>
                <v-btn class="mx-2" color="primary" elevation="2" rounded>
                  css animation
                </v-btn>
              </template>
            </tech-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TechCard from '@/components/Base/TechCard.vue'

@Component({
  name: 'Technical',
  components: {
    TechCard,
  },
})
export default class Technical extends Vue {
  get techClass(): Array<string> {
    return !this.$vuetify.theme.dark
      ? ['red', 'lighten-1']
      : ['grey', 'darken-3']
  }
}
</script>
<style lang="scss" scoped>
.technical {
  min-height: calc(100vh - 54px);
}
.stacks [class^='devicon-'] {
  font-size: 60px;
  margin: 5px 10px;
}
.technical .v-btn {
  text-transform: none;
  margin-top: 10px;
}
</style>
