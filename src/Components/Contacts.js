import React from 'react';
import Contact from './Contact';
import '../Styles/Contacts.scss';

const Contacts = ({ contacts, remove }) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map(contact => (
                <Contact key={contact.id} {...contact} remove={remove}/>
            ))}
        </tbody>
    </table>
)

export default Contacts;