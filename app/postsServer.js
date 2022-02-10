import mongoose from 'mongoose';
import Post from './models/Post';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'No MONGODB_URI specified in .env, please enter one to access database.'
  );
}

mongoose.connect(MONGODB_URI, (err) => {
  if (err) {
    console.log(err);
    throw new Error('Error connecting to database.');
  } else {
    console.log('Connected to database');
  }
});

export async function getPosts() {
  const posts = await Post.find({});
  if (posts) {
    return posts;
  } else {
    return null;
  }
}

export async function getSinglePost(postId) {
  const post = await Post.findOne({ _id: postId });
  if (post) {
    return post;
  } else {
    return null;
  }
}

export async function createPost(postData) {
  const newPost = new Post(postData);

  newPost.save((err, post) => {
    if (err) {
      console.log(err);
      return { success: false };
    } else {
      console.log(`Successfully created new post with _id: ${post._id}`);
      return { success: true, post: post };
    }
  });
}

export async function updatePost(postId, updatedPost) {
  Post.updateOne({ _id: postId }, updatedPost, (err, result) => {
    if (err) {
      console.log(err);
      return {
        success: false,
      };
    } else {
      console.log(result);
      return {
        success: true,
        result: result,
      };
    }
  });
}

export async function deletePost(postId) {
  Post.deleteOne({ _id: postId }, (err, result) => {
    if (err) {
      console.log(err);
      return { success: false };
    } else {
      console.log(result);
      return { success: true, result: result };
    }
  });
}
