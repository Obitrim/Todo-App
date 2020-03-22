<template>
    <div class="tasks_view">

        <!-- banner -->
        <header class="text-white py-4 px-2 banner bg_primary">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <a href="#" class="text-white p-1" @click.prevent="$router.go(-1)">
                            <i class="fa fa-arrow-left"></i>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <div class="text-center py-4 banner_top">
                            <h1>{{ this.$route.params.category }}</h1>
                        </div>
                        <div class="d-flex justify-content-between align-items-baseline banner_bottom">
                            <span>Today</span>
                            <modal-trigger 
                                class="btn btn-light" 
                                modalId="new_task_modal" 
                                text="Add Task"
                                >
                                <i class="fa fa-plus"></i>
                            </modal-trigger>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- tasks -->
        <main class="py-4">
            <div v-if="emptyListByCurrentCategory" class="text-center my-5"><h4>No Tasks  Found</h4></div>
            <div class="container" v-else>
                <div class="row" v-for="(task, index) in tasks" :key="index">
                    <div class="col-md-10 offset-md-1 mb-3">
                        <div class="bg-white p-4 d-flex task_item">
                            <i class="fa fa-cog mr-3" style="font-size: 24px;"></i>
                            <div style="flex: 1;">
                                <p class="mb-0">{{ task.title }}</p>
                                <small class="text-muted font-italic">Created on: {{ task.createdAt }}</small>
                            </div>
                            <div class="align-self-end ml-3">
                                <a href="#">
                                    <i class="fa fa-edit text-success mr-2"></i>
                                </a>
                                <a href="#" @click.prevent="deleteTask(task.docId)">
                                    <i class="fa fa-trash text-danger"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-3">
                <modal-trigger 
                    class="btn btn-primary mx-auto py-2 px-3" 
                    modalId="new_task_modal" 
                    text="Add Task"
                    >
                    <i class="fa fa-plus"></i>
                </modal-trigger>
            </div>
        </main>

        <!-- create task modal -->
        <create-task-modal  
            modalId="new_task_modal"
            @create="createTask"
            />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CreateTaskModal from '@/components/modals/CreateTaskModal.vue';

export default {
    components: {
        CreateTaskModal
    },

    computed: {
        ...mapGetters({
            tasks: 'getTasksByCategory'
        }),

        /**
         * Checks for empty list in current list category
         * 
         */
        emptyListByCurrentCategory(){
            return this.tasks.length === 0;
        }
    },

    methods: {
        /**
         * Gets the current list categories
         * 
         * @returns {String} the current list category
         */
        currentCategory(){
            return this.$route.params.category;
        },

        /**
         * Adds a new Task to existing ones
         * 
         * @returns {undefined}
         */
        createTask( taskTitle ){
            this.$store.dispatch('createTask', {
                title: taskTitle,
                done: false,
                createdAt: new Date(),
                category: this.currentCategory()
            });
        },

        deleteTask(id){
            this.$store.dispatch('deleteTask', id);
        }
    },

    created(){
        this.$store.commit('setCategory', this.currentCategory());
        this.$store.dispatch('fetchCreatedTasks');
    }
};
</script>