import React from 'react'
import InputNumber from './components/InputNumber'

class Main extends React.Component{
    render() {
        return (
            <React.Fragment>
                <h1>Calculadora</h1>
                <InputNumber/>
            </React.Fragment>
        )
    }
}

export default Main