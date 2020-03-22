import TaskService from '@/services/tasks.js';

export default {
    /**
     * Gets all tasks created by a specific user
     * 
     */
    fetchCreatedTasks: ({ commit }) => {
        commit('showLoader');
        TaskService.getTasksCreatedByUserWithId().then(tasks => {
            commit('showLoader', false);
            commit('setTasks', tasks);
        }).catch(error => {
            if(error.emptyList){
                commit('showLoader', false);
            }
        });
    },

    /**
     * Attempts to create a new task
     * 
     * @param {Object} task new task to create
     * @returns {undefined}
     */
    createTask: ({ dispatch }, task) => {
        TaskService.createTask(task).then(() => {
            dispatch('fetchCreatedTasks');
        });
    },

    /**
     * Attempts to delete a task
     * 
     * @param {Object} task new task to create
     * @returns {undefined}
     */
    deleteTask: ({dispatch}, id) => {
        TaskService.removeTaskWithId(id)
            .then(res => {
                if( res.success){
                    dispatch('fetchCreatedTasks');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
};