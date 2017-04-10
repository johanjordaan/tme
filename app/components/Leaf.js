import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper'

import {map} from 'lodash';
import {fromJS} from 'immutable';

const st =  {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#9DD6EB'
};

const styles = StyleSheet.create({
 slide1: st,
 text: {
   color: '#000000',
   fontSize: 30,
   fontWeight: 'bold'
 },
 text2: {
   color: '#333333',
   fontSize: 20,
   fontWeight: 'bold'
 }
});


export default class Leaf extends Component {

  constructor(props) {
    super(props);

    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this);
  }

  onMomentumScrollEnd(evt, state) {
    this.props.onViewChanged(state.index);
  }

  renderRange() {
    return map(this.props.range,(item,i) => {
      const style = fromJS(st).set('backgroundColor',this.props.color[i]).toJS();
      return (
        <View key={item} style={style}>
          <Text style={styles.text2}>xxx</Text>
          <Text style={styles.text}>{item}</Text>
          <Text style={styles.text2}>xxx</Text>
        </View>
      );
    })
  }

  render() {
    console.log("--->",this.props.index)
    return (
      <Swiper
        style={styles.wrapper}
        horizontal={false}
        index={this.props.index}
        onMomentumScrollEnd={this.onMomentumScrollEnd}
      >
        {this.renderRange()}
      </Swiper>
    )
  }
}
