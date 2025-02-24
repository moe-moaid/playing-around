import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router';
import LoginForm from './components/LoginForm';
import FetchAxios from './components/FetchAxios';
import FetchApi from './components/FetchApi';
import DynamicList from './components/DynamicList';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" />
        <Route path="/login-normal" element={<LoginForm />} />
        <Route path="/fetch-axios" element={<FetchAxios />} />
        <Route path="/fetch-api" element={<FetchApi />} />
        <Route path="/dynamic-list" element={<DynamicList />} />
      </Routes>
    </Layout>
  );
}

export default App;
