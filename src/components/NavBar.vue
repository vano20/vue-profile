<template>
  <!-- <v-app-bar app dense hide-on-scroll flat> -->
  <v-toolbar dense flat color="transparent" absolute width="100%">
    <v-toolbar-title
      class="ml-2 brand"
      style="cursor: pointer"
      @click="$router.push('/')"
    >
      savano
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- <div class="nav-item" @click="$router.push('About')">Project</div> -->

    <router-link to="/about" custom v-slot="{ href, navigate, isActive }">
      <a
        :href="href"
        class="nav-item"
        :class="{ active: isActive }"
        @click="navigate"
      >
        about
      </a>
    </router-link>

    <router-link to="/projects" custom v-slot="{ href, navigate, isActive }">
      <a
        :href="href"
        class="nav-item"
        :class="{ active: isActive }"
        @click="navigate"
      >
        projects
      </a>
    </router-link>

    <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon v-if="!$vuetify.theme.dark">mdi-moon-waning-crescent</v-icon>
      <v-icon v-else>mdi-white-balance-sunny</v-icon>
    </v-btn>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
  <!-- </v-app-bar> -->
</template>
<style lang="scss" scoped>
.v-btn {
  text-transform: capitalize !important;
}
.v-toolbar__content {
  .nav-item {
    margin-right: 1.5rem;
  }
}
.brand:hover {
  color: #f44336;
}
</style>
