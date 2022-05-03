import React, { useEffect, useRef } from "react";
import {useGlobalContext} from '../context';
import styles from './SearchForm.module.css';

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const searchCocktail = useRef('');

    useEffect(() => {
        searchCocktail.current.focus()
    }, [])

    const cocktailChangeHandler = () => {
        setSearchTerm(searchCocktail.current.value)
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
    }


    return(
        <section className={styles['section-search']}>
            <form className={styles.form} onSubmit={formSubmissionHandler}>
                <label htmlFor='name'></label>
                <input type="text" id="name" ref={searchCocktail} onChange={cocktailChangeHandler} />
            </form>
        </section>
        
    )
}

export default SearchForm;