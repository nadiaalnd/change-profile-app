<template>
  <q-header reveal class="bg-primary text-white">
    <q-toolbar>
      <q-btn
        flat
        round
        dense
        dense-icon
        class="text-white"
        style="color: white"
        @click="$router.go(-1)"
      >
        <i class="fa-solid fa-circle-arrow-left" style="color: #ffffff"></i>
      </q-btn>
      <q-toolbar-title>
        <slot name="title"></slot>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="js">
export default {
  name: "AppNavigation",
};
</script>
