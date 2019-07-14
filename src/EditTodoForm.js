import React, { useContext } from 'react';
import Textfield from '@material-ui/core/Textfield';

import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
    const dispatch = useContext(DispatchContext)
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: "EDIT", id, newTask: value });
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