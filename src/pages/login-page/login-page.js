import React, { Component } from 'react'
import { connect } from "react-redux"
// 把数据映射到Props上,mapStateToProps
// 把dispatch映射到props,mapDispatchToProps  
const loginView = connect(
    state => ({num:state}),
    {
        minus:()=>{
           return {
               type:'MINUS'
           }
        }
    }
)(
    class loginView extends Component {
        render() {
            const {num,minus} = this.props
            return (
                <div>
                    loginView
                    <p>{num}</p>
                    {/* <button onClick={()=>{dispatch({type:'ADD'})}}>ADD</button> */}
                    <button onClick={minus}>MINUS</button>
                </div>
            )
        }
    }
)

export default loginView


