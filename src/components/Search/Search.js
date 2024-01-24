import React from 'react'
import styles from './Search.module.css'
import { ReactComponent as SearchIcon } from '../../assets/Search icon.svg';

const Search = ({placeHolder}) => {
  return (
    <form className={styles.container}>
        <div>
            <input type='text' className={styles.search} placeholder={placeHolder}/>
        </div>
        <div>
            <button className={styles.button} type='submit'>
                <SearchIcon />
            </button>
        </div>
    </form>

  )
}

export default Search