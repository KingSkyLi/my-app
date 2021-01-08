import React, { Component } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
export default class layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div>
                <Header />
                {children.content}
                {children.txt}
                <Footer />
            </div>
            
        )
    }
}
