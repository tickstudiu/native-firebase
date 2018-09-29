import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  containerLogin: {
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },

  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerMain: {
    backgroundColor: '#fff',
    padding: 15,
    height: '100%',
  },

  loader: {
    width: 150,
    height: 100,
  },

  display4: {
    fontSize: 24,
  },

  display3: {
    fontSize: 35,
  },

  display2: {
    fontSize: 45,
  },

  my4: {
    marginTop: 45,
    marginBottom: 45,
  },

  my3: {
    marginTop: 30,
    marginBottom: 30,
  },

  small: {
    fontSize: 12,
    color: '#6c757d',
  },

  textPrimary: {
    color: '#007bff'
  },

  w100:{
    width: '100%',
  },

  textCenter: {
    alignSelf: 'center',
  },

  title: {
    fontSize: 18,
  },

  link: {
    fontSize: 15,
    color: '#007bff',
  },

  mt4: {
      marginTop: 45,
  },

  mb4: {
    marginBottom: 45,
  },

  ml1: {
    marginLeft: 5,
  },

  mr1: {
    marginRight: 5,
  },

  navImg: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default Styles
