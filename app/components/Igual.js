import React from 'react'

class Igual extends React.Component{
    render() {
        var oneSide = this.props.theNumbers.numOne
        var twoSide = this.props.theNumbers.numTwo
        var theOperation = this.props.whatOperation

        function executeOperation(){
            if(theOperation == 'suma'){
                var resultado = oneSide + twoSide
                console.log(resultado)
                // return this.state.operationArr.push(`${oneSide} + ${twoSide} = ${resultado}`)
            }else if(theOperation == 'resta'){
                var resultado = oneSide - twoSide
                console.log(resultado)
            }else if(theOperation == 'multi'){
                var resultado = oneSide * twoSide
                console.log(resultado)
            }else{
                var resultado = oneSide / twoSide
                console.log(resultado)
            }
        }
        return (
            <div>
                <button onClick = {executeOperation}>=</button>
                {/* <div>{operationArr.length}</div> */}
            </div>
        )
    }
}

export default Igual