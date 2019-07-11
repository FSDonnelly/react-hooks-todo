import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/Textfield';

import useInputState from './hooks/useInputState';
import { TodosContext } from './context/todos.context';

function TodoForm() {
    const [value, handleChange, reset] = useInputState("");
    const { addTodo } = useContext(TodosContext);
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <Textfield
                    value={value}
                    onChange={handleChange}
                    margin="normal"
                    label="Add New Todo"
                    fullWidth
                />
            </form>
        </Paper>
    )
}
export default TodoForm;