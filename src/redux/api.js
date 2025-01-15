import { legacy_createStore } from "redux"

export const create = (lists) => {
    return {
        type: 'createApi',
        payload: lists
    }
}

export const apiReducer = (state = [], action) => {
    console.log('reducer[state]===', state)
    console.log('reducer[action]===', action)
    switch (action.type) {
        case 'createApi':
            console.log('상태변경 호출 됨')
            return state = action.payload
        default:
            console.log('상태보기 호출 됨')
            return state;
    }
}

export const store = legacy_createStore(apiReducer)