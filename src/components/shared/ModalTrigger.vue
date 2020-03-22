<template>
    <button data-toggle="modal" :data-target="`#${modalId}`">
        <slot />
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'button'
        },

        modalId: {
            type: String,
            required: true
        }
    }
};
</script>