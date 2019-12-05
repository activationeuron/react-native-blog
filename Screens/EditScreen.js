import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';
const EditScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const {state,addBlogPost} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Edit Title</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Edit Content</Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.input}
      />
      <Button
        title="Sumbit Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  wrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default EditScreen;
