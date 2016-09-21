import React from 'react'
import ReactDOM from 'react-dom';
import routes from './routes';
import {Router, hashHistory} from 'react-router'
import {counterInit} from './actions'

// 1)引入包
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import starApp from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

// 2)新建store
let store = createStore(
  starApp,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  ))
let rootElement = document.getElementById('app')

// 3) 将App绑定到store
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}>
    </Router>
  </Provider>, rootElement
)

//第一次发出action,比如获取用户资料
store.dispatch(counterInit())