<template>
  <v-card
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :elevation="hover ? 8 : 0"
    raised
    :height="$vuetify.breakpoint.smAndDown ? 'auto' : '270px'"
    class="tech-card"
  >
    <v-img
      :src="require('../../assets/fe.jpg')"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="140px"
    >
      <v-card-title><slot name="title" /></v-card-title>
    </v-img>
    <!-- <div
      class="
        text-h6
        pt-2
        pb-4
        px-4
        d-flex
        justify-center
        text-decoration-underline
      "
    >
      <slot name="title" />
    </div> -->
    <!-- <div class="p-4 mb-4 d-flex flex-wrap justify-center stacks">
      <slot name="icon" />
    </div> -->
    <v-card-text class="stacks"><slot name="icon" /></v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'TechCard',
})
export default class TechCard extends Vue {
  hover = false
}
</script>
<style lang="scss" scoped></style>
