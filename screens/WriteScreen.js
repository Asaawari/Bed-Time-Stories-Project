import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';

export default class WriteScreen extends React.Component {
    render() {
      return(
  
      <View>
        <Text style={styles.displayText}>Do you want to write a story??</Text>
      </View>
        
        )
      }
    }
      

  const styles = StyleSheet.create({
    displayText:{
      fontSize: 25,
      textDecorationLine: 'underline',
      marginTop: 20,
      marginLeft: 20,
      textAlign: 'center',
      fontFamily: 'Georgia'
    }
  });