import React, { Component } from 'react';
import Twitter from './Twitter'

class App extends Component {

    render() {

        const posts = [
            {
                title: 'ReactJs',
                description: 'Ciclo de vida do reactJs'
            },
            {
                title: 'xpto',
                description: 'xpto fluxo'
            }
        ]

        return (
            <Twitter  posts={posts}/>
        )
    }
}

export default App;