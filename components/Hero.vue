<template>
  <div class="mt-6 py-6">
    <div class="mx-auto px-3 xl:container sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <div
          class="w-full max-w-full flex-shrink pb-1 lg:w-1/2 lg:pb-0 lg:pr-1"
        >
          <div
            class="hover-img max-h-98 relative overflow-hidden"
            v-if="posts.articles[0]"
          >
            <nuxt-link :to="'/news/' + posts.articles[0].url">
              <NuxtImg
                :src="posts.articles[0].urlToImage"
                width="756"
                height="389"
                :alt="posts.articles[0].title"
              />
            </nuxt-link>
            <div
              class="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 px-5 pb-5 pt-8"
            >
              <nuxt-link :to="'/news/' + posts.articles[0].url">
                <h2 class="mb-3 text-3xl font-bold capitalize text-white">
                  {{ posts.articles[0].title }}
                </h2>
              </nuxt-link>
              <p class="hidden text-gray-100 sm:inline-block">
                {{ posts.articles[0].description.slice(0, 150) + " ..." }}
              </p>
              <div class="flex pt-2">
                <div
                  class="text-gray-100"
                  v-for="tag in posts.articles[0].tags"
                >
                  <div
                    class="mx-2 inline-block h-3 border-l-2 border-green-600"
                  ></div>
                  <nuxt-link :to="'page/' + tag.slug">
                    {{ tag.name }}
                  </nuxt-link>
                </div>
              </div>
              <p
                v-for="author in posts.articles[0].authors"
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

        <!--Start box news-->
        <div class="w-full max-w-full flex-shrink lg:w-1/2">
          <div class="grid grid-cols-2 gap-1">
            <article class="w-full flex-shrink" v-for="post in filterpost">
              <div class="hover-img relative max-h-48 overflow-hidden">
                <nuxt-link :to="'/news/' + post.slug">
                  <NuxtImg
                    :src="post.feature_image"
                    width="378"
                    height="192"
                    :alt="post.title"
                  />
                </nuxt-link>
                <div
                  class="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 px-4 pb-4 pt-7"
                >
                  <nuxt-link :to="'/news/' + post.slug">
                    <h2
                      class="mb-1 text-lg font-bold capitalize leading-tight text-white"
                    >
                      {{ post.title }}
                    </h2>
                  </nuxt-link>

                  <div class="flex pt-2">
                    <div class="text-gray-100" v-for="tag in post.tags">
                      <div
                        class="mx-2 inline-block h-3 border-l-2 border-green-600"
                      ></div>
                      <nuxt-link :to="'page/' + tag.slug">
                        {{ tag.name }}
                      </nuxt-link>
                    </div>
                  </div>
                  <p
                    v-for="author in post.authors"
                    class="text-right text-xs text-white"
                  >
                    By:
                    <nuxt-link :to="'authors/' + author.slug">
                      {{ author.name }}
                    </nuxt-link>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useFetch(
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0c7afe6a8baf421094c1d83ca617f00e",
);

const filterpost = computed(() => {
  return posts.value.articles.filter((post, index) => {
    if (index > 0) {
      return post;
    }
  });
});
</script>
