<template>
    <div class="modal fade" :id="modalId" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3  pt-5">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modalId: {
            type: String,
            required: true
        }
    }
};
</script>