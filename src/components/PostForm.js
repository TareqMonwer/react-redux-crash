import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    // call action
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add New Post</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title} />
          <br/><br/>

          <label htmlFor="post-body">Text</label>
          <textarea name="body" id="post-body" onChange={this.onChange} value={this.state.body} />

          <br/>
          <input type="submit" value="add post"/>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);