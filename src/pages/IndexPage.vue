<template>
  <q-page>
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
        <q-toolbar-title> Profil </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <div class="q-pa-md row-column-main-wrapping">
      <div class="row">
        <div class="col-4">
          <div class="q-pa-md q-gutter-sm">
            <router-link to="/changephoto" class="router-link">
              <button class="icon-camera-button" style="background-color: #e0e0e0">
                <img
                  src="/icons/camera-svgrepo-com.svg"
                  alt="Camera Icon"
                  class="icon-camera"
                />
              </button>
            </router-link>
          </div>
        </div>
        <div class="col-5 name-profile">
          <b>John Doe</b>
          <br />
          Kelas 10 IPA 8
        </div>
      </div>
    </div>
    <div class="box-main-container">
      <div class="box-main"></div>
      <div class="box-main"></div>
      <div class="box-main"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
