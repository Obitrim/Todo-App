export default {
    /**
     * Gets all tasks of a particular 
     * category
     * 
     * @param {Object} state vuex's state object
     */
    getTasksByCategory: state => {
        if(state.category){
            return state.tasks.filter(task => {
                return task.category.trim().toLowerCase() === state.category.trim().toLowerCase();
            });
        }

        console.error("Categories can't be null");
    }
};