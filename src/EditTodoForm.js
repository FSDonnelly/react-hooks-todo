import React from 'react';
import Textfield from '@material-ui/core/Textfield';

import useInputState from './hooks/useInputState';

function EditTodoForm({ editTodo, id, task, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
            }}
        >
            <Textfield
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
            />
        </form>
    )
}
export default EditTodoForm;