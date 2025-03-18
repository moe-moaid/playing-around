import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  children: React.ReactNode;
}

const routes = [
  { link: '/', title: 'Home' },
  { link: '/login-normal', title: 'Login Form' },
  { link: '/fetch-axios', title: 'Fetch Axios' },
  { link: '/fetch-api', title: 'Fetch API' },
  { link: '/dynamic-list', title: 'Dynamic List' },
  { link: '/redux', title: 'Redux Playground' },
];

function Layout({ children }: Props) {

  for(let i = 0; i <= 10; i++){
    setTimeout(() => {
      console.log('first Loop = ', i);
    })
  }

  for(var i = 0; i <= 10; i++){
    setTimeout(() => {
      console.log('second Loop = ', i);
    })
  }

  return (
    <>
      <nav className="flex flex-row justify-center items-center bg-green-50 py-2">
        <ul className="flex flex-row justify-center items-center gap-x-2">
          {routes.map((route, index) => (
            <Link key={index} to={`${route.link}`}>
              <li className="border border-green-300 p-2 rounded-md">
                {route.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </>
  );
}

export default Layout;
