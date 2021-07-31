/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import database from '@react-native-firebase/database';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      finalArray:[]
    }
  }

  componentDidMount(){
    console.log('In the name of Allah');
    console.log('In the name of Allah');

    // const scores = database().ref('scores').orderByValue().once('value');

    database()
    .ref('/Student')
    .orderByChild('id')
    .on('value', snapshot => {
      console.log('User data: ', snapshot.val());
      this.setState({finalArray:snapshot.val()});
      console.log('check karna hai = ',this.state.finalArray[0]);
    });


  //   database()
  //   .ref('/Student/1')
  //   .set({
  //    name: 'Ali',
  //    age: 21,
  //    rollno: 21,
  //    id:1,
  //    college:'NCBAE'
  // })
  // .then(() => console.log('Data set.'));

  // database()
  // .ref('/Student/1')
  // .update({
  //   id: 2,
  // })
  // .then(() => console.log('Data updated.'));

  // const newReference = database().ref('/Student').push();

  // console.log('Auto generated key: ', newReference.key);
  
  // newReference
  //   .set({
  //     name: 'Akbar',
  //        age: 22,
  //        rollno: 19,
  //        id:3,
  //        college:'NCBAE',
  //        key:2,
  //     })
  //   .then(() => console.log('Data updated.'));


    // database().ref('/Student/1').remove();


  }

  render(){
    return(
      <View>
        <Text> In the Name of Allah </Text>
        <Text> In the Name of Allah </Text>

        <FlatList
        data={this.state.finalArray}
        renderItem={({item}) =>
          <View>
            <Text> {item.college} </Text>

          <Image style = {{height:50,width:50}}
          source={{uri: item.img}}
          />

          </View>
        }
        keyExtractor={item => item.key}
        />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
