import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

interface Props {
  children: React.ReactNode;
}

const routes = [
  { link: '/', title: 'Home' },
  { link: '/login-normal', title: 'Login Form' },
  { link: '/fetch-axios', title: 'Fetch Axios' },
  { link: '/fetch-api', title: 'Fetch API' },
];

function Layout({ children }: Props) {
  const inputText = 'This is a test sentence.';
  const OMITTED_WORDS = ['is', 'a'];
  const reg = new RegExp('\\b(' + OMITTED_WORDS.join('|') + ')\\b', 'gi');

  const newText = inputText.replaceAll(reg, '');
  console.log(JSON.stringify(newText));
  // Output: "This  test sentence."
  // Notice the extra space between "This" and "test"

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
