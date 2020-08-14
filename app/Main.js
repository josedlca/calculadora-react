import React from 'react'

class ValueInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            valOne : '',
            valTwo : ''
        }

        this.handleChangeOne = this.handleChangeOne.bind(this)
        this.handleChangeTwo = this.handleChangeTwo.bind(this)
    }

    handleChangeOne(e){
        this.setState({
            valOne : e.target.value,
        })

        this.props.valueOne(e.target.value)
    }
    handleChangeTwo(e){
        this.setState({
            valTwo : e.target.value,
        })

        this.props.valueTwo(e.target.value)
    }

    render(){
        return(
            <form>
                <input type = 'number' placeholder = 'Value One' value = {this.state.valOne} onChange = {this.handleChangeOne}/>
                <input type = 'number' placeholder = 'Value Two' value = {this.state.valTwo} onChange = {this.handleChangeTwo}/>
            </form>
        )
    }
}

class Operation extends React.Component{
    handleChange(operator){
        this.props.onSubmit(operator)
    }
    render(){
        let operators = ['+', '-', '*', '/']
        return(
            <ul>
                {operators.map((operator) => (
                    <li key = {operator}>
                        <button onClick = {()=>this.handleChange(operator)}>{operator}</button>
                    </li>
                ))}
            </ul>
        )
    }
}

class Igual extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            resultados : []
        }
        this.operando = this.operando.bind(this)
    }

    operando(op){
        switch(op){
            case op === '+':
                console.log(op)
                allResult =`${parseInt(this.props.valueOne)} + ${parseInt(this.props.valueTwo)} = ${parseInt(this.props.valueOne) + parseInt(this.props.valueTwo)}`
        }
        return console.log(op)
    }

    render(){
        return(
            <div>
                <button
                    onClick = {() => this.operando(this.props.theOperation)}
                >
                    =
                </button>
                {/* <div>{typeof(this.props.valueOne)}</div>
                <div>{this.props.valueTwo}</div>
                <div>{this.props.theOperation}</div>
                <div>{this.state.resultados}</div> */}
            </div>
        )
    }
}

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            theOperation : null,
            valueOneHere : null,
            valueTwoHere : null
        }

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(theState , theOperator){
        this.setState({
            [theState] : theOperator
        })
    }

    hereIsTheValueOne(nameValue, theValueOne){
        this.setState({
            [nameValue]:theValueOne
        })
    }
    hereIsTheValueTwo(nameValue, theValueTwo){
        this.setState({
            [nameValue]:theValueTwo
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Calculadora</h1>
                <ValueInput 
                    valueOne = {(valOne) => this.hereIsTheValueOne('valueOneHere', valOne)}
                    valueTwo = {(valTwo) => this.hereIsTheValueOne('valueTwoHere', valTwo)}
                />
                <Operation 
                    onSubmit = {(operator) => this.handleChange('theOperation', operator)}
                />
                <Igual 
                    valueOne = {this.state.valueOneHere}
                    valueTwo = {this.state.valueTwoHere}
                    theOperation = {this.state.theOperation}
                />
            </React.Fragment>
        )
    }
}

export default Main