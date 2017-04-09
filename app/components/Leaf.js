import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper'

import {map} from 'lodash';


const styles = StyleSheet.create({
wrapper: {
 },
 slide1: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#9DD6EB'
 },
 slide2: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#97CAE5'
 },
 slide3: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#92BBD9'
 },
 text: {
   color: '#fff',
   fontSize: 30,
   fontWeight: 'bold'
 }
});


export default class Leaf extends Component {
  renderRange() {
    return map(this.props.range,(item) => {
      return (
        <View key={item} style={styles.slide1}>
          <Text style={styles.text}>{item}</Text>
        </View>
      );
    })
  }

  render() {
    return (
      <Swiper style={styles.wrapper} horizontal={false}>
        {this.renderRange()}
      </Swiper>
    )
  }
}
