import React, { Component } from 'react';
import Container from './Container/Container';
import ContactsList from './ContactsList';
import Phonebook from './Phonebook';

class App extends Component {
  state = {
    contacts: [],
  };

  onFormSubmit = data => {
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  render() {
    return (
      <Container>
        <h2>Phonebook</h2>

        <Phonebook onSubmit={this.onFormSubmit} />

        <h3>Contacts</h3>

        <ContactsList contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
