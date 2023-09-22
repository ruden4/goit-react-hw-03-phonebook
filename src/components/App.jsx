import React from 'react';
import css from './App.module.css'

import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: ''
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    this.setState({contacts: parsedContacts});
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    };
  };
  
  addToContacts = data => {
    const contact = { ...data, id: nanoid() }; 
    if (
      this.state.contacts
        .map(contact => contact.name.toLowerCase())
        .includes(data.name.toLowerCase())
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  }
  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  filtredContacts = () => {
    const currentFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(currentFilter)
    );
  };
  deleteHandle = e => {
    const deleteName = e.currentTarget.id.toLowerCase();
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name.toLowerCase() !== deleteName),
    }));
  };

  
  render() { 
    console.log('Render Complete')
    return(
    <div className={css.container}>
    <h1 className={css.bookTitle}>Phonebook</h1>
    <ContactForm onSubmit={this.addToContacts}/>
    <h2 className={css.contactsList}>Contacts</h2>

    <Filter handleFilter={this.handleFilter} value={this.state.filter}/>

    {this.state.contacts.length !== 0 && <ContactList contacts={this.filtredContacts()}
    onDelete={this.deleteHandle}/>}     
  </div>
  )
  }
}