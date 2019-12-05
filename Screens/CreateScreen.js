import React, {useContext, useState} from 'react';
import {View, Text, TextInput, StyleSheet,Button} from 'react-native';
import {Context} from '../context/BlogContext'
const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
 const {addBlogPost} = useContext(Context)
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput value={title} onChangeText={text => setTitle(text)}  style={styles.input}/>
      <Text style={styles.label}>Enter Content</Text>
      <TextInput value={content} onChangeText={text => setContent(text)} style={styles.input}/>
        <Button title="Sumbit Post" onPress={()=>{addBlogPost(title,content,()=>{navigation.navigate("Index")})}} />
    </View>
  );
};


const styles=StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:"black",
        marginBottom:10
    },
    label:{
        fontSize:20,
        marginBottom:10
    },
    wrapper:{
marginHorizontal:10,
marginVertical:10
    }


})



export default CreateScreen;
