<template>
    <div class="mt-8 max-w-7xl mx-auto sm:px-6">
        <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 flex justify-between">
                <div class="">
                    <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">Portfolio detail</h2>
                    <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">General trade</p>
                </div>
            </div>
            <div class="px-4 py-5 sm:px-6">
                <div class="shadow overflow-hidden border-b sm:rounded-lg">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import usePortfolio from '../../api/usePortfolio'
export default {
    props: {
        id: {
            required: true
        }
    },
    setup(props) {
        const { portfolios } = usePortfolio()
        console.log(props.id)
    },
}
</script>