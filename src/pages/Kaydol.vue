<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <div
      class="text-h5 text-weight-bold"
      style="text-align: center; margin: 2em"
    >
      DOLAP'A ÜYE OL
    </div>

    <div
      class="column no-wrap justify-center items-center content-center"
      style="
        width: 40vw;
        overflow: auto;
        border: 0.5px solid rgba(0, 0, 0, 0.3);
        margin: 0 auto;
        border-radius: 5px;
        padding: 2em;
      "
    >
      <div class="row">
        <q-flex class="q-pa-xl full-width" align="center">
          <q-carousel
            v-model="slide"
            transition-prev="jump-right"
            transition-next="jump-left"
            swipeable
            animated
            control-color="black"
            prev-icon="arrow_left"
            next-icon="arrow_right"
            navigation-icon="radio_button_unchecked"
            navigation
            padding
            arrows
            height="200px"
            class="bg-white text-black"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <q-img
                src="https://cdn.dolap.com/web/images/logo-5.svg"
                style="max-width: 125px; height: 58px"
              />
              <div class="q-mt-md text-center">
                dolap'a üye ol ve ayrıcalıklarından yararlan
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <q-img src="x1.png" style="max-width: 145px; height: 145px" />
              <div class="q-mt-md text-center">
                dolap'ı daha güvenli bir hale getirmeye sen de destek ol
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <q-img src="y.png" style="max-width: 145px; height: 145px" />
              <div class="q-mt-md text-center">
                İletişime geç ve daha hızlı anlaşmaya var
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <q-img src="z.png" style="max-width: 125px; height: 125px" />
              <div class="q-mt-md text-center">
                Tüm favori ürünlerini tek bir yerde kaydet
              </div>
            </q-carousel-slide>
          </q-carousel>

          <p>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                v-model="name"
                label="Adınız ve Soyadınız *"
                hint=" "
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Lütfen bir şey giriniz',
                ]"
              />

              <q-input
                filled
                type="number"
                v-model="age"
                label="Yaşınız *"
                lazy-rules
                :rules="[
                  (val) => (val !== null && val !== '') || 'Yaşınızı yazınız',
                  (val) =>
                    (val > 0 && val < 100) || 'Lütfen geçerli bir yaş giriniz',
                ]"
              />

              <q-input
                v-model="email"
                filled
                type="email"
                label="Email *"
                lazy-rules
                :rules="[
                  (val) => (val !== null && val !== '') || 'Bir email giriniz!',
                ]"
              />
              <q-input
                filled
                v-model="phone"
                label="Telefon *"
                mask="(###) ### - ####"
                lazy-rules
                :rules="[
                  (val) => (val !== null && val !== '') || 'Bir numara giriniz',
                ]"
              />
              <q-input
                v-model="password"
                filled
                :type="isPwd ? 'password' : 'text'"
                label="Şifre *"
                lazy-rules
                :rules="[
                  (val) => (val !== null && val !== '') || 'Bir şifre giriniz',
                ]"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <q-toggle
                v-model="accept"
                label="Kullanım lisans ve koşullarını kabul ediyorum"
              />
              <q-separator />
              <div>
                <q-btn
                  label="Kaydol"
                  type="submit"
                  color="teal-5"
                  @click="addUye()"
                />

                <q-separator />
                <q-space />
                <q-btn
                  size="15px"
                  elevated
                  rounded
                  color="teal-5"
                  label="üyelikleri görüntüle "
                  @click="
                    icon = true;
                    getUyeler();
                  "
                />
                <q-dialog v-model="icon">
                  <q-card>
                    <q-card-section class="row items-center q-pb-none">
                      <div class="text-h6">Üyelikler</div>
                      <q-space />
                      <q-btn
                        icon="delete"
                        flat
                        round
                        color="teal-5"
                        label="tümünü sil"
                        @click="deleteUye()"
                      />
                      <q-space />
                      <q-btn
                        flat
                        round
                        color="teal-5"
                        label="yenile"
                        @click="getUyeler()"
                      />
                      <q-btn icon="close" flat round dense v-close-popup />
                    </q-card-section>
                    <div class="q-pa-md flex justify-center">
                      <div style="max-width: 90%; width: 300px">
                        <q-intersection
                          v-for="item in uyeler"
                          :key="item.id"
                          transition="flip-right"
                        >
                          <q-item clickable v-ripple>
                            <q-item-section>
                              <q-item-label>İsim: {{ item.isim }}</q-item-label>
                              <q-item-label caption lines="1"
                                >Email: {{ item.email }}</q-item-label
                              >
                              <q-item-label caption lines="1"
                                >Yaş: {{ item.yas }}</q-item-label
                              >
                            </q-item-section>
                          </q-item>
                        </q-intersection>
                      </div>
                    </div>
                  </q-card>
                </q-dialog>
              </div>
            </q-form>
          </p>
        </q-flex>
        <q-separator />
      </div>
    </div>
    <br /><br />
    <div class="q-pa-sm bg-teal-5 q-gutter-lg">
      <div
        class="text-weigth-bold justify-center"
        style="position: relative; left: 350px; color: white; max-width: 400"
      >
        Resmi Bağlantılar
        <q-space />
        Şartlar ve Koşullar - Reklam Politikası - Resmi Kurumlar için Kılavuz -
        Gizlilik Bildirimi
      </div>
    </div>
  </q-page>
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
    const $q = useQuasar();
    const accept = ref(false);
    return {
      uyeler: [],
      items: [],
      icon: ref(false),

      isPwd: ref(true),
      password: "",
      email: "",
      phone: "",
      name: "",
      age: null,

      slide: ref("style"),
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Kullanım lisans ve koşullarını kabul etmelisiniz",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Kaydolundu!",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
  async created() {},
  methods: {
    async getUyeler() {
      this.uyeler = [];

      const q = query(collection(this.$db, "uyeler"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log({ ...doc.data(), id: doc.id });
        const data = doc.data();
        const { email, isim, telefon, yas } = data;
        this.uyeler.push({ email, isim, telefon, yas });
      });
    },

    async addUye() {
      let uyeler = {
        email: this.email,
        isim: this.name,
        sifre: this.password,
        telefon: this.phone,
        yas: this.age,
      };
      console.log(uyeler);
      const docRef = await addDoc(collection(this.$db, "uyeler"), uyeler);
      uyeler.id = docRef.id;
      this.uyeler.push(uyeler);
    },
    async deleteUye() {
      const uyelerRef = collection(this.$db, "uyeler");
      const uyelerSnapshot = await getDocs(uyelerRef);

      uyelerSnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Üyelikleriniz silindi, sayfayı yenileyiniz!",
      });
      console.log("Üyelikleriniz silindi, sayfayı yenileyiniz");
    },
  },
};
</script>

<style lang="sass" scoped></style>
