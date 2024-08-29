<template>
  <div class="py-6">
    <div class="mx-auto px-3 xl:container sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <div class="w-full max-w-full flex-shrink overflow-hidden">
          <div class="w-full py-3">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
              <span
                class="border-l-3 mr-2 inline-block h-5 border-red-600"
              ></span>
              আইন ও আদালত
            </h2>
          </div>
          <div class="-mx-3 flex flex-row flex-wrap">
            <div
              v-for="post in posts"
              :id="post.id"
              class="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0 lg:w-1/4"
            >
              <div class="hover-img flex flex-row sm:block">
                <nuxt-link :to="'/news/' + post.slug">
                  <NuxtImg
                    :src="post.feature_image"
                    width="362"
                    height="242"
                    :alt="post.title"
                    class="mx-auto w-full max-w-full"
                  />
                </nuxt-link>
                <div class="py-0 pl-3 sm:py-3 sm:pl-0">
                  <h3
                    class="mb-2 text-lg font-bold leading-tight dark:text-white"
                  >
                    <nuxt-link :to="'/news/' + post.slug">
                      {{ post.title }}
                    </nuxt-link>
                  </h3>
                  <p
                    class="mb-1 hidden leading-tight text-gray-600 dark:text-white md:block"
                  >
                    {{ post.excerpt.slice(0, 100) + " ..." }}
                  </p>
                  <p
                    v-for="author in post.authors"
                    class="text-right text-xs dark:text-white"
                  >
                    By:
                    <nuxt-link :to="'authors/' + author.slug">
                      {{ author.name }}
                    </nuxt-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data } = await useFetch(
  "http://localhost:8080/ghost/api/content/posts/?key=5c2ee25d9a6c47d0cd7f9ac970&order=published_at%20desc&limit=8&include=tags,authors&filter=tag:law",
);
const posts = data.value.posts;
</script>
