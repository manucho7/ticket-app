import React from 'react';

import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
// import { Ingresar } from './Ingresar';
// import { Cola } from './Cola';
// import { CrearTicket } from './CrearTicket';

const { Sider, Content } = Layout;

export const RouterPage = () => {
    return (
        <Layout style={{ height: '100vh' }}>
                <Sider >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            INGRESAR
                        </Menu.Item>
                        
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            COLA
                        </Menu.Item>
                        
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            CREAR TICKET
                        </Menu.Item>

                    </Menu>
                </Sider>
            <Layout className="site-layout">

                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    )
}
