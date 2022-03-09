<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="w-full">
    <div class="mt-1 relative w-full rounded-md border border-blue-400 shadow-sm">
      <input type="text" id="price" class="focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full py-2 px-3 sm:text-sm border-gray-300 rounded-md" placeholder="0" autocomplete="off">
      <div class="absolute inset-y-0 right-2 flex items-center">
        <label for="currency" class="sr-only">Exchange</label>
        <select id="currency" name="currency" class="h-full py-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md focus:outline-none">
          <option class="p-3 text-gray-600">BUSD</option>
          <option>LINK</option>
          <option>ETH</option>
        </select>
      </div>
    </div>
  </div>
</template>