<template>
  <q-page>
    <AppNavigation>
      <template v-slot:title>
        <div class="text-white">Profil</div>
      </template>
    </AppNavigation>
    <div class="q-pa-md row-column-main-wrapping">
      <div class="row">
        <div class="col-4">
          <div class="q-pa-md q-gutter-sm">
            <router-link to="/changephoto" class="router-link">
              <button
                class="icon-camera-button"
                style="background-color: #e0e0e0"
              >
                <img
                  :src="selectedImage"
                  alt="Camera Icon"
                  class="profile-photo"
                  v-if="selectedImage"
                />
                <img
                  src="/icons/camera-svgrepo-com.svg"
                  alt="Camera Icon"
                  class="icon-camera"
                  v-else
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
import AppNavigation from "../components/AppNavigation";
export default {
  name: "IndexPage",
  components: {
    AppNavigation,
  },
  data() {
    return {
      selectedImage: null,
    };
  },
  methods: {
    getImageFromLocalStorage() {
      if (localStorage.getItem("profile-photo")) {
        this.selectedImage = localStorage.getItem("profile-photo");
      }
    },
  },
  mounted() {
    this.getImageFromLocalStorage();
    console.log(this.selectedImage);
  },
};
</script>

<style scoped>
.profile-photo {
  width: 100% !important;
  height: 100% !important;
}
</style>
