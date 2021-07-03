<template>
  <v-btn class="mx-3 nav-icon" large icon @click="$emit('click')">
    <v-icon large><slot /></v-icon>
    <!-- <i class="colored" :class="icon"></i> -->
    <!-- <slot /> -->
  </v-btn>
</template>
<script lang="ts" scoped>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'NavIcon',
})
export default class NavIcon extends Vue {
  @Prop(String) readonly icon: string | undefined
}
</script>
<style lang="scss" scoped>
.nav-icon .v-btn__content:hover {
  i.v-icon {
    color: #f44336;
  }
}
</style>
