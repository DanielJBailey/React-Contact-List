import React, { Component } from 'react';
import '../Styles/ContactForm.scss';

class ContactForm extends Component {
    state = {
        name: "",
        phone: ""
    };

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Call main body function
        this.props.add(this.state.name, this.state.phone);
        // Reset form inputs on submit
        this.setState({
            name: "",
            phone: ""
        })
    }

    render() {
        const { name, phone } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    className="input" 
                    value={name} 
                    onChange={this.updateForm}
                    placeholder="Name:" 
                    required 
                    name="name" 
                />
                <input 
                    type="phone" 
                    onChange={this.updateForm}
                    className="input" 
                    value={phone} 
                    placeholder="Phone:" 
                    name="phone" 
                    required 
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="submit" 
                />
            </form>
        )
    }
}


export default ContactForm;