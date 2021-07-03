<template>
  <v-toolbar dense flat color="transparent" absolute width="100%">
    <v-toolbar-title
      class="ml-2"
      style="cursor: pointer"
      @click="$router.push('/')"
    >
      savano
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text> Project </v-btn>

    <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon v-if="!$vuetify.theme.dark">mdi-weather-night</v-icon>
      <v-icon v-else>mdi-white-balance-sunny</v-icon>
    </v-btn>

    <v-btn icon @click="$router.push('About')">
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>
