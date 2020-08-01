import React from 'react'
import Operations from './Operations'

class InputNumber extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valueOne: '',
            valueTwo: '',
        };
        this.handleChangeOne = this.handleChangeOne.bind(this);
        this.handleChangeTwo = this.handleChangeTwo.bind(this);
    }
    handleChangeOne(event){
        this.setState({valueOne: event.target.value});
    }
    handleChangeTwo(event){
        this.setState({valueTwo: event.target.value});
    }
   
    render() {
        return (
            <div>
                <input type="number" value={this.state.valueOne} onChange={this.handleChangeOne}/>
                <br/>
                <div>{this.state.valueOne}</div>
                <input type="number"  value={this.state.valueTwo} onChange={this.handleChangeTwo}/>
                <div>{this.state.valueTwo}</div>
                <Operations theValues = {{
                    sideOne: this.state.valueOne,
                    sideTwo: this.state.valueTwo,
                }}/>
            </div>
        )
    }
}

export default InputNumber