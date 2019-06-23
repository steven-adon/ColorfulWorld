import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EchartsTrend from './EchartsTrend';
import MarketTab from './MarketTab';
import MarketSale from './MarketSale';

export default function IntroScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.blank}></View>

      <View style={styles.headView}>
        <EchartsTrend></EchartsTrend>
      </View>

      <MarketTab ></MarketTab>

      <View style={styles.list}>
        <MarketSale ></MarketSale>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  blank: {
    height: 20,
  },
  headView: {
    height: 200
  },
  tab: {
    height: 44,
  },
  list: {
    flex: 1
  }
});
