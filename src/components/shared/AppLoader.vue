<template>
    <div class="app_loader position-fixed d-flex justify-content-center align-items-center"
        v-if="$store.state.loader"
        >
        <div class="spinner"></div> <span class="text-white ml-2">Loading...</span>
    </div>
</template>