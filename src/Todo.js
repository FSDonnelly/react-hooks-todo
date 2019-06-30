import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import useToggle from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggle(false)
    return (
        <ListItem>
            {isEditing ? <EditTodoForm
                editTodo={editTodo}
                id={id}
                task={task}
                toggleEditForm={toggle}
            /> :
                (
                    <>
                        <Checkbox
                            checked={completed}
                            tabIndex={-1}
                            onClick={() => toggleTodo(id)}
                        />
                        <ListItemText
                            style={{ textDecoration: completed ? "line-through" : "none" }}
                        >
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton
                                aria-label="Edit"
                                onClick={toggle}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Delete"
                                onClick={() => removeTodo(id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                )}
        </ListItem>
    )
};
export default Todo;