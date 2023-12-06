<template>
    <div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Profit Calculator</h3>
      <div class="mt-4">
        <label for="lotSize" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Lot Size:</label>
        <input
          v-model="lotSize"
          type="number"
          id="lotSize"
          name="lotSize"
          class="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div class="mt-4">
        <label for="lot" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Lot Value:</label>
        <input
          v-model="lot"
          type="number"
          id="lot"
          name="lot"
          class="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div class="mt-4">
        <label for="pipSize" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Pip Size:</label>
        <input
          v-model="pipSize"
          type="number"
          id="pipSize"
          name="pipSize"
          class="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div class="mt-6">
        <button
          type="button"
          @click="calculateProfit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Calculate Profit
        </button>
      </div>
      <div v-if="profit !== null" class="mt-6">
        <p class="text-lg font-semibold text-green-500 dark:text-green-400">Calculated Profit: {{ profit }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lotSize: 0,
        lot: 0,
        pipSize: 0,
        profit: null,
      };
    },
    methods: {
      calculateProfit() {
        const lotSize = parseFloat(this.lotSize);
        const lot = parseFloat(this.lot);
        const pipSize = parseFloat(this.pipSize);
  
        if (isNaN(lotSize) || isNaN(lot) || isNaN(pipSize)) {
          // Handle invalid input
          this.profit = null;
          return;
        }
  
        // Assuming lotSize represents the size of one lot, calculate contractSize
        const contractSize = lot * lotSize;
  
        // Assuming difference represents the price difference, calculate profit
        const difference = 10; // Replace with actual price difference
        const calculatedProfit = (difference / pipSize) * contractSize;
        this.profit = calculatedProfit.toFixed(2);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  