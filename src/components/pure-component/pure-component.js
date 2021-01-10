import React, { PureComponent } from 'react'


export default class pureComp extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            obj:{num:0}
        }
        
    }
    setCount = ()=>{
        this.setState({count:100})
    }
    // 性能优化避免不断刷新（component）,或者是利用pureComponent[但是只能用于class组件，只能浅比较]
    // shouldComponentUpdate(nextProps,nextState){
    //     return  !(nextState.count === this.state.count)
    // }
    render() {
        console.log(123)
        const {count} = this.state
        return (
            <div>
                <button onClick={this.setCount}>{count}</button>
            </div>
        )
    }
}
