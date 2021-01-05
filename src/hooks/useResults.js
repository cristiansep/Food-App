import {useState, useEffect} from 'react';
import yelp from '../api/yelp';



export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
  
    const searchApi = async(searchTerm) => {
      try {
  
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'san jose'
          }
        });
        setResults(response.data.businesses); 
      } catch (error) {
        setErrorMessage('Algo salió mal');
      }
      
    };
  
    // LLAMAR A LA PI CUANDO EL COMPONENTE SE RENDERIZA 
    // serachApi('pasta')
    useEffect(() => {
      searchApi('pasta')
    }, [])


    return [searchApi, results, errorMessage];
  
}