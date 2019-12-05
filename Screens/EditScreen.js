import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostFrom from '../component/blogPostForm'

const EditScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const {state,editBlogPost} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostFrom intialState={{title:blogPost.title,content:blogPost.content}}  onSumbit={(title,content)=>{ editBlogPost(id,title, content, () => navigation.navigate('Index'));}}/>
  );
};


export default EditScreen;
