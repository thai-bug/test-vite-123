import React from 'react'
import { Layout } from '@douyinfe/semi-ui';
import Sidebar from './components/Sidebar';
import { ReactNode } from '@tanstack/react-router';

interface IProps {
  children: ReactNode
}

const HomeLayout = ({ children }: IProps) => {
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
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default HomeLayout