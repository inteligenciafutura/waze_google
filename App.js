import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, Image, Button, TouchableOpacity, TouchableHighlight, AsyncStorage, FlatList, Switch, Linking  } from 'react-native';

class ViajeCond extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    latitudO:'6.2408097',
    longitudO:'-75.5871366'
    };
    
    }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              const URL = "https://waze.com/ul?ll="+this.state.latitudO+","+this.state.longitudO+"&z=10"
      Linking.openURL(URL).catch((err) => console.error('An error occurred', err));
            }}
            style={styles.TouchableOpacityStyle}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
               source={{
  uri:'http://inteligenciafutura.com/vamos/imagenes/waze.png',
              }}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
  
  
  <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              const URL = "https://www.google.com/maps/@"+this.state.latitudO+","+this.state.longitudO+",16z"
      Linking.openURL(URL).catch((err) => console.error('An error occurred', err));
            }}
            style={styles.TouchableOpacityStyle2}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
               source={{
  uri:'http://inteligenciafutura.com/vamos/imagenes/logoGoogle.png',
              }}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.FloatingButtonStyle}
            />
  </TouchableOpacity>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'flex-end',
  alignItems: 'center',
  },
  scrollview: {
  alignItems: 'center',
  paddingVertical: 40,
  },
  map: {
  height: '100%',
  width: '100%',
  },
  info:{
      width: 300,
      height: 80,
      backgroundColor: 'white',
      position:'absolute',
      top:10,
      borderRadius: 15,
      flex: 1, 
      flexDirection: 'row',
  },
  listItem:{
      margin:10,
      padding:10,
      backgroundColor:"#FFF",
      width:"80%",
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:5
      },
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        position:'relative'
        //backgroundColor:'black'
      },
      TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
      TouchableOpacityStyle2: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 100,
      },
  });
  export default ViajeCond