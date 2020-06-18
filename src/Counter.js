import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {MyContext} from './App';

class Counter extends Component
{

    state = {
        counter : 0
    };

    handleIncrement = () =>{
        this.setState({
            counter : this.state.counter + 1
        });
    };
    handleDecrement = () =>{
        this.setState({
            counter : this.state.counter - 1
        });
    };

    render()
    {
        return (
            <div>
                <MyContext.Consumer>
                {value => <h2>Counter = <span style={{color: value.color}}>{this.state.counter}</span></h2>
                }
                </MyContext.Consumer>
                <Button variant="contained" color="primary" onClick={this.handleIncrement} style={{marginRight:'1%'}}>+</Button>
                <Button variant="contained" color="secondary" onClick={this.handleDecrement}>-</Button>
                <div>
                    <ul>
                    <MyContext.Consumer>
                        {value =>{
                            return value.items.map(item =>{
                                return (
                                   <div className="card"  style={{marginTop : "2%"}} key = {item.id}>
                                       <div class="card-body">
                                       <h3 className = "badge badge-primary text-wrap card-title">{item.title}</h3>
                                       <p className="card-subtitle mb-2 text-muted">{item.title}</p>
                                       </div>
                                   </div>
                                );
                            })
                        }}
                    </MyContext.Consumer>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Counter;

