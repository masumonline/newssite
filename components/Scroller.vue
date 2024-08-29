<template>
  <div class="card bg-gray-900 text-white">
    <Carousel
      :value="posts"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 p-3">
          <div class="mb-3">
            <div class="relative mx-auto">
              <nuxt-link :to="'/news/' + slotProps.data.slug">
                <NuxtImg
                  :src="slotProps.data.feature_image"
                  width="491"
                  height="327"
                  :alt="slotProps.data.feature_image"
                  class="border-round w-full"
                />
                <Tag
                  :value="slotProps.data.inventoryStatus"
                  :severity="getSeverity(slotProps.data.inventoryStatus)"
                  class="absolute"
                  style="left: 5px; top: 5px"
                />
              </nuxt-link>
            </div>
          </div>
          <nuxt-link :to="'/news/' + slotProps.data.slug">
            <div class="mb-3 font-medium">{{ slotProps.data.title }}</div>
          </nuxt-link>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
const { data } = await useFetch(
  "http://localhost:8080/ghost/api/content/posts/?key=5c2ee25d9a6c47d0cd7f9ac970&order=published_at%20desc&limit=6",
);
const posts = data.value.posts;

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>
