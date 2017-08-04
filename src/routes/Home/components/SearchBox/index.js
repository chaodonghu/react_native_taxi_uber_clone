import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'


import styles from './SearchBoxStyles.js';

export const SearchBox = ({getInputData, toggleSearchResult}) => {
  function handleInput(key, val){
    getInputData({
      key,
      value: val
    });
  }
    return(
      <View style={styles.searchBox}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>PICK UP</Text>
            <InputGroup>
              <Icon name='search' size={15} color='#FF5E3A'/>
              <Input
                onFocus={()=>toggleSearchResult("pickup")}
                style={styles.inputSearch}
                placeholder='Choose pick-up location'
                onChangeText={handleInput.bind(this, "pickup")}
              />
            </InputGroup>
          </View>
          <View style={styles.secondInputWrapper}>
            <Text style={styles.label}>DROP-OFF</Text>
            <InputGroup>
              <Icon name='search' size={15} color='#FF5E3A'/>
              <Input
                onFocus={()=>toggleSearchResult("dropoff")}
                style={styles.inputSearch}
                placeholder='Choose a drop-off location'
                onChangeText={handleInput.bind(this, "dropoff")}
              />
            </InputGroup>
        </View>
      </View>
    );
};



export default SearchBox;
