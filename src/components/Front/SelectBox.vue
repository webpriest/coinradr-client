<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium text-gray-700"> Assigned to </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm">
        <span class="w-full inline-flex truncate">
          <span class="truncate">{{ selected.name }}</span>
        </span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="swap in swaps" :key="swap.id" :value="swap" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-red-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'truncate']">
                  {{ swap.name }}
                </span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-red-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

const swaps = [
  { id: 1, name: 'WBTC' },
  { id: 2, name: 'ETH' },
  { id: 3, name: 'BUSD' },
  { id: 4, name: 'aUSDT' },
  { id: 5, name: 'USDC' },
  { id: 6, name: 'LINK' },
  { id: 7, name: 'UNI' },
  { id: 8, name: 'MKR' },
  { id: 9, name: 'SUSHI' },
  { id: 10, name: 'LEND' },
]

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  setup() {
    const selected = ref(swaps[3])

    return {
      swaps,
      selected,
    }
  },
}
</script>