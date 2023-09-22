import css from './ContactForm.module.css';

import React from 'react';

export class ContactForm extends React.Component {
    state = {
        name:'',
        number:''
    }
    reset() {
        this.setState({name: '', number:''})
    }
    handleInput = e => {
        const {name, value} = e.currentTarget;
        this.setState({ [name]: value });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state); 
        this.reset();
      };


    render() {
        return (
            <form className={css.form} onSubmit={this.handleSubmit}> 
                <label className={css.label}>
                    Name
                    <input
                        onChange={this.handleInput}
                        value={this.state.name}
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                 </label> 
                 <label className={css.label}>Number
                    <input
                        onChange={this.handleInput}
                        value={this.state.number}
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={css.addBtn}>Add Contact</button>
            </form>
            )
    }
}
