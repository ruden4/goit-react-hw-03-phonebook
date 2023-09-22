
import css from './Filter.module.css'

export const Filter = ({handleFilter, value}) => {
    return (
        <label className={css.label}>Find contacts by name
            <input className={css.input} type="text" onChange={handleFilter} value={value}/>
            </label>
    )
}
