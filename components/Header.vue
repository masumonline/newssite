<template>
  <header class="fixed left-0 right-0 top-0 z-50">
    <nav class="bg-black">
      <div class="mx-auto px-3 xl:container sm:px-4 xl:px-2">
        <div class="flex justify-between">
          <div
            class="mx-w-10 flex items-center text-2xl font-bold capitalize text-white"
          >
            Rangdhanu24.com
          </div>

          <div class="card">
            <MegaMenu
              :model="menus"
              :pt="{
                root: { class: 'p-1' },
                content: {
                  class: 'text-gray-300 bolder border-l border-gray-800',
                },
                panel: {
                  class:
                    'w-auto py-1 m-0 right-0 shadow-none sm:shadow-md border-0 bg-black dark:bg-surface-700 static sm:absolute z-10 ',
                },
                submenuheader: {
                  class:
                    'font-semibold py-3 px-5 m-0 text-gray-300 border-b border-gray-700',
                },
              }"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div v-if="toggle" class="container mx-auto mt-16">
    <IconField iconPosition="left">
      <InputIcon>
        <i class="pi pi-search" />
      </InputIcon>
      <InputText v-model="search" placeholder="Search" />
    </IconField>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const toggle = ref(false);
const search = ref("Search Here");
const router = useRouter();
const menus = ref([
  {
    icon: "pi pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: "বাংলাদেশ",
    command: () => {
      router.push("/page/bangladesh");
    },
  },
  {
    label: "খেলা",
    command: () => {
      router.push("/page/sport");
    },
  },
  {
    label: "আইন",
    command: () => {
      router.push("/page/law");
    },
  },
  {
    label: "তথ্যপ্রযুক্তি",
    command: () => {
      router.push("/page/technologies");
    },
  },
  {
    label: "লাইফস্টাইল",
    command: () => {
      router.push("/page/lifestyle");
    },
  },
  {
    label: "রাজনীতি",
    command: () => {
      router.push("/page/politics");
    },
  },
  {
    label: "আরও",
    items: [
      [
        {
          label: "বিনোদন",
          items: [
            { label: "টেলিভিশন", command: () => router.push("/page/law") },
            { label: "ওটিটি", command: () => router.push("/page/law") },
            { label: "ঢালিউড", command: () => router.push("/page/law") },
            { label: "বলিউড", command: () => router.push("/page/law") },
            { label: "হলিউড", command: () => router.push("/page/law") },
          ],
        },
      ],
      [
        {
          label: "খেলা",
          items: [
            { label: "ক্রিকেট", command: () => router.push("/page/law") },
            { label: "ফুটবল", command: () => router.push("/page/law") },
            { label: "টেনিস", command: () => router.push("/page/law") },
            { label: "ফটো ফিচার", command: () => router.push("/page/law") },
            { label: "কুইজ", command: () => router.push("/page/law") },
          ],
        },
      ],
      [
        {
          label: "বাণিজ্য",
          items: [
            { label: "শেয়ারবাজার", command: () => router.push("/page/law") },
            { label: "ব্যাংক", command: () => router.push("/page/law") },
            { label: "শিল্প", command: () => router.push("/page/law") },
            { label: "অর্থনীতি", command: () => router.push("/page/law") },
            { label: "বিশ্ববাণিজ্য", command: () => router.push("/page/law") },
          ],
        },
      ],
    ],
  },
  {
    label: "",
    icon: "pi pi-search",
    command: () => {
      toggle.value = !toggle.value;
    },
  },
  {
    label: "",
    icon: "pi pi-sun",
    command: () => {
      document.documentElement.classList.toggle("dark");
    },
  },
]);
</script>
