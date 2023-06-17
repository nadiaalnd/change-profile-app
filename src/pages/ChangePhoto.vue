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
        <q-toolbar-title> Ganti Foto Profil </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <div class="container-change-photo">
      <div class="box-change-photo"></div>
      <router-link to="/takephoto" class="router-link">
        <div class="button">Ambil Dari Camera</div>
      </router-link>
      <router-link to="/choosephoto" class="router-link">
        <div class="button">Ambil Dari Gallery</div>
      </router-link>
      <div class="save-button">
        <div class="button-text">Simpan</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ChangeProfile",
};
</script>

<style scoped>
.container-change-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
}
.box-change-photo {
  width: 343px;
  height: 343px;
  background-color: #e0e0e0;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}

.button {
  width: 341px;
  height: 40px;
  background-color: #006c84;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 65px 0px -45px 0px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}
.save-button {
  width: 375px;
  height: 44px;
  background-color: #E0E0E0;
  color: #757575;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 157px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}
</style>
