<template>
  <div class="mx-auto px-3 xl:container sm:px-4 xl:px-2">
    <div class="flex flex-row flex-wrap">
      <!-- Left -->
      <div class="w-full max-w-full flex-shrink overflow-hidden lg:w-2/3">
        <div class="w-full py-3">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
            <span
              class="border-l-3 mr-2 inline-block h-5 border-red-600"
            ></span>
            Main News
          </h2>
        </div>
        <div class="-mx-3 flex flex-row flex-wrap"></div>
      </div>
      <!-- right -->
      <div
        class="order-first w-full max-w-full flex-shrink lg:order-last lg:w-1/3 lg:pb-8 lg:pl-8 lg:pt-14"
      >
        <div class="h-full w-full bg-gray-50">
          <div class="sticky py-6 text-sm">
            <div class="w-full text-center">
              <a class="uppercase" href="#">Advertisement</a>
              <a href="#">
                <img
                  class="mx-auto"
                  src="/img/ads/250.jpg"
                  alt="advertisement area"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch(
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=0c7afe6a8baf421094c1d83ca617f00e",
);

const posts = data.value.articles;
console.log(posts);
</script>
