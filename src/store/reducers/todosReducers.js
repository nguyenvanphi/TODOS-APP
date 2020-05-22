import {ADD_TODO} from './../action'

const INITIAL_STATE = {
    listTodos: [],
    isCheckedAll: false,
    status: 'ALL',
    todoEditingId: ''
}

const todosReducers = (state = INITIAL_STATE, action) => {
    const {listTodos} = state
    const list = JSON.parse(JSON.stringify(listTodos))
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({},state,{
                listTodos: [...list, action.todo]
            })
        default:
            return state
    }
}

export default todosReducers