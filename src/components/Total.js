import React, { Component } from 'react'

export default class Total extends Component {
    render() {
        const { todaysFoods } = this.props;

        return (
            <div>
                <ul>
                    {
                        todaysFoods.map((food, index) => {
                            return (
                                <li key={index}>
                                    <button className="button is-danger is-small" onClick={()=>{this.props.onDelete(food.name)}}>Delete</button>
                                    {food.quantity} {food.name} = {food.quantity * food.calories} cal
                                </li>
                            )
                        })
                    }
                </ul>
                <h3>
                    Total:    
                    {
                        todaysFoods.reduce((sum, food) => {
                            return sum + food.calories * food.quantity;
                        }, 0)
                    } cal
                </h3>
            </div>
        )
    }
}