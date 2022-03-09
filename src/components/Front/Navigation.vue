<template>
    <nav aria-label="Global" class="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
        <div v-for="item in navigation" :key="item.name">
            <Menu as="div" v-if="item.children" class="relative text-left">
                <MenuButton class="flex items-center text-sm font-medium text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                  <span>{{ item.name }}</span>
                  <ChevronDownIcon class="ml-1 h-5 w-5 text-gray-500" aria-hidden="true" />
                </MenuButton>

                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="origin-top-right absolute z-30 right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                      <MenuItem v-for="child in item.children" :key="child.name" v-slot="{ active }">
                        <a :href="child.href" :class="[active ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 border-b border-gray-100 flex']">
                            <ArrowSmRightIcon class="w-5 h-5 mr-2" aria-hidden="true" />
                            {{ child.name }}
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            <router-link to="/" v-else :href="item.href" class="px-1 py-2 text-gray-900 hover:text-red-700 text-sm font-medium">
                {{ item.name }}
            </router-link>
        </div>
    </nav>
</template>

<script>
    import { ref } from 'vue'
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