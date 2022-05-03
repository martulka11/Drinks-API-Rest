import { useParams, Link } from "react-router-dom"
import React, {useEffect, useState} from 'react';
import styles from './SingleCocktail.module.css';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


const SingleCocktail = () => {
    const { id } = useParams();
    const [isloading, setIsLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);
    
    useEffect(() => {
        setIsLoading(true)
        async function getCocktail() {
          try {
            const response = await fetch(`${url}${id}`)
            const data = await response.json()
            if (data.drinks) {
                const {
                  strDrink: name,
                  strDrinkThumb: image,
                  strAlcoholic: info,
                  strCategory: category,
                  strGlass: glass,
                  strInstructions: instructions,
                  strIngredient1,
                  strIngredient2,
                  strIngredient3,
                  strIngredient4,
                  strIngredient5,
                } = data.drinks[0]
                const ingredients = [
                  strIngredient1,
                  strIngredient2,
                  strIngredient3,
                  strIngredient4,
                  strIngredient5,
                ]
                const transformedCocktails = {
                  name,
                  image,
                  info,
                  category,
                  glass,
                  instructions,
                  ingredients,
                }
                setCocktail(transformedCocktails)
            } else {
                setCocktail(null)
            } 
             setIsLoading(false)
            } catch(error){
                console.log(error)
            }
            }
                getCocktail()
            }, [id])

            
    if (!cocktail) {
        return <h2 className={styles.title}>no cocktail to display</h2>
      }
    


return (
        <section>
          <div className={styles.header}>
            <h2 className={styles.title}>{cocktail.name}</h2>
          </div>
      <div className={styles.drink}>
        <div className={styles.image}>
          <img src={cocktail.image} alt={cocktail.name} />
        </div>
        <div className={styles.info}>
          <p>
            <span>Name: </span>
            {cocktail.name}
          </p>
          <p>
            <span>Category: </span>
            {cocktail.category}
          </p>
          <p>
            <span>Info: </span>
            {cocktail.info}
          </p>
          <p>
            <span>Glass: </span>
            {cocktail.glass}
          </p>
          <p>
            <span>Instructions: </span>
            {cocktail.instructions}
          </p>
          <div className={styles.list}>
            <span>Ingredients:</span>
            <ul>
              {cocktail.ingredients.map((item, index) => {
                return item ? <li key={index}>{item}</li> : null
            })}
            </ul>
          </div>
          <div className={styles.button}>
        <Link to='/'><button>Back Home</button></Link>
      </div>
        </div>
      </div>
      </section>
)

}

export default SingleCocktail;

//trzeba wprowadzic error