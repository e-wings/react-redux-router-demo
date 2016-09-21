/**
 * 引入Redux和react-redux, 仅需要改动入口js:main.js,和容器: App.js.
 * main.js中新建整个程序唯一的store, 并绑定到App组件
 * App组件(本文件)中实现从全局state中引入自己需要的部分
 *
 * 理论上可以将没个组件都connect到store, 但尽量只connect最顶层的组件
 * 否则数据难以追踪
 */
import Header from '../component/header.jsx'
import React, {Component,} from 'react'
// 4) 引入connect
import {connect} from 'react-redux'
import {
  counterAdd,counterReduce
} from '../actions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 7) 在第6步调用 connect()后, 已经可以使用this.props.dispatch 和 this.props.star
    // 下方写法纯属蛋疼
    const {
      dispatch,
      Counter,
    } = this.props
    //遍历this.props.children, 并注入props
    var childrenWithProps = React.Children.map(this.props.children, (child) => {
        var tmpData = {};
        switch (child.type.name) {
          case "Home":
            tmpData = {
              counter:Counter,
              counterAdd:()=>dispatch(counterAdd()),
              counterReduce:()=>dispatch(counterReduce()),
            }
            break;
          case "AnotherPage":
            tmpData = {
              counterAdd:()=>dispatch(counterAdd()),
              counterReduce:()=>dispatch(counterReduce()),
            }
            break;
        }
        return React.cloneElement(child, tmpData);
      }
    );
    return (
      <div>
        <Header Counter={this.props.Counter}/>
        <div className="content">
          {childrenWithProps}
        </div>
      </div>
    )
  }
}

App.childContextTypes = {
  color: React.PropTypes.string,
  stars: React.PropTypes.isRequired,
};


// 5) 基于全局 state ，得到那些我们需要的state
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
function select(state) {
  return {
    Counter: state.Counter,
  }
}

// 6) 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
// 任何一个从 connect() 包装好的组件都可以得到一个 dispatch 方法作为组件的 props，以及得到全局 state 中所需的任何内容
export default connect(select)(App)