import React from 'react';
import { useTodos } from './useTodos';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import {TodoHeader} from '../TodoHeader'
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { EmptySearchTodos } from '../EmptySearchTodos';
import { ChangeAlert } from '../ChangeAlert';


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    sincronizeTodos
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader loading = {loading}>
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
        error = {error}
        loading = {loading}
        searchedTodos = {searchedTodos}
        searchText = {searchValue}
        totalTodos = {totalTodos}
        onError = {() => <TodosError/>}
        onLoading = {() => <TodosLoading/>}
        onEmptyTodos = {() => <EmptyTodos/>}
        onEmptySearchTodos = {(text) => <EmptySearchTodos
          searchText = {text}
        />}
        // render = {todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // ) }
      >
      {/* Aca es una render function */}
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize = {sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;
