//import libraries for making a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerLineOne}</Text>
      <Text style={textStyle}>{props.headerLineTwo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    paddingTop: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});

//Make component available to other parts of the app
export { Header };
