import React, {useContext} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import {Context} from '../context/BlogContext';
const ShowScreens = ({navigation}) => {
  const id = navigation.getParam('id');
  const {state} = useContext(Context);
  const blogPost = state.find(a => {
  return  a.id === id;
  });
  
  return (
    <View style={styles.wrapper}>
     
   <Button title="Edit Post" onPress={(()=>navigation.navigate("Edit",{id}))}/>
    </View>
  );
};

const styles=StyleSheet.create({
  wrapper:{
    marginHorizontal:10,
    marginVertical:10
  },
  title:{
    fontSize:35,
    marginBottom:10
  },
  content:{
    fontSize:20
  }
})
export default ShowScreens;
