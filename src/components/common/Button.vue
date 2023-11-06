<script setup>
import {ChevronDownIcon} from '@heroicons/vue/20/solid'
const props = defineProps(['btnText', 'isArrow'])
</script>
<template>
    <button class="bg-primaryRed rounded-xl p-6 flex items-center text-white"><span class="w-full">{{ btnText }}</span> <ChevronDownIcon v-if="isArrow" class=" -rotate-90"/></button>
</template>