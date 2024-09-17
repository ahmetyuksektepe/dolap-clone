import { boot } from "quasar/wrappers";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // eslint-disable-line

const firebaseConfig = {
  apiKey: "AIzaSyAHlzPqbaF52kjx1RQr9Fnt9O-edcj5G4g",
  authDomain: "webodevi-a4067.firebaseapp.com",
  projectId: "webodevi-a4067",
  storageBucket: "webodevi-a4067.appspot.com",
  messagingSenderId: "85919359114",
  appId: "1:85919359114:web:da24da084741be4a6a8d73",
  measurementId: "G-JNLXW2H2LT",
};

const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$db = db;
  // ^ ^ ^ this will allow you to use this.$db (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$Firebaseapp = fapp;
  // ^ ^ ^ this will allow you to use this.$Firebaseapp (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});
export { fapp };
