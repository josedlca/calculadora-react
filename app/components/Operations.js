import React from 'react'
import Igual from './Igual'

class Operations extends React.Component{
    constructor(props) {
        super(props);
        this.state = {theOperation: ''};
    
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(x) {
        this.setState({theOperation: x});
      }
    render() {
        let digiteOne = parseInt(this.props.theValues.sideOne) 
        let digiteTwo = parseInt(this.props.theValues.sideTwo )

        return (
            <div>
                <button onClick={()=>this.handleClick('suma')}>+</button>
                <button onClick={()=>this.handleClick('resta')}>-</button>
                <button onClick={()=>this.handleClick('multi')}>*</button>
                <button onClick={()=>this.handleClick('div')}>/</button>
                <Igual theNumbers = {{
                        numOne : digiteOne,
                        numTwo : digiteTwo
                        }}
                        whatOperation = {this.state.theOperation}
                />
            </div>
        )
    }
}

export default Operations