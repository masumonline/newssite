<template>
  <div
    class="mx-4 mt-16 max-w-2xl rounded-lg bg-white text-gray-900 shadow-xl sm:mx-auto sm:max-w-sm md:mx-auto md:max-w-sm lg:mx-auto lg:max-w-sm xl:mx-auto xl:max-w-sm"
  >
    <div class="h-32 overflow-hidden rounded-t-lg">
      <img
        class="w-full object-cover object-top"
        :src="author.authors[0].cover_image"
        alt="Mountain"
      />
    </div>
    <div
      class="relative mx-auto -mt-16 h-32 w-32 overflow-hidden rounded-full border-4 border-white"
    >
      <img
        class="h-32 object-cover object-center"
        :src="author.authors[0].profile_image"
        :alt="author.authors[0].name"
      />
    </div>
    <div class="mt-2 text-center">
      <h2 class="font-semibold">{{ author.authors[0].name }}</h2>
      <p class="text-gray-500">{{ author.authors[0].bio }}</p>
    </div>
    <ul class="mt-2 flex items-center justify-around py-4 text-gray-700">
      <li
        v-if="author.authors[0].twitter"
        class="flex flex-col items-center justify-around"
      >
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
            fill="currentColor"
          ></path>
        </svg>
        <div>{{ author.authors[0].twitter }}</div>
      </li>
      <li
        v-if="author.authors[0]"
        class="flex flex-col items-center justify-between"
      >
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            d="M7.5 14.5a7 7 0 110-14 7 7 0 010 14zm0 0v-8a2 2 0 012-2h.5m-5 4h5"
            stroke="currentColor"
          ></path>
        </svg>
        <div>
          {{ author.authors[0].facebook }}
        </div>
      </li>
      <li class="flex flex-col items-center justify-around">
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            d="M2.5.5V0H2v.5h.5zm10 0h.5V0h-.5v.5zM4.947 4.724a.5.5 0 00-.894-.448l.894.448zM2.5 8.494l-.447-.223-.146.293.21.251.383-.32zm5 5.997l-.384.32a.5.5 0 00.769 0l-.385-.32zm5-5.996l.384.32.21-.251-.146-.293-.447.224zm-1.553-4.219a.5.5 0 00-.894.448l.894-.448zM8 9.494v-.5H7v.5h1zm-.5-4.497A4.498 4.498 0 013 .5H2a5.498 5.498 0 005.5 5.497v-1zM2.5 1h10V0h-10v1zM12 .5a4.498 4.498 0 01-4.5 4.497v1c3.038 0 5.5-2.46 5.5-5.497h-1zM4.053 4.276l-2 3.995.895.448 2-3.995-.895-.448zM2.116 8.815l5 5.996.769-.64-5-5.996-.769.64zm5.768 5.996l5-5.996-.768-.64-5 5.996.769.64zm5.064-6.54l-2-3.995-.895.448 2 3.995.895-.448zM8 14.49V9.494H7v4.997h1z"
            fill="currentColor"
          ></path>
        </svg>
        <div>{{ author.authors[0].count.posts }}</div>
      </li>
    </ul>
    <div class="mx-8 mt-2 border-t p-4">
      <button
        class="mx-auto block w-1/2 rounded-full bg-gray-900 px-6 py-2 font-semibold text-white hover:shadow-lg"
      >
        Follow
      </button>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const props = defineProps({
  author: {
    type: [],
    required: true,
  },
});
</script>
