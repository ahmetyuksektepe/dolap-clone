<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="simge.jpg" />
          </q-avatar>
          Ahmet Faruk Yüksektepe 210101038
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Anasayfa" />
        <q-route-tab to="/Ayakkabi" label="Ayakkabı ilan sayfası" />
        <q-route-tab to="/Kaydol" label="Üye ol sayfası" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export default {
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped></style>
