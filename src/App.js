import './App.css';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Privacy from './components/Privacy';
import Login from './components/Login';
import { Link, Route, Routes } from "react-router-dom";

import React, { useState } from 'react';

import { Layout, Menu, Button, theme } from 'antd';
import SideBar from './components/SideBar';
import UserList from './components/UserList';
import Counter from './components/Counter';

const { Header, Sider, Content } = Layout;

function App() {
  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
     <SideBar/>

      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '90vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
           </Routes>

        </Content>
      </Layout>
    </Layout>
  );

}

export default App;
