/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.cent1}>
          <View style={styles.ret1}></View>
          <View style={styles.ret1}></View>
          <View style={styles.ret1}></View>
        </View>
        <View style={styles.cent2}>
          <View style={styles.ret2}></View>
          <View style={styles.ret2}></View>
          <View style={styles.ret2}></View>
        </View>
        <View style={styles.cent3}>
          <View style={styles.r1}>
            <View>
              <View style={styles.ret3}></View>
              <View style={styles.ret3}></View>
              <View style={styles.ret3}></View>
            </View>
            <View>
              <View style={styles.ret3}></View>
              <View style={styles.ret3}></View>
              <View style={styles.ret3}></View>
            </View>
            <View>
              <View style={styles.ret3}></View>
              <View style={styles.ret3}></View>
              <View style={styles.ret3}></View>
            </View>
            <View>
              <View style={styles.ret3}></View>
              <View style={styles.ret3}></View>
              <View style={styles.ret3}></View>
            </View>
            <View>
              <View style={styles.ret3}></View>
              <View style={styles.ret3}></View>
              <View style={styles.ret3}></View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.up}>
        <View style={styles.btn}>
          <Text style={styles.text}>Menu</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>Logs</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>Credits</Text>
        </View>
      </View>
      <View style={styles.low}>
        <Text style={styles.text}>Exercício 01 - DDM</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(164, 170, 226, 0.7)'
  },

  center: {
    position: 'absolute',
    width: 330,
    height: 555,
    left: 32,
    top: 80,
    backgroundColor: '#8A8FC4',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cent1: {
    margin: 10,
    width: 270,
    height: 150,
    backgroundColor: '#B2B9FF',
    flexDirection: 'row',
    alignItems: 'center',

  },

  cent2: {
    margin: 10,
    width: 270,
    height: 150,
    backgroundColor: '#B2B9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cent3: {
    margin: 10,
    width: 270,
    height: 150,
    backgroundColor: '#B2B9FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  },

  ret1: {
    width: 50,
    height: 135,
    margin: 20,
    backgroundColor: '#000000'
  },

  ret2: {
    width: 250,
    height: 40,
    margin: 4,
    backgroundColor: '#000000'

  },

  ret3: {
    margin: 5,
    width: 40,
    height: 35,
    backgroundColor: '#000000'

  },

  r1: {
    flexDirection: 'row',
  },

  text: {
    color: '#FFFFFF',
    fontSize: 20
  },

  up: {
    width: '100%',
    height: 56,
    backgroundColor: '#C4C4C4',
    flexDirection: 'row',
    alignItems: 'center',
  },

  low: {
    position: 'absolute',
    width: '100%',
    height: 55,
    left: 0,
    top: 663,
    backgroundColor: '#4E466A',
    alignItems: 'center',
    justifyContent: 'center',

  },

  btn: {
    width: 80,
    height: 30,
    margin: 56,
    marginLeft: 10,
    backgroundColor: '#000000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

  }
});