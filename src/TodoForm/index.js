import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenedModal }) {

    const [newTodoValue, setNewTodoValue] = React.useState("");

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