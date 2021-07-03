<template>
  <div class="about">
    <basic />
    <technical />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Basic from '@/components/About/Basic.vue'
import Technical from '@/components/About/Technical.vue'

@Component({
  name: 'About',
  components: {
    Basic,
    Technical,
  },
})
export default class About extends Vue {}
</script>
<style lang="scss" scoped>
.about {
  padding-top: $toolbar-height;
  padding-bottom: 54px;
}
</style>
