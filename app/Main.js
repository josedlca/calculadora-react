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
                <input type = 'text' placeholder = 'Value One' value = {this.state.valOne} onChange = {this.handleChangeOne}/>
                <input type = 'text' placeholder = 'Value Two' value = {this.state.valTwo} onChange = {this.handleChangeTwo}/>
            </form>
        )
    }
}

class Operation extends React.Component{
    handleChange(operator){
        this.props.onSubmit(operator)
    }
    render(){
        let operators = ['+', '-', 'x', '/']
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
        this.handleState = this.handleState.bind(this)
    }

    handleState(allResult){
        // otra forma de hacerlo
        // var test = this.state.resultados
        // test.push(allResult)
        // this.setState({
        //     resultados: test
        // })
        // otra forma de hacerlo
        this.setState(state =>{
            const resultados = state.resultados.concat(allResult)
            return {resultados}                    
        })
    }

    operando(op){
        var allResult
        var valOne = parseInt(this.props.valueOne)
        var valTwo = parseInt(this.props.valueTwo)
        switch(op){
            case '+':
                allResult =`${valOne} + ${valTwo} = ${valOne + valTwo}`
                this.handleState(allResult)
                break
            case '-':
                allResult =`${valOne} - ${valTwo} = ${valOne - valTwo}`
                this.handleState(allResult)
                break
            case 'x':
                allResult =`${valOne} x ${valTwo} = ${valOne * valTwo}`
                this.handleState(allResult)
                break
            default:
                allResult =`${valOne} / ${valTwo} = ${valOne / valTwo}`
                this.handleState(allResult)
        }
    }

    render(){
        const {resultados} = this.state
        return(
            <div className = "igual-container">
                <button className = 'igual' onClick = {() => this.operando(this.props.theOperation)}> = </button>
                <h3>Operaciones realizadas: {resultados.length}</h3>
                <ul>
                    {resultados.map((res,index)=>(
                        <li key = {index}>{res}</li>
                    ))}
                </ul>
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
            <div className = 'container'>
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
            </div>
        )
    }
}

export default Main