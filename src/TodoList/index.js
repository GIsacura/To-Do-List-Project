import React from 'react';
import './TodoList.css'

function TodoList(props) {

  const renderFunc = props.children || props.render

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchTodos(props.searchText)}
      {(!props.loading && !props.error) && props.searchedTodos.map(todo => renderFunc(todo))} {/*Aca validamos que solamente si no esta el loading activo o el error, es que puede mostrar los todos*/}
    </section>
  );
}

export { TodoList };
