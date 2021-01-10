import React, { Component } from 'react'
import Layout from '../layout/layout'
import store from "../../store/index"
export default class homePage extends Component {
    componentDidMount(){
        store.subscribe(()=>{
            this.forceUpdate()
        })
    }
    render() {
        return (
            <Layout>
                {
                    {
                        content:(
                            <div>
                                Home-Page
                                <p>{store.getState()}</p>
                                <button onClick={()=>store.dispatch({type:'ADD'})}>ADD</button>
                            </div>
                        ),
                        txt:'这是一个文本'
                    }
                }
            </Layout>
        )
    }
}
