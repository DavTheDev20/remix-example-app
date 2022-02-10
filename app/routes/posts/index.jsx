import Jumbotron from '../../components/Jumbotron';
import { getPosts } from '../../postsServer';
import { Link, useLoaderData } from 'remix';

export async function loader() {
  const posts = await getPosts();

  if (!posts) {
    return null;
  }

  return posts;
}

export default function Posts() {
  const posts = useLoaderData();

  return (
    <div>
      <Jumbotron>
        <h1>Posts</h1>
      </Jumbotron>
      <div className="posts" style={{ margin: '1% auto', width: '75%' }}>
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div
                key={post._id}
                style={{
                  margin: '3% 2%',
                  borderBottom: '2px solid lightgrey',
                  paddingBottom: '15px',
                  width: '63%',
                }}
              >
                <h2 style={{ marginBottom: '5px' }}>{post.title}</h2>
                <p>
                  {post.content.length < 75
                    ? post.content + ' --- '
                    : post.content.slice(0, 75) + '... '}
                  <Link to={`/posts/${post._id}`}>Read More</Link>
                </p>
                {post.dateUpdated ? (
                  <small
                    style={{
                      marginTop: '10px',
                      display: 'block',
                      color: 'hsla(190, 77%, 88%, 0.69)',
                    }}
                  >
                    {'Updated on: ' +
                      new Date(post.dateUpdated).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }) +
                      ' at ' +
                      new Date(post.dateUpdated).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                  </small>
                ) : null}
              </div>
            );
          })
        ) : (
          <div>
            <h1>No Posts</h1>
          </div>
        )}
      </div>
    </div>
  );
}
