import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'react-native-best-viewpager';

export default class pilihCalon extends Component {
  render() {
    return (
        <View style={{flex:1}}>
        <IndicatorViewPager
            style={{height:200}}
            indicator={this._renderDotIndicator()}
        >
            <View style={{backgroundColor:'cadetblue'}}>
                <Text>page one</Text>
            </View>
            <View style={{backgroundColor:'cornflowerblue'}}>
                <Text>page two</Text>
            </View>
            <View style={{backgroundColor:'#1AA094'}}>
                <Text>page three</Text>
            </View>
        </IndicatorViewPager>

        <IndicatorViewPager
            style={{flex:1, paddingTop:20, backgroundColor:'white'}}
            indicator={this._renderTitleIndicator()}
        >
            <View style={{backgroundColor:'cadetblue'}}>
                <Text>page one</Text>
            </View>
            <View style={{backgroundColor:'cornflowerblue'}}>
                <Text>page two</Text>
            </View>
            <View style={{backgroundColor:'#1AA094'}}>
                <Text>page three</Text>
            </View>
        </IndicatorViewPager>
        
        <IndicatorViewPager
            style={{flex:1, paddingTop:20, backgroundColor:'white'}}
            indicator={this._renderTabIndicator()}
        >
            <View style={{backgroundColor:'cadetblue'}}>
                <Text>page one</Text>
            </View>
            <View style={{backgroundColor:'cornflowerblue'}}>
                <Text>page two</Text>
            </View>
            <View style={{backgroundColor:'#1AA094'}}>
                <Text>page three</Text>
            </View>
        </IndicatorViewPager>
    </View>
    );
  }
}

export default pilihCalon

const styles = StyleSheet.create({
    pagerView: {
      flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
      },
  });