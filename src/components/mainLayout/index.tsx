import { Layout } from "@douyinfe/semi-ui";
import Sider from "./components/Sidebar";
// import { ReactNode } from "@tanstack/react-router";

// interface IProps {
//   children?: ReactNode;
// }

const HomeLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#ededed" }}>
      <Sider />
    </Layout>
  );
};

export default HomeLayout;
