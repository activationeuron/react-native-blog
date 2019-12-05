import React, {useContext} from 'react';
import {View, TextInput, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostFrom from '../component/blogPostForm';
const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context);
  return (
    <BlogPostFrom
      onSumbit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
      intialState={{title:"",content:""}}
    />
  );
};

export default CreateScreen;
