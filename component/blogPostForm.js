import React,{ useState,useContext} from 'react'
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import {Context} from '../context/BlogContext'
const BlogPostFrom=({onSumbit,intialState})=>{

const {state} = useContext(Context)
    const [title, setTitle] = useState(intialState.title);
    const [content, setContent] = useState(intialState.content)

return(

<View style={styles.wrapper}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput value={title} onChangeText={text => setTitle(text)}  style={styles.input}/>
      <Text style={styles.label}>Enter Content</Text>
      <TextInput value={content} onChangeText={text => setContent(text)} style={styles.input}/>
        <Button title="Save Blog Post" onPress={()=>onSumbit(title,content)} />
    </View>

)
}

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

export default BlogPostFrom;