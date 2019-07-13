import uuid from 'uuid/v4';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuid(), task: action.task, completed: false }];
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case "EDIT":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
            );
        default:
            return state;
    }
};
export default reducer;

// addTodo: newTodoText => {
//     setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
// },
// removeTodo: todoId => {
//     const updatedTodos = todos.filter(todo => todo.id !== todoId);
//     setTodos(updatedTodos);
// },
// toggleTodo: todoId => {
//     const updatedTodos = todos.map(todo =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
// },
// editTodo: (todoId, newTask) => {
//     const updatedTodos = todos.map(todo =>
//         todo.id === todoId ? { ...todo, task: newTask } : todo
//     );
//     setTodos(updatedTodos);
// }