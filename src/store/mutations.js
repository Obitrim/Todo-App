export default {
    /**
     * Adds a new task to tasks
     * 
     * @param {Object} state
     * @param {Object} task new task to add
     */
    addTask: (state, task) => {
        state.tasks.push(task);
    },

    /**
     * Sets the list category
     * 
     * @param {Object} state  
     * @param {String} category category to set
     */
    setCategory: (state, category) => {
        state.category = category;
    },

    /**
     * sets tasks created by current user
     * 
     * @param {Array} tasks tasks created by user
     */
    setTasks: (state, tasks) => {
        state.tasks = tasks;
    },

    /**
     * Shows or hides app loader
     * 
     * @param {Boolean} show loader visibility state
     */
    showLoader: (state, show = true) => {
        state.loader = show;
    }
};