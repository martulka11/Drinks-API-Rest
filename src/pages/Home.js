import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <h1 className={styles.header}>Find Cocktail Recipe</h1>        
        <SearchForm />
      </div>
      <div className={styles.list}>
        <CocktailList/>
      </div>
    </section>
    
  );
};

export default Home;
