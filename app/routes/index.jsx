import { Link } from 'remix';
import Jumbotron from '../components/Jumbotron';

export default function Index() {
  const textStyle = {
    width: '65%',
    margin: '2% auto',
    lineHeight: '1.6',
  };
  return (
    <div>
      <Jumbotron>
        <h1>Welcome To the Remix Example App!</h1>
      </Jumbotron>
      <div className="content" style={{ marginLeft: '5%' }}>
        <a
          href="https://remix.run/docs/en/v1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--LsLjAe3Z--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/6bkwrfbwxkb3cq1oo7r4.jpg"
            alt="remix logo"
            style={{
              width: '15%',
              float: 'left',
              margin: '5% auto 0',
            }}
          />
        </a>
        <p style={textStyle}>
          <strong>
            I am using this app to test out the capabilities of this new react
            framework.
          </strong>{' '}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          accusamus aliquam assumenda sequi! Repudiandae, minima accusantium!
          Itaque odio quasi laudantium enim! Vel, voluptatibus itaque adipisci
          saepe unde quasi illo quam! Dolores, assumenda. Sunt soluta tempora
          accusamus culpa. Accusamus cupiditate aliquid cum quis minima
          provident praesentium numquam enim voluptatum nam. Minima odio non
          eligendi necessitatibus, culpa voluptates quisquam tenetur dolorum at.
          Deserunt error illum ut consequuntur quaerat rerum beatae molestias at
          dicta tenetur, aut sunt! Eius eligendi hic quia qui impedit. Similique
          officia facere quis eveniet! Aspernatur, sed optio. Iure, dignissimos.
          Dolor delectus veniam earum officia quos! Illum nostrum similique
          laborum saepe veritatis eveniet excepturi reiciendis, voluptate dicta,
          ut aut. Ab et illum illo similique accusamus repellat explicabo
          quisquam sint numquam. Eum facilis vero omnis veritatis aspernatur
          ipsa ipsam animi distinctio quae molestias earum, accusamus facere
          perferendis, corrupti consequatur, provident odio molestiae ea dolore.
          Minus assumenda eveniet hic a architecto repudiandae!
        </p>
      </div>
    </div>
  );
}
