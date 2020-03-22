<template>
    <div class="dashboard">
        <div class="container">
            <header class="py-4">
                <div class="d-flex justify-content-between align-items-start">
                    <a href="#" class="text-dark p-1" @click.prevent="$router.go(-1)">
                        <i class="fa fa-arrow-left"></i>
                    </a>
                    <div>
                        <modal-trigger 
                            class="btn d-none d-sm-inline-block btn_create_category" 
                            modalId="new_category_modal" 
                            text="Add Category"
                            >
                            <i class="fa fa-plus"></i>
                        </modal-trigger>
                        <button class="btn btn-outline-danger ml-2">
                            <i class="fa fa-power-off mr-1"></i>
                            Logout
                        </button>
                    </div>
                </div>
                <div>
                    <h1>All Created Lists</h1>
                    <p>Today's date</p>
                </div>
                
            </header>
            <main>
                <div class="row text-center">
                    <div class="col-6 col-md-4 col-lg-3">
                        <button class="bg-white p-3 my-3 dash" @click="showTasks('personal')">
                            <i class="fa fa-user"></i>
                            <h2 class="my-2">Personal</h2>
                            <small>13 tasks</small>
                        </button>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <button class="bg-white p-3 my-3 dash" @click="showTasks('work')">
                            <i class="fa fa-user"></i>
                            <h2 class="my-2">Work</h2>
                            <small>16 tasks</small>
                        </button>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <button class="bg-white p-3 my-3 dash" @click="showTasks('meet')">
                            <i class="fa fa-users"></i>
                            <h2 class="my-2">Meet</h2>
                            <small>20 tasks</small>
                        </button>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <button class="bg-white p-3 my-3 dash" @click="showTasks('free-time')">
                            <i class="fa fa-user"></i>
                            <h2 class="my-2">Free Time</h2>
                            <small>14 tasks</small>
                        </button>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <div class="bg-white my-3">
                            <modal-trigger 
                                class="w-100 h-100 py-4 px-2 p-sm-4 btn dash_btn" 
                                modalId="new_category_modal" 
                                text="Add New Category"
                                >
                                <i class="fa fa-plus"></i>
                            </modal-trigger>
                        </div>
                    </div>
                </div>

                <!-- new category modal -->
                <div class="modal fade" id="new_category_modal" aria-hidden="true" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content p-3  pt-5">
                            <div class="form-group my-0 text_primary">
                                <input type="text" class="base_input" id="new_category_input" style="color: black;" required/>
                                <label for="new_category_input">Category title</label>
                            </div>
                            <div class="form-group text-right">
                                <button class="btn btn-primary bg_primary btn_create">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        showTasks(category){
            this.$router.push({ name: 'tasks', params: { category } });
        }
    },
};
</script>