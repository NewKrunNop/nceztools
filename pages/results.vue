<template>
  <div id="custom-controls-gallery" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Carousel Items -->
      <div v-for="(image, index) in images" :key="index" :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }" class="transition-opacity duration-700 ease-in-out" data-carousel-item>
        <img :src="image.src" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="image.alt">
      </div>
    </div>

    <!-- Navigation buttons -->
    <div class="flex justify-center items-center pt-4">
      <button @click="prevSlide" type="button" class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
          <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button @click="nextSlide" type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
          <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg", alt: "Image 1" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg", alt: "Image 2" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg", alt: "Image 3" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg", alt: "Image 4" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg", alt: "Image 5" },
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    // ใส่ setInterval เพื่อเปลี่ยนรูปทุก 3 วินาที
    setInterval(this.nextSlide, 3000);
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>
