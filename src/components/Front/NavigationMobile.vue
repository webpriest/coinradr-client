<template>
    <div class="mt-3 px-2 space-y-1">
        <div v-for="item in navigation" :key="item.name">    
            <Menu as="div" v-if="item.children" class="relative text-left">
                <MenuButton class="flex items-center rounded-md px-3 py-2 text-base text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-100">
                    <span>{{ item.name }}</span>
                    <ChevronDownIcon class="ml-1 h-5 w-5 text-gray-500 dark:text-gray-300" aria-hidden="true" />
                </MenuButton>

                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="origin-top-left absolute z-30 left-0 mt-0 w-40 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                        <MenuItem v-for="child in item.children" :key="child.name" v-slot="{ active }">
                        <a :href="child.href" :class="[active ? 'bg-gray-100 dark:bg-gray-600' : '', 'px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 flex']">
                            <ArrowSmRightIcon class="w-5 h-5 mr-2" aria-hidden="true" />
                            {{ child.name }}
                        </a>
                        </MenuItem>
                    </div>
                    </MenuItems>
                </transition>
            </Menu>
            <a v-else :href="item.href" class="block rounded-md px-3 py-2 text-base text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-300">{{ item.name }}</a>
        </div>
    </div>
</template>

<script>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import {
    ChevronDownIcon,
    ArrowSmRightIcon
} from '@heroicons/vue/solid'
import { ref } from 'vue'

    const navigation = [
        { name: 'My Portfolio', href: '#' },
        { name: 'Trading', href: '#' },
        { name: 'Verify', href: '#',
            children: [
                { name: 'Rug Checker', href: '#' },
                { name: 'Dex Scanner', href: '#' },
            ]
        },
        { name: 'Whale Alerts', href: '#' },
        { name: 'Submit Coin', href: '#', 
            children: [
                { name: 'New Launches', href: '#' },
                { name: 'Top Voted Coins', href: '#' },
            ] 
        },
        { name: 'Essentials', href: '#',
            children: [
                { name: 'Market', href: '#' },
                { name: 'Staking', href: '#' },
                { name: 'Crypto Education', href: '#' },
                { name: 'News', href: '#' },
                { name: 'Airdrops', href: '#' },
            ] 
        },
    ]

    export default {
        components: {
            Menu,
            MenuButton,
            MenuItem,
            MenuItems,
            ChevronDownIcon,
            ArrowSmRightIcon
        },
        setup() {
            const open = ref(false)
            return {
                navigation,
                open
            }
        }
    }
</script>