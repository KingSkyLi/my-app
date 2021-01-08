import React, { Component } from 'react'

export default class classComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            counter: 0 
        }
    }
    // 组件挂载完成
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
        document.getElementById('test').addEventListener('click',this.setCounter)
    }
    // 组件卸载之前
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    changeValue = (v)=> {
        // setState在合成事件中是异步的，这里说的异步是批量更新
        // setState会被合并，批量最后一起操作，如果想特殊变量不想最后批量执行
        this.setCounter((state)=>{
            return {
                counter: state.counter + v
            }
        })


        this.setState({
            counter: this.state.counter +  v
        },()=>{
            //等setState执行完成之后再执行cb
        })
        console.log(this.state.counter) 
    }
    setCounter = ()=> {
        // 使用setTimeout和addEventListener可以将setState改成“同步的效果”
        this.changeValue(1)
    }
    render() {
        const { date } = this.state
        return (
            <div>
                <h1>Hello  World</h1>
                <h2>{ date.toLocaleTimeString() }</h2>
                <button onClick={this.setCounter}>SetCounter</button>
                <button id='test'>Test</button>
            </div>
        )
    }
}
