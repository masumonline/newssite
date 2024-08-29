<template>
  <div class="py-6">
    <div class="mx-auto px-3 xl:container sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <!-- Left -->
        <div class="w-full max-w-full flex-shrink overflow-hidden lg:w-2/3">
          <div class="w-full py-3">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
              <span
                class="border-l-3 mr-2 inline-block h-5 border-red-600"
              ></span>
              তথ্যপ্রযুক্তি
            </h2>
          </div>
          <div class="-mx-3 flex flex-row flex-wrap">
            <div class="w-full max-w-full flex-shrink px-3 pb-5">
              <div
                v-if="posts.posts[0]"
                class="hover-img max-h-98 relative overflow-hidden"
              >
                <!--thumbnail-->
                <nuxt-link :to="'/news/' + posts.posts[0].slug">
                  <NuxtImg
                    :src="posts.posts[0].feature_image"
                    width="1011"
                    height="676"
                    :alt="posts.posts[0].title"
                    class="mx-auto h-auto w-full max-w-full"
                  />
                </nuxt-link>
                <div
                  class="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 px-5 pb-5 pt-8"
                >
                  <!--title-->
                  <nuxt-link :to="'/news/' + posts.posts[0].slug">
                    <h2 class="mb-3 text-3xl font-bold capitalize text-white">
                      {{ posts.posts[0].title }}
                    </h2>
                  </nuxt-link>
                  <p class="hidden text-gray-100 sm:inline-block">
                    {{ posts.posts[0].excerpt.slice(0, 200) + " ..." }}
                  </p>
                  <!-- author and date -->
                  <div class="flex pt-2">
                    <p
                      v-for="author in posts.posts[0].authors"
                      class="text-right text-xs text-white"
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

            <div
              v-for="post in filterpost"
              class="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
            >
              <div class="hover-img flex flex-row sm:block">
                <nuxt-link :to="'/news/' + post.slug">
                  <NuxtImg
                    :src="post.feature_image"
                    width="322"
                    height="215"
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
        <!-- right -->
        <div
          class="order-first w-full max-w-full flex-shrink lg:order-last lg:w-1/3 lg:pb-8 lg:pl-8 lg:pt-14"
        >
          <div class="w-full bg-white">
            <div class="mb-6">
              <div class="bg-gray-100 p-4">
                <h2 class="text-lg font-bold">Most Popular</h2>
              </div>
              <ul class="post-number">
                <li
                  v-for="post in posts.posts"
                  class="border-b border-gray-100 hover:bg-gray-50"
                >
                  <a
                    class="flex flex-row items-center px-6 py-3 text-lg font-bold"
                    href="#"
                  >
                    {{ post.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="sticky bg-white py-6 text-sm">
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
const { data: posts } = await useFetch(
  "http://localhost:8080/ghost/api/content/posts/?key=5c2ee25d9a6c47d0cd7f9ac970&order=published_at%20desc&limit=7&include=tags,authors&filter=tag:technologies",
);

const filterpost = computed(() => {
  return posts.value.posts.filter((post, index) => {
    if (index > 0) {
      return post;
    }
  });
});
</script>
