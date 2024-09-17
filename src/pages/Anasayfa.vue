<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <div class="q-mt-none">
      <div class="row items-center justify-center q-gutter-md">
        <q-img
          src="https://cdn.dolap.com/web/images/logo-5.svg"
          style="max-width: 140px; height: 68px"
        />

        <div class="col-5">
          <q-input
            v-model="arama"
            filled
            type="search"
            placeholder="Ürün, @üye, #etiket ara"
            class="col-5"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="row items-center">
          <q-btn flat color="black" label="Markalar" />
          <q-btn flat color="black" label="giris yap" />
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row">
        <div class="col bg-deep-purple-6">
          <q-btn flat color="white" label="Giyim" class="full-width" />
        </div>
        <div class="col bg-teal-6">
          <q-btn flat color="white" label="Çanta" class="full-width" />
        </div>
        <div class="col bg-pink-8">
          <q-btn flat color="white" label="Ayakkabı" class="full-width" />
        </div>
        <div class="col bg-amber-6">
          <q-btn flat color="white" label="Aksesuar" class="full-width" />
        </div>
      </div>
    </div>

    <div class="q-pa-md block">
      <div class="q-gutter-md row items-start justify-center">
        <q-img src="main.png" style="max-width: 1300px; height: 400px"> </q-img>
      </div>
    </div>

    <div class="q-pa-s">
      <div class="row justify-center q-gutter-sm">
        <q-intersection
          v-for="item in items2"
          :key="item.id"
          class="slot"
          style="margin-bottom: 120px; height: 290px; width: 290px"
        >
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <div
                class="text-h10 q-mb-xs"
                style="
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                "
              >
                <q-avatar size="31px">
                  <img :src="item.avatar" />
                </q-avatar>
                {{ item.satici }}
                <q-btn
                  outline
                  color="red-6"
                  icon="add"
                  size="8px"
                  label="takip et"
                />
              </div>
              <div class="row no-wrap items-center">
                <q-rating
                  v-model="ratingModel"
                  size="1.5em"
                  color="green-5"
                  icon="star_border"
                  icon-selected="star"
                />
                <span class="text-caption text-grey q-ml-sm">{{
                  item.rate
                }}</span>
              </div>
            </q-card-section>
            <q-img :src="item.source" width="262px" height="147px" />

            <q-card-actions
              style="
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              "
            >
              <div class="q-pa-md example-row-equal-width">
                <div class="row">
                  <div class="col justify-start text-h7">{{ item.info }}</div>
                  <div class="col absolute-bottom-right text-h5">
                    {{ item.fiyat }} TL
                  </div>
                </div>
              </div>
            </q-card-actions>
            <q-card-actions>
              <q-btn size="8px" unelevated unrounded color="cyan" icon="add" />
            </q-card-actions>
          </q-card>
        </q-intersection>
      </div>
    </div>

    <div class="q-ma-md">
      <q-scroll-area style="height: 200px; max-width: 1200px; left: 331px">
        <div class="q-ma-md bg-white">
          <br />
          <b>En Çok Aranan Kelimeler</b><br /><br />
          <q-btn color="white" text-color="black" label="Nike" />
          <q-btn color="white" text-color="black" label="Lacoste" />
          <q-btn color="white" text-color="black" label="Reebok" />
          <q-btn color="white" text-color="black" label="Koton" />
          <q-btn color="white" text-color="black" label="Zara" />
          <q-btn color="white" text-color="black" label="Defacto" />
          <q-btn color="white" text-color="black" label="Mango" />
          <q-btn color="white" text-color="black" label="Bershka" />
          <q-btn color="white" text-color="black" label="Saat" />
          <q-btn color="white" text-color="black" label="Balenciaga" />
          <q-btn color="white" text-color="black" label="Nike Spor Ayakkabı" />
          <q-btn color="white" text-color="black" label="Kemal Tanca" />
          <q-btn color="white" text-color="black" label="Puma" />
          <q-btn color="white" text-color="black" label="Colin's" />
          <q-btn color="white" text-color="black" label="Elibse" />
          <q-btn color="white" text-color="black" label="LC Waikiki" />
          <q-btn color="white" text-color="black" label="Alvina" />
          <q-btn color="white" text-color="black" label="Columbia" />
          <q-btn color="white" text-color="black" label="Standard" />
          <q-btn color="white" text-color="black" label="Tommy Hilfiger" />
          <q-btn color="white" text-color="black" label="Harley Davidson Bot" />
          <q-btn color="white" text-color="black" label="Yargıcı" />
          <q-btn color="white" text-color="black" label="Converse" />
          <q-btn color="white" text-color="black" label="Tozlu" />
          <q-btn color="white" text-color="black" label="English Home" />
          <q-btn color="white" text-color="black" label="Joker" />
          <q-btn color="white" text-color="black" label="Beymen" />
          <q-btn color="white" text-color="black" label="Skechers" />
          <q-btn color="white" text-color="black" label="Raisa & Vanessa" />
          <q-btn color="white" text-color="black" label="Nine West" />
          <q-btn color="white" text-color="black" label="Asos" />
          <q-btn color="white" text-color="black" label="Cat Bot" />
          <q-btn color="white" text-color="black" label="Cassio Saat" />
          <q-btn color="white" text-color="black" label="Adidas" />
          <q-btn color="white" text-color="black" label="Hummel" />
          <q-btn color="white" text-color="black" label="New Balance" />
        </div>
      </q-scroll-area>
    </div>

    <div
      class="q-pa-md example-row-column"
      style="
        position: relative;
        left: 331px;
        margin-bottom: 20px;
        margin-top: 15px;
        size: 100rem;
      "
    >
      <q-img src="yorum.png" class="q-pa"></q-img>
    </div>
    <div class="q-pa-sm q-gutter-lg">
      <div class="text-weigth-bold justify-center">
        <q-img src="alt.png"></q-img>
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
    return {
      arama: ref(""),
      ratingModel: ref(4),
      uyeler: [],
      ilanlar: [],
      items2: [],
    };
  },
  async created() {
    await this.getItems();
    const ilanlar = this.ilanlar;
  },
  methods: {
    async getItems() {
      this.items2 = [];

      const q = query(collection(this.$db, "dolapilan"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log({ ...doc.data(), id: doc.id });
        const data = doc.data();
        const { avatar, fiyat, id, info, rate, satici, source } = data;
        this.items2.push({ avatar, fiyat, id, info, rate, satici, source });
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
.slot
  height: 280px
  width: 280px
</style>
