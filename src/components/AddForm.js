import React, { Component } from 'react'

export default class AddForm extends Component {
    render() {
        return (
            <form className="field is-grouped is-grouped-multiline" onSubmit={this.props.onSubmit}>
                <input name="name" type="text" placeholder="enter food name" />
                <input name="calories" type="number" placeholder="enter calories" min="1" />
                <input name="image" type="text" placeholder="enter image URL" />
                <button className="button is-success" type="submit">Submit</button>
            </form>
        )
    }
}