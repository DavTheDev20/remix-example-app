import Jumbotron from '../components/Jumbotron';
import { createPost } from '~/postsServer';
import { redirect, useActionData } from 'remix';

export async function action({ request }) {
  const form = await request.formData();
  const postContent = {
    title: form.get('title'),
    content: form.get('content'),
  };
  if (!postContent.content || !postContent.title) {
    return 'No content in post';
  } else {
    await createPost(postContent);

    return redirect('/posts');
  }
}

export default function Create() {
  const actionMessage = useActionData();
  const inputStyling = {
    width: '50%',
    display: 'block',
    margin: '3% auto',
    padding: '2%',
    color: 'black',
  };
  return (
    <div>
      <Jumbotron>
        <h1>Create</h1>
      </Jumbotron>
      <div
        style={{
          margin: '2% auto',
          textAlign: 'center',
          border: '2px solid #90E0EF',
          width: '50%',
          padding: '1%',
        }}
      >
        <h2>Create Post</h2>
        <form style={{ marginTop: '4%' }} method="post">
          <input
            style={inputStyling}
            type={'text'}
            name="title"
            placeholder="enter title..."
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
          ></textarea>
          <br />
          <small
            style={{
              color: 'red',
              marginBottom: '10px',
              display: 'block',
              fontWeight: 'bold',
            }}
          >
            {actionMessage ? actionMessage : null}
          </small>
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
