<template>
    <modal :modalId="modalId">
        <template>
            <div class="form-group my-0 text_primary">
                <input 
                    type="text" 
                    class="base_input" 
                    id="new_category_input" 
                    style="color: black;" 
                    v-model="newTask"
                    required/>
                <label for="new_category_input">Task Title</label>
                <error-label v-if="error" class="text-white mt-2">{{ error }}</error-label>
            </div>
            <div class="form-group text-right">
                <button class="btn btn-outline-danger mr-2" data-dismiss="modal">
                    Cancel
                </button>
                <button 
                    class="btn btn-primary bg_primary btn_create"
                    @click="createTask"
                    >
                    Add Task
                </button>
            </div>
        </template>
    </modal>
</template>

<script>
import Modal from '@/components/layouts/ModalLayout.vue';

export default {
    components: { 
        Modal
    },

    props: {
        modalId: {
            type: String,
            required: true
        }
    },

    data(){
        return {
            error: '',
            newTask: "",
        }
    },

    methods: {
        createTask(){
            if(this.newTask.trim().length === 0){
                this.error = 'Please enter task description';
            } else {
                this.error = '';
                this.$emit('create', this.newTask);
                this.newTask = "";
            }
        }
    },
};
</script>