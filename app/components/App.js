import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper'
import {map} from 'lodash';

import {plutchicOrder,plutchic} from '../constants';
import Leaf from './Leaf'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
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

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 2,
      subIndex: 0,
    }

    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this);
    this.onViewChanged = this.onViewChanged.bind(this);
  }

  onMomentumScrollEnd(evt, state) {
    this.setState({index:state.index});
  }

  onViewChanged(subIndex) {
    this.setState({subIndex});
  }

  renderLeafs() {
    return map(plutchicOrder,(name) => {
      var leafData = plutchic[name];
      return (
        <View key={name}  style={styles.slide1}>
          <Leaf
            range={leafData.range}
            color={leafData.color}
            index={this.state.subIndex}
            onViewChanged={this.onViewChanged}
          />
        </View>
      );
    })
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        index={this.state.index}
        onMomentumScrollEnd={this.onMomentumScrollEnd}
      >
        {this.renderLeafs()}
      </Swiper>
    );
  }
}
