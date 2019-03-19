<<<<<<< HEAD
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
=======
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
     }
    render() { 
        return ( <div>
            {this.state.counters.map(counter => 
            <Counter key={counter.id} value={counter.value} />)}
            <h4>Title</h4>
            <Counter/>
        </div> );
    }
}
 
export default Counters;
>>>>>>> 6cbf6fa6b8c1943b122e976eccdb2e651c5d1166
