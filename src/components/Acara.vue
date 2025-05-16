<script setup>
import moment from "moment";

const props = defineProps({ data: Object });

const saveCalendar = () => {
  const title =
    "&text=Undangan Pernikahan " +
    props.data?.mempelai.pria.nama_panggilan +
    " - " +
    props.data?.mempelai.wanita.nama_panggilan;
  const description =
    "&details=Dalam+perjalanan+yang+penuh+rasa+dan+doa%2C%0Akami+memantapkan+hati+untuk+melangkah+bersama+dalam+ikatan+suci.%0AKami+mengundang+dengan+penuh+cinta+dan+harap%2C%0Aagar+Bapak%2FIbu%2FSaudara%2Fi+dapat+hadir%0Amerayakan+momen+bahagia+kami.";
  const location = "&location=" + props.data?.acara?.resepsi?.tempat;
  const dates =
    "&dates=" +
    moment(props.data?.acara?.akad_nikah?.tanggal)
      .utc()
      .format("YYYYMMDDTHHmmss[Z]") +
    "%2F" +
    moment(props.data?.acara?.akad_nikah?.tanggal)
      .utc()
      .format("YYYYMMDDTHHmmss[Z]");

  const url =
    "https://www.google.com/calendar/render?action=TEMPLATE" +
    title +
    description +
    location +
    dates;

  window.open(url, "_blank");
};
</script>
<template>
  <v-container height="75dvh" class="relative p-0 overflow-hidden">
    <v-img :src="props.data?.foto_opening" cover></v-img>
    <div class="absolute top-0 left-0 w-full h-full bg-black/80 py-10">
      <div class="flex justify-center items-center px-10 ">
        <div class="text-center w-full">
          <p class="mb-10">
            Bergabunglah bersama Kami menyaksikan sekaligus merayakan
            terbentuknya ikatan suci ini. Kami ingin Anda menjadi bagian dari
            hari istimewa kami.
          </p>
          <v-card rounded="lg" class="mb-10">
            <v-row class="items-center" no-gutters="">
              <v-col cols="2" class="bg-white flex justify-center text-center">
                <v-icon
                  color="primary"
                  icon="mdi-book-heart-outline"
                  class="-rotate-90 -mr-[25px]"
                ></v-icon>
                <h4 class="-rotate-90 font-bold text-nowrap -mr-[20px]">
                  Akad Nikah
                </h4>
              </v-col>
              <v-col cols="10" class="bg-primary py-3 px-5 text-start">
                <div class="flex items-center">
                  <v-icon icon="mdi-calendar-heart"></v-icon>
                  <div class="ms-3">
                    <p class="mb-0 text-xl font-bold">
                      {{ props.data?.acara?.akad_nikah?.hari }}
                    </p>
                    <p class="font-bold">
                      {{ props.data?.acara?.akad_nikah?.tanggal }}
                    </p>
                    <p>Pukul {{ props.data?.acara?.akad_nikah?.waktu }}</p>
                  </div>
                </div>
                <hr class="my-1" />
                <div class="flex items-center">
                  <v-icon icon="mdi-store-marker"></v-icon>
                  <p class="ms-3">
                    {{ props.data?.acara?.akad_nikah?.tempat }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-card>

          <v-card rounded="lg">
            <v-row class="items-center" no-gutters="">
              <v-col cols="10" class="bg-primary py-3 px-5 text-start">
                <div class="flex items-center justify-end">
                  <div class="me-3 text-end">
                    <p class="mb-0 text-xl font-bold">
                      {{ props.data?.acara?.akad_nikah?.hari }}
                    </p>
                    <p class="font-bold">
                      {{ props.data?.acara?.akad_nikah?.tanggal }}
                    </p>
                    <p>Pukul {{ props.data?.acara?.akad_nikah?.waktu }}</p>
                  </div>
                  <v-icon icon="mdi-calendar-heart"></v-icon>
                </div>
                <hr class="my-1" />
                <div class="flex items-center justify-end">
                  <p class="me-3 text-end">
                    {{ props.data?.acara?.akad_nikah?.tempat }}
                  </p>
                  <v-icon icon="mdi-store-marker"></v-icon>
                </div>
              </v-col>
              <v-col cols="2" class="bg-white flex justify-center text-center">
                <h4 class="rotate-90 font-bold text-nowrap -ml-[20px]">
                  Resepsi
                </h4>
                <v-icon
                  color="primary"
                  icon="mdi-email-open-heart-outline"
                  class="rotate-90 -ml-[15px]"
                ></v-icon>
              </v-col>
            </v-row>
          </v-card>

          <!-- <div class="animate__animated animate__zoomIn animate__delay-1s">
            <h3 class="text-2xl font-bold mb-2">Akad Pernikahan</h3>
            <p class="mb-0">{{ props.data?.acara?.akad_nikah?.hari }}</p>
            <p>
              {{ moment(props.data?.acara?.akad_nikah?.tanggal).format("LL") }}
            </p>
            <p>Pukul {{ props.data?.acara?.akad_nikah?.waktu }}</p>
            <p>{{ props.data?.acara?.akad_nikah?.tempat }}</p>
          </div>

          <div class="animate__animated animate__zoomIn animate__delay-2s">
            <v-spacer class="my-5" />
            <div class="flex justify-center">
              <img src="/public/img/joglo.png" alt="" class="w-[100px]" />
            </div>
            <h3 class="text-2xl font-bold mb-2 -mt-[20px]">Resepsi</h3>
            <p class="mb-0">{{ props.data?.acara?.resepsi?.hari }}</p>
            <p>
              {{ moment(props.data?.acara?.resepsi?.tanggal).format("LL") }}
            </p>
            <p>Pukul {{ props.data?.acara?.resepsi?.waktu }}</p>
            <p>{{ props.data?.acara?.resepsi?.tempat }}</p>

            <v-btn
              color="#C1A162"
              size="small"
              prepend-icon="mdi-calendar"
              @click="saveCalendar"
              class="mt-3"
            >
              Save Calendar
            </v-btn>
          </div> -->
        </div>
      </div>
    </div>
  </v-container>
</template>
