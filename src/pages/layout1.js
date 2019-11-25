import { Typography, Layout, Menu, Icon } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import 'antd/dist/antd.css';
import "../static/css/carousel.css";
const { Header, Footer, Sider } = Layout;
const { Text } = Typography;
const CustomLayout = (propos) => {
    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/"><Icon type="user" />List</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/pagination"><Icon type="user" />Carousel</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/tab1"><Icon type="user" />Tab</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout key="1" style={{ marginLeft: 200 }}>
                <Header style={{ background: '#000'}}>
                    <div>
                        <Text className="nom">Abdou Abarchi Abarchi</Text>
                    </div>
                </Header>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {propos.children}
                </div>
                {/* <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        <p>Aboubacar</p>
                    </div>
                </Content> */}
                <Footer style={{ textAlign: 'center' }}> ©2019 AbAbAb </Footer>
            </Layout>
        </Layout>
    );
}


export default CustomLayout;

