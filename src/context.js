import React, {useState, useCallback, useContext, useEffect} from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);
    const [error, setError] = useState(null);

    const fetchCocktails = useCallback(async() => {
        setIsLoading(true);
        setError(null);

        try{
            const response = await fetch(`${url}${searchTerm}`)
           if(!response.ok){
               throw new Error('Something is wrong')
            }              
            const data = await response.json();
            const {drinks} = data
            if(drinks) {
        const transformedCocktails = drinks.map((cocktailData) => {
        return {
          id: cocktailData.idDrink,
          name: cocktailData.strDrink,
          image: cocktailData.strDrinkThumb,
          info: cocktailData.strAlcoholic,
          glass: cocktailData.strGlass
        }
      });
      setCocktails(transformedCocktails)
        }else {
            setCocktails([])
        }         
        setIsLoading(false);
    }catch(error){
            setError(error.message || 'Something went wrong')
        }
        setIsLoading(false);
    }, [searchTerm])


    useEffect(() => {
        fetchCocktails()
    }, [searchTerm, fetchCocktails])

    return (
    <AuthContext.Provider value={{
        isLoading,
        cocktails,
        setSearchTerm,
    }}>
        {props.children}
    </AuthContext.Provider>    
    )
}

export const useGlobalContext = () => {
    return useContext(AuthContext)
  }

export {AuthContext, AuthProvider};
