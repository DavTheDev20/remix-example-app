import { redirect, useLoaderData, Link } from 'remix';
import Jumbotron from '../../components/Jumbotron';
// import data from '../../db/posts.json';
import { getSinglePost, deletePost } from '~/postsServer';

export async function loader({ params }) {
  const { postId } = params;
  const post = await getSinglePost(postId);

  return post;
}

export async function action({ request }) {
  const form = await request.formData();
  const postId = form.get('postId');
  await deletePost(postId);

  return redirect('/posts');
}

export default function Post() {
  const post = useLoaderData();

  const elementStyle = {
    width: '65%',
    margin: '2% auto',
    lineHeight: '1.6',
  };

  return (
    <div>
      <Jumbotron>
        <h1>{post.title}</h1>
      </Jumbotron>
      <div style={elementStyle}>
        <small style={{ fontWeight: 'light', color: '#acacac' }}>
          Posted On:{' '}
          {new Date(post.dateCreated).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </small>
        <p>{post.content}</p>
        <form method="POST">
          <input name="postId" type={'hidden'} value={post._id} />
          <button
            style={{
              marginTop: '1%',
              padding: '5px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Delete Post
          </button>
        </form>
        <Link to={`/posts/update/${post._id}`}>
          <button
            style={{
              marginTop: '1%',
              padding: '5px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Update Post
          </button>
        </Link>
      </div>
    </div>
  );
}
