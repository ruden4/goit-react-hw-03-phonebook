import css from './ContactList.module.css'

export const ContactList = ({contacts, onDelete}) => {
    
    return(
        <ul className={css.contactsList}>
            {contacts.map(({name, number}) => { 
                return(
                <li key={name} className={css.listItem}>
                    <h2 className={css.contact}>{name}</h2>
                    <p className={css.contact}>{number}</p>
                    <button 
                    id={name}
                    onClick={onDelete}
                    type='button' 
                    className={css.deleteBtn}>DELETE
                    </button></li>
            )
            })}
        </ul>
    )
}