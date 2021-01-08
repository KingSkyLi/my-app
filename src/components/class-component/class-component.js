import React, { Component } from 'react'

export default class classComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    // 组件挂载完成
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    // 组件卸载之前
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        const { date } = this.state
        return (
            <div>
                <h1>Hello  World</h1>
                <h2>{ date.toLocaleTimeString() }</h2>
            </div>
        )
    }
}
