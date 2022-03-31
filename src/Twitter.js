import React, { Component } from 'react';

class Twitter extends Component {

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    const { posts } = this.props;
    
    console.log('componentDidMount', posts)
  }

  render() {

    return (
       <div>
          componentDidMount         
       </div>
    )
  }
}

export default Twitter;