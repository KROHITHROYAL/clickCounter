// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component{
    state{
        count = 0
    }


onIncrementCount = () =>{
    this.setState(prevState => ({count: prevState.count+1}))
}

render(){
    const {count} = this.state

    return(
        <div className="counterContainer">
            <h1 className="counterHeading">
            The Button has been clicked
             <br  /> <span className="counter-value">{count}</span>
             times</h1>

            <p className="description">Click the Button to Increase the Count !</p>
            <div>
            <button 
            className="button"
            type="button"
            onClick={this.onIncrementCount}>
            Click Me!
            </button>
        </div>
        </div>
    )
}
}
export default ClickCounter