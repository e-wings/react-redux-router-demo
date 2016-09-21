/*
 * action 类型
 * 全局统一使用,以避免拼写错误.
 */
export const FORM_CHANGE = "FORM_CHANGE"

/*
 * action 创建函数
 */
export const COUNTER_INIT = "COUNTER_INIT"
export function counterInit() {
  return function (dispatch) {
    dispatch({type: COUNTER_INIT})
  }
}

export const COUNTER_ADD = "COUNTER_ADD"
export function counterAdd() {
  return function (dispatch) {
    dispatch({type: COUNTER_ADD})
  }
}

export const COUNTER_REDUCE = "COUNTER_REDUCE"
export function counterReduce() {
  return function (dispatch) {
    dispatch({type: COUNTER_REDUCE})
  }
}
