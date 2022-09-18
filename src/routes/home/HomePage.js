import React from "react";

import { useTodos } from "../useTodos";
import { useNavigate } from "react-router-dom";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { Modal } from "../../ui/Modal";
import { ChangeAlert } from "../../ui/ChangeAlert";

function HomePage(props) {

    const navigate = useNavigate();

    const {
        states,
        stateUpdaters,
    } = useTodos();

    const {
        error, 
        loading, 
        searchedTodos, 
        totalTodos,
        completedTodos,
        // openModal,
        searchValue,
    } = states;
    
    const {
        // setOpenModal,
        completeTodo, 
        // addTodo,
        deleteTodo,
        setSearchValue,
        sincronizeTodos,
    } = stateUpdaters;

    return (
    <React.Fragment>

        <TodoHeader loading={loading}>

            <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

        </TodoHeader>

        <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchText={searchValue}
            onError={() => <TodosError error={error} />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <EmptyTodos />}
            onEmptySearchResults={
                (searchedText) => <p>No hay resultados para {searchedText}</p>
            }
            /* render={todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            )} */
        >

            {todo => (
                <TodoItem 
                key={todo.id} 
                text={todo.text}
                completed={todo.completed}
                onEdit={() => navigate("/edit/" + todo.id)}
                onComplete={() => completeTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
                />
            )}
            
        </TodoList>

        {/* {!!openModal && (
            <Modal>
                <TodoForm
                    addTodo={addTodo}
                    setOpenedModal={setOpenModal}
                />
            </Modal>  
        )}  */}     

        <CreateTodoButton
            onClick={() => navigate("/new")}
            // setOpenModal={setOpenModal}
        />

        <ChangeAlert
            sincronize={sincronizeTodos}
        />
    </React.Fragment>
    );

}

export { HomePage };
