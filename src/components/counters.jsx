import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {   
   
    render() {
        return (
        <div>
        <button
            onClick={this.props.onReset}
            className="btn btn-info btn-sm m-2">
            Resest
        </button>
        {this.props.counters.map(counter=>(
            <Counter 
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            />
          ))
        }    
        </div>
        );
    }
}
export default Counters;