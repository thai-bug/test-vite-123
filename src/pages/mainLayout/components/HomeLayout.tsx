import React from 'react'
import { Layout } from '@douyinfe/semi-ui';
import Sidebar from './Sidebar';


const HomeLayout = () => {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#ededed" }}>
      <Sider style={{ width: 'auto', background: "white", }}>
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: "white" }}>Header</Header>
        <Content style={{
          margin: "24px 24px",
          padding: 24,
          minHeight: 280,
          background: "white",
        }}>
          content
        </Content>
      </Layout>
    </Layout>
  );
}

export default HomeLayout