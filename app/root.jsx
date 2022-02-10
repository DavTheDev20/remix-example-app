import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import NavBar from './components/NavBar';
import styles from './styles/shared.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

export function meta() {
  return { title: 'Remix Example App' };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
