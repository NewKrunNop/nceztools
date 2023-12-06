<template>
    <div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Forex Lot Calculator</h3>
      <div class="mt-4">
        <label for="balance" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Balance ($):</label>
        <input
          v-model="balance"
          type="number"
          id="balance"
          name="balance"
          class="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div class="mt-4">
        <label for="riskPercentage" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Risk Percentage
          (%):</label>
        <input
          v-model="riskPercentage"
          type="number"
          id="riskPercentage"
          name="riskPercentage"
          class="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div class="mt-4">
        <label for="stopLoss" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Stop Loss (pips):</label>
        <input
          v-model="stopLoss"
          type="number"
          id="stopLoss"
          name="stopLoss"
          class="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div class="mt-6">
        <button
          type="button"
          @click="calculateLot"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Calculate Lot
        </button>
      </div>
      <div v-if="result" class="mt-6">
        <p class="text-lg font-semibold text-green-500 dark:text-green-400">Calculated Lot: {{ result }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        balance: 0,
        riskPercentage: 0,
        stopLoss: 0,
        result: null,
      };
    },
    methods: {
      calculateLot() {
        const balance = parseFloat(this.balance);
        const riskPercentage = parseFloat(this.riskPercentage);
        const stopLoss = parseFloat(this.stopLoss);
  
        if (isNaN(balance) || isNaN(riskPercentage) || isNaN(stopLoss)) {
          this.result = null;
          return;
        }
  
        const calculatedLot = (balance * (riskPercentage / 100)) / stopLoss;
        this.result = calculatedLot.toFixed(2);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  