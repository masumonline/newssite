<template>
  <main id="content">
    <!-- advertisement -->
    <div class="bg-gray-50 py-4">
      <div class="mx-auto px-3 xl:container sm:px-4 xl:px-2">
        <div class="mx-auto table text-center text-sm">
          <a class="uppercase" href="#">Advertisement</a>
          <a href="#">
            <img src="/img/ads/ads_728.jpg" alt="advertisement area" />
          </a>
        </div>
      </div>
    </div>

    <!-- block news -->
    <div class="bg-gray-50 py-6">
      <div class="mx-auto px-3 xl:container sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <!-- Left -->
          <div class="w-full max-w-full flex-shrink overflow-hidden lg:w-2/3">
            <div class="mb-3 w-full py-3">
              <h2 class="text-3xl font-bold text-gray-800">
                {{ post.posts[0].title }}
              </h2>
              <p>{{ newsdate }}</p>
            </div>
            <div class="-mx-3 flex flex-row flex-wrap">
              <div class="w-full max-w-full px-4">
                <!-- Post content -->
                <div class="pb-4 leading-relaxed">
                  <img :src="post.posts[0].feature_image" />
                  <div v-html="post.posts[0].html"></div>
                </div>

                <!-- author -->
                <div
                  v-for="author in post.posts[0].authors"
                  class="-mx-4 flex flex-row flex-wrap justify-center py-4"
                >
                  <div
                    class="w-1/3 max-w-full flex-shrink px-4 sm:w-1/4 md:w-1/6"
                  >
                    <a href="#">
                      <img
                        class="h-auto max-w-full rounded-full border dark:border-gray-700"
                        :src="author.profile_image"
                        :alt="author.name"
                      />
                    </a>
                  </div>
                  <div
                    class="w-2/3 max-w-full flex-shrink px-4 sm:w-3/4 md:w-10/12"
                  >
                    <!--name-->
                    <p
                      class="mb-2 text-lg font-semibold leading-normal text-gray-800 dark:text-gray-100"
                    >
                      <span class="font-semibold">
                        Name: {{ author.name }}
                      </span>
                    </p>
                    <!-- website -->
                    <p class="mb-1">
                      <a target="_blank" class="text-red-700" href="#">
                        {{ author.website }}
                      </a>
                    </p>
                    <!--description-->
                    <p>
                      {{ author.bio }}
                    </p>
                    <p v-if="author.twitter" class="flex">
                      <svg
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span class="pl-2">
                        {{ author.twitter }}
                      </span>
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
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a
                      class="flex flex-row items-center px-6 py-3 text-lg font-bold"
                      href="#"
                      >Why the world would end without political polls</a
                    >
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a
                      class="flex flex-row items-center px-6 py-3 text-lg font-bold"
                      href="#"
                      >Meet The Man Who Designed The Ducati Monster</a
                    >
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a
                      class="flex flex-row items-center px-6 py-3 text-lg font-bold"
                      href="#"
                      >2020 Audi R8 Spyder spy shots release</a
                    >
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a
                      class="flex flex-row items-center px-6 py-3 text-lg font-bold"
                      href="#"
                      >Lamborghini makes Huracán GT3 racer faster for 2019</a
                    >
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a
                      class="flex flex-row items-center px-6 py-3 text-lg font-bold"
                      href="#"
                      >ZF plans $14 billion autonomous vehicle push, concept
                      van</a
                    >
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
  </main>
  <!-- end main -->
</template>
<script setup>
const route = useRoute();
const slug = route.params.slug;
const { data: post, error } = await useFetch(
  `http://localhost:8080/ghost/api/content/posts/slug/${slug}/?key=5c2ee25d9a6c47d0cd7f9ac970&include=tags,authors`,
);

const newsdate = computed(() => {
  return new Date(post.value.posts[0].published_at);
});

// console.log(newsdate.value);
</script>

<style>
.kg-gallery-container {
  display: grid;
  gap: 0.5rem;
}

.kg-gallery-card {
  gap: 1.2rem;
  box-sizing: border-box;
}

.kg-gallery-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
}

.kg-gallery-image {
  flex: 1.5 1 0%;
}

.kg-embed-card > iframe {
  width: 100%;
  height: 600px;
}

p {
  padding: 5px 0;
}

.kg-product-card-container {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
}

.kg-product-card-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.kg-product-card-container a {
  background: blue;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  display: block;
  text-align: center;
}

.kg-file-card.kg-card .kg-file-card-container {
  padding: 0.6em;
}

.kg-file-card a.kg-file-card-container {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  color: inherit;
  min-height: 92px;
  border: 1px solid #ccc;
  border-radius: 3px;
  transition: all ease-in-out 0.35s;
  text-decoration: none;
  width: 100%;
}

.kg-file-card-contents {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px 8px;
  width: 100%;
}

.kg-file-card-title {
  font-size: 1.15em;
  font-weight: 700;
  line-height: 1.3em;
}

.kg-file-card-caption {
  margin-top: -3px;
  font-size: 0.95em;
  line-height: 1.3em;
  opacity: 0.6;
}

.kg-file-card.kg-card .kg-file-card-metadata {
  font-size: 0.9em;
}

.kg-file-card-metadata {
  display: inline;
  font-size: 0.825em;
  line-height: 1.3em;
  margin-top: 2px;
}

.kg-file-card-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  min-width: 80px;
  height: 80px;
  background: #eee;
}

.kg-file-card.kg-card .kg-file-card-contents {
  margin: 4px 8px 6px;
}

.kg-file-card-icon:before {
  display: block;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: currentColor;
  opacity: 0.6;
  transition: opacity ease-in-out 0.35s;
  border-radius: 2px;
}

.kg-file-card-icon svg {
  width: 24px;
  height: 24px;
  color: #ff1a75;
}

.kg-file-card-filename {
  display: inline;
  font-weight: 500;
}

.kg-file-card-filesize {
  display: inline-block;
  font-size: 0.925em;
  opacity: 0.6;
}

.kg-file-card.kg-card .kg-file-card-filesize:before {
  margin-left: 6px;
  margin-right: 6px;
}

.kg-file-card-filesize::before {
  display: inline-block;
  content: "·";
}
</style>
