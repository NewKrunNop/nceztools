<!-- layouts/default.vue -->

<template>
    <div class="text-slate-100 min-h-screen bg-slate-950 dark">
        <div>
            <div>
                <Navbar />
            </div>
            <Nuxt class="pt-32" />
        </div>
    </div>
  </template>
  
  <script>
  import Navbar from '~/components/Navbar.vue';
  
  export default {
    components: {
      Navbar,
    },
  };
  </script>
  