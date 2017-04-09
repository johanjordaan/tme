import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper'
import {map} from 'lodash';

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

    this.plutchicOrder = [
      "ecstacy",
      "admiration",
      "terror",
      "amazement"
      ,"grief",
      "loathing",
      "rage",
      "vigilance",
    ];

    this.plutchic = {
      ecstacy: {
        range: ["ecstacy","joy","serenity"],
        color: "",
      },
      admiration: {
        range: ["admiration","trus","acceptance"],
        color: "",
      },
      terror: {
        range:["terror","fear","apprehension"],
        color:"",
      },
      amazement: {
        range:["amazement","surprise","distraction"],
        color: "",
      },
      grief: {
        range:["grief","sadness","pensiveness"],
        color: "",
      },
      loathing: {
        range:["loathing","disgust","boredom"],
        color: "",
      },
      rage: {
        range: ["rage","anger","annoyance"],
        color: "",
      },
      vigilance: {
        range: ["vigilance","anticipation","interest"],
        color: "",
      },
    }
  }

  renderLeafs() {
    return map(this.plutchicOrder,(name) => {
      var leafData = this.plutchic[name];
      return (
        <View key={name}  style={styles.slide1}>
          <Leaf range={leafData.range}/>
        </View>
      );
    })
  }

  render() {
    return (
      <Swiper style={styles.wrapper}>
        {this.renderLeafs()}
      </Swiper>
    );
  }
}
