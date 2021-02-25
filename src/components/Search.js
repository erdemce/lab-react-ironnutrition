import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <input
                className="searchbar"
                onChange={this.props.handleChange}
                type="text"
                placeholder="enter search term" />
        )
    }
}