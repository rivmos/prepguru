<script setup>
import Button from '../common/Button.vue';
</script>
<template>
    <div class="bg-bannerImage bg-no-repeat bg-cover flex items-center py-36">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold">Your Path to Success Starts Here</h2>
            <p class="text-xl">Contact us today to learn more about our programs, schedule a demonstration, or enroll in our classes. Let’s work together to turn your aspirations into achievements.</p>
            <Button btn-text="Get Started Today" :isArrow="true" />
        </div>
    </div>
</template>