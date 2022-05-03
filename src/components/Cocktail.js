import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cocktail.module.css';

const Cocktail = (props) => {
  return (
    <li className={styles.cocktail}> 
    <div className={styles.container}>   
            <img src={props.image} alt={props.name}/>
            <div className={styles.info }>
            <h3>{props.name}</h3>
            <p>{props.glass}</p>
            <Link to={`/cocktails/${props.id}`} className={styles.link}>
          <button>Details</button>
        </Link>
            </div>
      </div>
    </li>
  );
};

export default Cocktail;
