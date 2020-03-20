<template>
    <div class="dashboard">
        <header class="d-flex justify-content-between align-items-start py-4">
            <div>
                <h1>All Created Lists</h1>
                <p>Today's date</p>
            </div>
            <button class="btn btn_create_category" data-toggle="modal" data-target="#new_category_modal">
                <i class="fa fa-plus"></i>
                Create Category
            </button>
        </header>
        <main>
            <div class="row text-center">
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="bg-white p-3 my-3 dash">
                        <i class="fa fa-user"></i>
                        <h2 class="my-2">Personal</h2>
                        <small>13 tasks</small>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="bg-white p-3 my-3 dash">
                        <i class="fa fa-user"></i>
                        <h2 class="my-2">Work</h2>
                        <small>16 tasks</small>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="bg-white p-3 my-3 dash">
                        <i class="fa fa-users"></i>
                        <h2 class="my-2">Meet</h2>
                        <small>20 tasks</small>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="bg-white p-3 my-3 dash">
                        <i class="fa fa-user"></i>
                        <h2 class="my-2">Free Time</h2>
                        <small>14 tasks</small>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="bg-white my-3">
                        <button class="w-100 h-100 p-4 btn dash_btn" data-toggle="modal" data-target="#new_category_modal">
                            <i class="fa fa-plus"></i>
                            Create New Category
                        </button>
                    </div>
                </div>
            </div>

            <!-- new category modal -->
            <div class="modal fade" id="new_category_modal" aria-hidden="true" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content p-3  pt-5">
                        <div class="form-group my-0 text_primary">
                            <input type="text" class="base_input" id="new_category_input" style="color: inherit;"/>
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
</template>