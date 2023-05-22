import React, { Component } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        { id: 1, title: 'Wine tasting', description: 'Enjoy local Italian wine with a lakeside view' },
        { id: 2, title: 'Visit Duomo di Milano', description: 'Enjoy being a tourist, and get those steps in' },
        { id: 3, title: 'Have coffee at Starbucks Reserve', description: 'Cozy vibes all day' },
      ]
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id);

    this.setState({ ideas: filteredIdeas });
  }

render() {
    return (
      <main className='App'>
        <h1>Ideas for Italy</h1>
        {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2>}
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    )
  }
}

export default App;