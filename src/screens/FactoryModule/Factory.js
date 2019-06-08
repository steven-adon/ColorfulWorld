
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import CircleProgress from './CircleProgress/CircleProgress'
import Candy from './Candy/Candy'

// import Candy from '../../../assets/candy.png'

export default class FactoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Factory',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="To to WheelD3 Demo" onPress={this._showMoreApp} />
        <Candy />
        <CircleProgress
          size={220}
          progress={0.6}
          color={'red'}
          notFilledColor={'white'}>
          <Text>My Candy!</Text>
          {/* <Image source={20} style={styles.scale} /> */}
        </CircleProgress>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('WheelD3');
  };
}

const styles = StyleSheet.create({
  scale: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});