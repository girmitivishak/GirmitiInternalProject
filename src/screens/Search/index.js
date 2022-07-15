import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import styles from './styles';

const Search = () => {
  return (
    <View style={styles.search_container}>
      <Text style={styles.search_text}>Search</Text>
    </View>
  );
};

export default Search;
