<template>
  <div class="container">
    <!-- First Section -->
    <div class="mt-6">
      <div
        class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Lot Calculator</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Lot calculator is a great tool</p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <button
            data-modal-target="#default-modal"
            data-modal-toggle="#default-modal"
            type="button"
            @click="openModal('Tools1')"
            class="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Use Tools Now!
          </button>
        </div>
      </div>
    </div>

    <!-- Second Section -->
    <div class="mt-6">
      <div
        class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Lot Calculator</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Lot calculator is a great tool</p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <button
            data-modal-target="#default-modal"
            data-modal-toggle="#default-modal"
            type="button"
            @click="openModal('Tools2')"
            class="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Use Tools Now!
          </button>
        </div>
      </div>
    </div>

    <div
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex items-center justify-center"
    >
      <div class="relative p-4 w-full max-w-2xl">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Tools</h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="#default-modal"
              @click="closeModal"
            >
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5 space-y-4">
            <component :is="modalComponent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tools1 from '../components/Tools1.vue';
import Tools2 from '../components/Tools2.vue';

export default {
  data() {
    return {
      modalComponent: null,
    };
  },
  methods: {
    openModal(componentName) {
      if (componentName === 'Tools1') {
        this.modalComponent = Tools1;
      } else if (componentName === 'Tools2') {
        this.modalComponent = Tools2;
      }

      const modal = document.getElementById('default-modal');
      modal.classList.toggle('hidden');
    },
    closeModal() {
      const modal = document.getElementById('default-modal');
      modal.classList.toggle('hidden');
      this.modalComponent = null;
    },
  },
};
</script>
