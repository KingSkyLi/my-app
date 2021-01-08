import React, { Component } from 'react'
import Layout from '../layout/layout'
export default class homePage extends Component {
    render() {
        return (
            <Layout>
                {
                    {
                        content:(
                            <div>
                                Home-Page
                            </div>
                        ),
                        txt:'这是一个文本'
                    }
                }
            </Layout>
        )
    }
}
