import { useGlobalContext } from "../context"
import Cocktail from "./Cocktail"
import styles from './CocktailList.module.css';

const CocktailList = () => {
    const {cocktails} = useGlobalContext()

    return (
        <section className={styles.sectionTwo}>
                {cocktails.map((drink) => {
                    return (
                        <ul className={styles.cocktails} key={drink.id}>
                            <Cocktail {...drink}/>
                        </ul>
                )})}

        </section>
    )

}

export default CocktailList;