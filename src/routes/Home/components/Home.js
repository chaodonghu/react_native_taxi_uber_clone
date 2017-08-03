import React from 'react';
import { View, Text } from 'react-native';

import { Container } from 'native-base';

// Import components
import MapContainer from './MapContainer';
class Home extends React.Component {

  componentDidMount() {
    this.props.setName();
  }

  render(){
    const region = {
      latitude: 43.653226,
      longitude: -79.383184,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
    return(
      <Container>
        <MapContainer region={region}/>
      </Container>
    );
  }
}

export default Home;
