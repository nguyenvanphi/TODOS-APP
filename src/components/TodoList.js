import React, { memo } from 'react'
import Todo from './Todo'
import {connect} from 'react-redux'

const TodoList = memo(props => {
    const { listTodos, checkAll, isCheckedAll } = props
    return (
        <section className="main">
            <input
                className="toggle-all"
                type="checkbox"
                onChange={() => {
                    console.log('mmark done')
                    checkAll()
                }}
                checked={isCheckedAll}
            />
            <label htmlFor="toggle-all" onClick={checkAll} ></label>
            <ul className="todo-list">
                {
                    listTodos.map((todo, index) => <Todo index={index} key={todo.id} todo={todo} {...props} />)
                }
            </ul>

        </section>
    )
})

const mapStateToProps = (state) => {
    return {
        listTodos: state.todos.listTodos
    }
}
export default connect(mapStateToProps)(TodoList)