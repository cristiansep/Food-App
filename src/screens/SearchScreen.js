import React, { useState}  from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';



const SearchScreen = () => {

  const [term, setTerm] = useState('');

  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  };

  return (
    <View>
      <SearchBar 
      term={term} 
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>hemos encontrado {results.length} resultados</Text>
      <ResultsList results={filterResultsByPrice('$')} title='Efectivo' />
      <ResultsList results={filterResultsByPrice('$$')}  title='Mas caro'/>
      <ResultsList results={filterResultsByPrice('$$$')} title='Muy caro' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
