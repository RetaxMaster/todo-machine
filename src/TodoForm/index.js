import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
        addTodo,
        setOpenedModal,
    } = React.useContext(TodoContext);

    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenedModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue("");
        setOpenedModal(false);
    }

    return(
        <form
            onSubmit={onSubmit}
        >
            <label>Agrega un nuevo TODO</label>
            <textarea
                onChange={onWrite}
                value={newTodoValue}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };