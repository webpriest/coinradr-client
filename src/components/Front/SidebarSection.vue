<template>
    <div>
    <section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
        <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <h2 id="timeline-title" class="text-lg font-medium text-gray-900">Crypto News</h2>

        <!-- Activity Feed -->
        <div class="mt-6 flow-root">
            <ul role="list" class="divide-y divide-gray-200">
                <li class="py-4">
                    <div class="flex space-x-3">
                        <img class="h-10 rounded" src="@/assets/img/binance.webp" alt="" />
                    <div class="flex-1 space-y-1">
                        <div class="flex items-center justify-between">
                        <h3 class="text-sm font-medium">Russians are blocked from buying crypto on Binance Exchange</h3>
                        <p class="text-sm text-gray-500">1h</p>
                        </div>
                    </div>
                    </div>
                </li>
                <li class="py-4">
                    <div class="flex space-x-3">
                        <img class="h-10 rounded" src="@/assets/img/russia.webp" alt="" />
                    <div class="flex-1 space-y-1">
                        <div class="flex items-center justify-between">
                        <h3 class="text-sm font-medium">Binance boss resists total ban of Russians</h3>
                        <p class="text-sm text-gray-500">3h</p>
                        </div>
                    </div>
                    </div>
                </li>
                <li class="py-4">
                    <div class="flex space-x-3">
                        <img class="h-10 rounded" src="@/assets/img/nvidia.webp" alt="" />
                    <div class="flex-1 space-y-1">
                        <div class="flex items-center justify-between">
                        <h3 class="text-sm font-medium">Hackers stole NVIDIA data and posted it online after breach</h3>
                        <p class="text-sm text-gray-500">1d</p>
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mt-6 flex flex-col justify-stretch">
            <button type="button" class="color-button inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <NewspaperIcon class="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />
                More news
            </button>
        </div>
        </div>
    </section>

    <section aria-labelledby="timeline-title" class="mt-6 lg:col-start-3 lg:col-span-1">
        <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <h2 id="timeline-title" class="text-lg font-medium text-gray-900">Coin Insight (NFA)</h2>

        <!-- Activity Feed -->
        <div class="mt-6 flow-root">
            <ul role="list" class="divide-y divide-gray-200">
                <li class="py-4">
                    <div class="">
                                            
                    </div>
                </li>
                
            </ul>
        </div>
        <div class="mt-6 flex flex-col justify-stretch">
            <button type="button" class="color-button inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <EyeIcon class="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />
                More
            </button>
        </div>
        </div>
    </section>
    </div>
</template>

<script>
import { NewspaperIcon, EyeIcon } from '@heroicons/vue/outline'

export default {
    components: {
        NewspaperIcon,
        EyeIcon
    },
    setup() {
        
    },
}
</script>