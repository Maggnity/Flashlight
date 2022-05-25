import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import Torch from 'react-native-torch';
import imagex from './src/assets/img/eco-light.png';
import imagey from './src/assets/img/eco-light-off.png';
import dioLogox from './src/assets/img/logo-dio.png';
import dioLogoy from './src/assets/img/logo-dio-white.png';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = ()=>{setToggle(oldToggle => !oldToggle)}

  useEffect(()=>{
    Torch.switchState(toggle);
  }, [])

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={
            toggle
            ? style.lightingOn
            : style.lightingOff
          }
          source={
            toggle
            ? imagex
            : imagey
          }
          />
        <Image
          style={
            toggle
            ? style.dioLogo
            : style.dioLogoOff
          }
          source={
            toggle
            ? dioLogox
            : dioLogoy
          }
          />
        </TouchableOpacity>
    </View>
  )
}

export default App;


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  dioLogoOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 250,
    height: 250,
  },
})