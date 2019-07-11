import React, { useContext } from 'react';
import Textfield from '@material-ui/core/Textfield';

import useInputState from './hooks/useInputState';
import { TodosContext } from './context/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
    const { editTodo } = useContext(TodosContext)
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
            }}
            style={{
                marginLeft: "1rem",
                width: "50%"
            }}
        >
            <Textfield
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}
export default EditTodoForm;