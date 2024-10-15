/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Layout,
  Nav,
  Breadcrumb,
  Avatar,
  Dropdown,
  Divider,
} from "@douyinfe/semi-ui";
import { IconQuit } from "@douyinfe/semi-icons"
import React, { FC, useContext, useEffect } from "react";
import { useRecoilValue } from "recoil";
import RoutesState from "@/states/route.state";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { MenuItems } from "@/utils/menu";


interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  const matchRoute = useMatchRoute();
  const { Header, Content } = Layout;
  const routesPath = useRecoilValue(RoutesState);

  return (
    <Layout
      style={{ border: "1px solid var(--semi-color-border)" }}
      className="h-screen semi-layout semi-layout-has-sider"
    >
      <Sidebar backgroundColor="var(--semi-color-bg-1)">
        <Menu
          key={"menu"}
          menuItemStyles={{
            subMenuContent: {
              background: "rgba(var(--semi-grey-1), 1)",
            },
            button: {
              "&:hover": {
                background: "rgba(var(--semi-grey-2), 1)",
              },
            },
          }}
        >
          {MenuItems?.map((item) => {
            return item?.items?.length ? (
              <SubMenu
                key={item.key}
                defaultOpen={true}
                label={item.label}
                icon={item.icon}
              >
                {item?.items?.map((subItem) => {
                  return (
                    <div key={subItem.key}>
                      {subItem?.items1 ? (
                        <SubMenu key={subItem.key} label={subItem.label} icon={subItem.icon}>
                          {subItem?.items1?.map((a) => (
                            <MenuItem key={a.key} icon={a.icon} component={<Link to={a.path} />}>
                              {a.label}
                            </MenuItem>
                          ))}
                        </SubMenu>
                      )
                        :
                        <MenuItem key={subItem.key} icon={subItem.icon}>
                          <Link to={subItem.label}>{subItem.label}</Link>
                        </MenuItem>
                      }
                    </div>
                  );
                })}
              </SubMenu>
            ) : (
              <MenuItem
                key={item.key}
                className={
                  matchRoute({ to: item?.path })
                    ? "bg-[rgba(var(--semi-grey-3),1)]"
                    : ""
                }
                icon={item.icon}
                component={<Link to={item?.path as string} />}
              >
                {item.label}
              </MenuItem>
            );
          })}
        </Menu>
      </Sidebar>
      <Layout>
        <Header style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
          <div>
            <Nav mode="horizontal">
              <Nav.Footer>
                <Dropdown
                  trigger={"click"}
                  position={"bottomLeft"}
                  render={
                    <Dropdown.Menu>
                      <Divider />
                      <Dropdown.Item
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.location.href = "/sign-out";
                        }}
                        icon={<IconQuit />}
                        type="danger"
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  }
                >
                  <Avatar color="orange" size="small">
                    YJ
                  </Avatar>
                </Dropdown>
              </Nav.Footer>
            </Nav>
          </div>
        </Header>
        <Content
          className="!overflow-x-visible"
          style={{
            padding: "24px",
            backgroundColor: "var(--semi-color-bg-0)",
          }}
        >
          <Breadcrumb
            style={{
              marginBottom: "24px",
            }}
            routes={routesPath}
          />
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout >
  );
};

export default MainLayout;
