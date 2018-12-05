import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import ContactForm from './Components/ContactForm';
import './Styles/App.scss';

class App extends Component {
  state = {
    contacts: [
      {id: 1, name: "Cosmo", phone: "801-121-5656"},      
      {id: 2, name: "George", phone: "626-567-1872"},      
      {id: 3, name: "Jerry", phone: "802-561-1311"},      
    ]
  }

  componentDidMount() {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    })
  }

  deleteContact = (id) => {
    const {contacts} = this.state;
    this.setState({
      contacts: contacts.filter(contact => {
        return contact.id !== id
      })
    })
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  addContact= (name, phone) => {
    let {contacts} = this.state
    let contact = { name, id: this.getUniqId(), phone};
      this.setState({
        contacts: [contact, ...contacts].sort((a, b) => a.name.localeCompare(b.name))
    })
  }

  
  render() {
    const { contacts } = this.state

    return (
      <div className="container">
        <h1>React Contact List</h1>
        <ContactForm  add={this.addContact}/>
        <Contacts contacts={contacts} remove={this.deleteContact} />
      </div>
    );
  }
}

export default App;
