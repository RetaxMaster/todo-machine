import React from "react";
import { useNavigate } from "react-router-dom";
import "./TodoForm.css";

function TodoForm(props) {

    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || "");

    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        navigate("/");
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate("/");
    }

    return(
        <form
            onSubmit={onSubmit}
        >
            <label>{props.label}</label>
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
                    {props.submitText}
                </button>
            </div>
        </form>
    );
}

export { TodoForm };