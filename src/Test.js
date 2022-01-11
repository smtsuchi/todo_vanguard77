import React, { Component } from 'react'

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            init: 10,
            pokemon: {}
        }
    }


    getData = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const data = await res.json()
        return data
      }

    componentDidMount () {
        const data = this.getData()
        this.setState = {
            pokemon : data
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
