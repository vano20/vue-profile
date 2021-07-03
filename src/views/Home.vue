<template>
  <landing-content />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LandingContent from '@/components/LandingContent.vue'

@Component({
  name: 'Home',
  components: {
    LandingContent,
  },
})
export default class Home extends Vue {}
</script>
