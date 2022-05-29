import styles from './Main.module.css';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
      <section className={styles.background}>
         <div style={{ backgroundImage: "url(/jack.jpg)" , backgroundRepeat: 'no-repeat',
        width:'100vw', height: '100vh', backgroundSize: 'cover',
      }}>
        <div className={styles.container}>
           <h1 className={styles.header}>Cocktail Recipes</h1>
            <h2>If you want to search a recipe for the best cocktail for you, you are in the right place</h2>
      </div>
      <div>
      <Link to='/cocktails'><button className={styles.button} >START</button>
      </Link>  
      </div>
        </div>
      </section>
       
    )
}

export default Main;
