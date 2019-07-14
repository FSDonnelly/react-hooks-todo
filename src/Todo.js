import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import useToggle from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './context/todos.context';

function Todo({ task, completed, id }) {
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggle] = useToggle(false)
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? <EditTodoForm
                id={id}
                task={task}
                toggleEditForm={toggle}
            /> :
                (
                    <>
                        <Checkbox
                            checked={completed}
                            tabIndex={-1}
                            onClick={() => dispatch({ type: "TOGGLE", id })}
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
                                onClick={() => dispatch({ type: "REMOVE", id })}
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