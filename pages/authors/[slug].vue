<template>
  <div v-if="error">
    <div class="bg-white py-6">
      <div class="mx-auto px-3 xl:container sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <div class="w-full max-w-full flex-shrink">
            <div class="p-10 text-center">
              <div class="mb-4 text-center">
                <h1 class="mb-2 text-6xl font-bold text-gray-800">404</h1>
                <span class="inline-block h-0.5 w-20 bg-red-600"></span>
              </div>
              <h3 class="mb-2 text-2xl">Oops! That page can’t be found.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="author" class="bg-gray-50 py-6">
    <div class="mx-auto px-3 xl:container sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <!-- Left -->
        <div class="w-full max-w-full flex-shrink overflow-hidden lg:w-2/3">
          <div class="w-full py-3">
            <h2 class="text-2xl font-bold text-gray-800">
              <span
                class="border-l-3 mr-2 inline-block h-5 border-red-600"
              ></span>
              {{ author.authors[0].name }}'s Writing
            </h2>
          </div>
          <div class="-mx-3 flex flex-row flex-wrap">
            <div
              v-if="posts.posts[0]"
              class="w-full max-w-full flex-shrink px-3 pb-5"
            >
              <div class="hover-img max-h-98 relative overflow-hidden">
                <!--thumbnail-->
                <a href="#">
                  <img
                    class="mx-auto h-auto w-full max-w-full"
                    :src="posts.posts[0].feature_image"
                    :alt="posts.posts[0].title"
                  />
                </a>
                <div
                  class="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 px-5 pb-5 pt-8"
                >
                  <a href="#">
                    <h2 class="mb-3 text-3xl font-bold capitalize text-white">
                      {{ posts.posts[0].title }}
                    </h2>
                  </a>
                  <p class="hidden text-gray-100 sm:inline-block">
                    {{ posts.posts[0].excerpt.slice(0, 150) + " ..." }}
                  </p>
                  <!-- author and date -->
                  <div class="pt-2">
                    <div
                      v-for="author in posts.posts[0].authors"
                      class="text-gray-100"
                    >
                      <div
                        class="mr-2 inline-block h-3 border-l-2 border-red-600"
                      ></div>
                      {{ author.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-for="(post, index) in filterpost"
              class="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
            >
              <div class="hover-img flex flex-row sm:block">
                <a href="">
                  <img
                    class="mx-auto w-full max-w-full"
                    :src="post.feature_image"
                    :alt="post.title"
                  />
                </a>
                <div class="py-0 pl-3 sm:py-3 sm:pl-0">
                  <h3 class="mb-2 text-lg font-bold leading-tight">
                    <a href="#">
                      {{ post.title }}
                    </a>
                  </h3>
                  <p class="mb-1 hidden leading-tight text-gray-600 md:block">
                    {{ post.excerpt.slice(0, 100) + " ..." }}
                  </p>
                  <a
                    v-for="author in post.authors"
                    class="text-gray-500"
                    href="#"
                  >
                    <span
                      class="mr-2 inline-block h-3 border-l-2 border-red-600"
                    >
                    </span>
                    <span class="mr-2">
                      {{ author.name }}
                    </span>
                  </a>
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
            <div class="mb-6 p-1">
              <Author :author="author" />
            </div>
          </div>
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
const route = useRoute();
const slug = route.params.slug;

const { data: author, error } = await useFetch(
  `http://localhost:8080/ghost/api/content/authors/slug/${slug}/?key=5c2ee25d9a6c47d0cd7f9ac970&include=count.posts`,
);

console.log(author.value.authors[0]);

const { data: posts } = await useFetch(
  `http://localhost:8080/ghost/api/content/posts/?key=5c2ee25d9a6c47d0cd7f9ac970&order=published_at%20desc&include=tags,authors&filter=authors:${slug}`,
);
// console.log(posts.value);
const filterpost = computed(() => {
  return posts.value.posts.filter((post, index) => {
    if (index > 0 && index < 7) {
      return post;
    }
  });
});
</script>
