import { db } from '@/main.js';

export default {
    /**
     * Fetches all tasks created by a specific user
     * 
     * @param {String} userId id of logged in user
     * @returns {undefined}
     */
    getTasksCreatedByUserWithId(userId) {
        return new Promise((resolve, reject) => {
            db.collection('tasks').get().then(snapShot => {
                if (!snapShot.empty) {
                    let tasks = [];

                    snapShot.forEach(doc => {
                        let task = doc.data();
                        task.docId = doc.id;
                        task.createdAt = task.createdAt.toDate().toDateString();
                        tasks.push(task);
                    })
                    resolve(tasks);
                } else {
                    reject({ emptyList: true });
                }
            }).catch(error => console.log(error));
        });
    },

    /**
     * Attempts to create a new task
     * 
     * @param {Object} task new task object
     * @returns {undefined}
     */
    createTask(task){
        return new Promise((resolve, reject) => {
            db.collection('tasks').add(task)
                .then(doc => resolve(doc))
                .catch(err => reject(err))
        })
    },

    /**
     * Attempts to delete a task with a specific id
     * 
     * @param {String} id id of task to delete
     * @returns {undefined}
     */
    removeTaskWithId(id) {
        return new Promise((resolve, reject) => {
            db.collection('tasks').doc(id)
                .delete()
                .then(() => resolve({ success: true}))
                .catch(err => reject(err));
        });
    }
};