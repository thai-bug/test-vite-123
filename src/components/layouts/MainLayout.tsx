/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect } from "react";
import { UserSwitchOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, useRouter } from "@tanstack/react-router";
import useMenu from "@/hooks/useMenu";
import { useRecoilState } from "recoil";
import { CollapseStates, OpenKeysStates } from "@/states/menu.state";
const { Header, Sider, Content } = Layout;

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const { MENU_PATHS } = useMenu();

  const [collapsed, setCollapsed] = useRecoilState(CollapseStates);
  const [openKeys, setOpenKeys] = useRecoilState(OpenKeysStates);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const returnSubItems = useCallback((item: any) => {
    return item?.items?.map((subItem: any) => {
      if (subItem?.items?.length) {
        return {
          key: subItem?.itemKey,
          label: <Link to={subItem?.path}>{subItem?.text}</Link>,
          children: returnSubItems(subItem),
        };
      }
      return {
        key: subItem?.itemKey,
        label: <Link to={subItem?.path}>{subItem?.text}</Link>,
      };
    });
  }, []);

  const matchSubMenuItem = useCallback((paths: string[], items: any) => {
    const keys: string[] = [];
    paths?.forEach((path: any) => {
      const matched = items?.find((item: any) => item?.itemKey === path);
      if (matched && matched?.items?.length) {
        keys.push(matched?.itemKey);
        matchSubMenuItem(
          paths?.filter((item: any) => item !== path),
          matched?.items
        );
      }
    });
    return keys;
  }, []);

  useEffect(() => {
    if (collapsed) {
      setOpenKeys(() => []);
      return;
    }
    const keys: string[] = [];
    const splitPaths = currentPath.split("/")?.filter((item) => item);

    splitPaths.forEach((path) => {
      const matched = MENU_PATHS?.find((item) => item.itemKey === path);
      if (matched && matched?.items?.length) {
        keys.push(matched?.itemKey);
        const tempKeys = matchSubMenuItem(
          splitPaths?.filter((item) => item !== path),
          matched?.items
        );

        keys.push(...tempKeys);
      }
    });
    setOpenKeys(() => [...keys]);
  }, [matchSubMenuItem, collapsed, currentPath, setOpenKeys, MENU_PATHS]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          onOpenChange={(e) => setOpenKeys((prev) => [...prev, ...e])}
          defaultSelectedKeys={currentPath?.split("/")?.filter((item) => item)}
          defaultOpenKeys={[]}
          openKeys={openKeys}
          mode="inline"
          items={MENU_PATHS?.map((item) => {
            if (item?.items?.length) {
              return {
                key: item.itemKey,
                label: item.text,
                children: returnSubItems(item),
                icon: item.icon || <UserSwitchOutlined />,
              };
            }
            return {
              key: item.itemKey,
              icon: item?.icon || <UserSwitchOutlined />,
              label: <Link to={item.path}>{item.text}</Link>,
            };
          })}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: "sticky",
            top: 0,
          }}
        ></Header>
        <Content className="mx-auto container p-5 2xl:px-0 py-5">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
