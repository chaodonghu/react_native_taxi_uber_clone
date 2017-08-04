import React from 'react';
import { View } from 'native-base';
import MapView from 'react-native-maps';

// Import components
import SearchBox from '../SearchBox/index';
import SearchResults from '../SearchResults/index';
import styles from './MapContainerStyles.js';

// Stateless component therefore just an arrow function
export const MapContainer = ({region, getInputData, toggleSearchResult}) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      >
        <MapView.Marker
        coordinate={region}
        pinColor="red"
        draggable
      />
      </MapView>
      <SearchBox getInputData={getInputData} toggleSearchResult={toggleSearchResult} />
      <SearchResults />
    </View>
  )
}

export default MapContainer;
