import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import ReactMarkdown from 'react-markdown';
import { db } from './utills/firebase';
import { collection, addDoc } from 'firebase/firestore';
import './PostQuestion.css';

const PostQuestion = () => {
  const [code, setCode] = useState('');
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    tags: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, 'questions'), {
        ...postData,
        code,
        createdAt: new Date(),
      });
      alert('Question posted successfully!');
    } catch (error) {
      console.error('Error posting question: ', error);
    }
  };

  return (
    <div className="post-question-container">
      <h1 className="main-heading">Post Question</h1>
      <form className="question-form" onSubmit={handleSubmit}>
      <label>Title</label>
        <input
          id="question-title"
          name="title"
          type="text"
          placeholder="Enter the title of your question"
          onChange={handleInputChange}
          value={postData.title}
          className="form-input"
        />
      </form>
      <h2>Code Editor</h2>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
      <h2>Preview</h2>
      <div className="markdown-preview">
        <ReactMarkdown>{code}</ReactMarkdown>
      </div>
      <form className="question-form" onSubmit={handleSubmit}>
        
        <label>Describe your problem</label>
        <textarea
          id="question-description"
          name="description"
          placeholder="Provide details about your question"
          onChange={handleInputChange}
          value={postData.description}
          className="form-textarea"
        />
        <label>Tags</label>
        <textarea
          id="question-tags"
          name="tags"
          placeholder="Add tags to describe your question"
          onChange={handleInputChange}
          value={postData.tags}
          className="form-textarea"
        />
        
        <button type="submit" className="form-button">Post</button>
      </form>
      
    </div>
  );
};

export default PostQuestion;
