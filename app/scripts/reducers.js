import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {COUNTER_INIT,COUNTER_ADD,COUNTER_REDUCE,FORM_CHANGE} from './actions'

function Counter(state = {}, action) {
  switch (action.type) {
    case COUNTER_INIT:
      return Object.assign({}, state, {times: 1})
    case COUNTER_ADD:
      return Object.assign({}, state, {times: state.times+1})
    case COUNTER_REDUCE:
      if(state.times>0)
        return Object.assign({}, state, {times: state.times-1})
      else
        return state
    default:
      return state
  }
  return state
}

//自定义action触发表单state内容修改
var form = formReducer.plugin({
  reward: (state = {}, action) => {
    switch (action.type) {
      case FORM_CHANGE:
        return Object.assign({}, state, {values: action.reward})
      default:
        return state
    }
  },
})

const starApp = combineReducers({
  Counter,
  form,
})

export default starApp