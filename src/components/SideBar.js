import { Link } from "react-router-dom";
import React, { useContext, useState } from 'react';
import {
HomeOutlined,
FileDoneOutlined,
InfoCircleOutlined,
LoginOutlined, UserOutlined,NumberOutlined

} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { UserContext } from "../contexts/user-context";
import { CounterContext } from "../contexts/counter-reducer";
//import { CounterContext } from "../contexts/counter-context";

const { Header, Sider, Content } = Layout;

export default function SideBar()
{
  const {username} = useContext(UserContext);
  const {count} =  useContext(CounterContext);
  const [collapsed, setCollapsed] = useState(false);
return (
<>
<Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div>
          <h3 style={{color: 'white', padding:'10px'}}>User : {username}</h3>
          <p style={{color: 'white', padding:'10px'}}>Counter : {count}</p>
        </div>


        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',            
              icon: <Link to="/">
                 {React.createElement(HomeOutlined)}
                 </Link>,
              label: 'Home',
            },
            {
              key: '2',
              icon: <Link to="/about">
                 {React.createElement(FileDoneOutlined)}
                 </Link>,
              label: 'About',
            },
            {
              key: '3',
              icon: <Link to="/privacy">
              {React.createElement(InfoCircleOutlined)}
              </Link>,
              label: 'Privacy',
            },
            {
              key: '4',
              icon: <Link to="/users">
              {React.createElement(UserOutlined)}
              </Link>,
              label: 'Users',
            },
            {
              key: '5',
              icon: <Link to="/counter">
              {React.createElement(NumberOutlined)}
              </Link>,
              label: 'Counter',
            },
            {
              key: '6',
              icon: <Link to="/login">
              {React.createElement(LoginOutlined)}
              </Link>,
              label: 'Login',
            },
          ]}
        />
      </Sider>
</>


)


}