const tasks = [
    { id: 1, user_id: 1, completed: true },
    { id: 2, user_id: 2, completed: false },
    { id: 3, user_id: 1, completed: true },
    { id: 4, user_id: 3, completed: false },
    { id: 5, user_id: 1, completed: false },
    { id: 6, user_id: 2, completed: true },
];

function countTasksCompletedByUserId(tasksArray) {
    const result = {};
    tasksArray.forEach(task => {
        if (task.completed) {
            if (result[task.user_id]) {
                result[task.user_id]++;
            } else {
                result[task.user_id] = 1;
            }
        }
    });
    return result;
}

console.log(countTasksCompletedByUserId(tasks));
