import Jumbotron from '~/components/Jumbotron';
import { getSinglePost, updatePost } from '~/postsServer';
import { redirect, useLoaderData } from 'remix';

export async function loader({ params }) {
  const { postId } = params;

  const post = await getSinglePost(postId);

  return post;
}

export async function action({ request }) {
  const form = await request.formData();
  const postId = form.get('postId');
  const postUpdate = {
    title: form.get('title'),
    content: form.get('content'),
  };
  await updatePost(postId, postUpdate);
  return redirect('/posts');
}

export default function UpdatePost() {
  const inputStyling = {
    width: '50%',
    display: 'block',
    margin: '3% auto',
    padding: '2%',
    color: 'black',
  };

  const post = useLoaderData();

  return (
    <div>
      <Jumbotron>
        <h1>Update</h1>
      </Jumbotron>
      <div
        style={{
          margin: '2% auto',
          textAlign: 'center',
          border: '2px solid black',
          width: '50%',
          padding: '1%',
        }}
      >
        <h2>Update Post</h2>
        <form style={{ marginTop: '4%' }} method="post">
          <input type={'hidden'} name="postId" value={post._id} />
          <input
            style={inputStyling}
            type={'text'}
            name="title"
            placeholder="enter title..."
            defaultValue={post.title}
          />
          <textarea
            style={{
              width: '80%',
              height: '150px',
              marginBottom: '3%',
              padding: '1%',
              color: 'black',
            }}
            placeholder="enter content..."
            name="content"
            defaultValue={post.content}
          ></textarea>
          <br />
          <button
            style={{
              padding: '1.5%',
              cursor: 'pointer',
              backgroundColor: 'blue',
              color: 'white',
              fontWeight: '600',
              border: 'none',
              width: '15%',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
