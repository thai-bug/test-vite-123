/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout } from "@douyinfe/semi-ui";
import { useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

// Define navigation items
const MenuItems = [
  {
    itemKey: "fulfillments",
    text: "Fulfillments",
    items: [
      {
        itemKey: "fulfillments-inbound",
        text: "Inbound",
        items: [
          {
            itemKey: "fulfillments-inbound-orders",
            text: "Orders",
            path: "/fulfillments/inbound/orders",
          },
          {
            itemKey: "fulfillments-inbound-storages",
            text: "Storages",
            path: "/fulfillments/inbound/storages",
          },
          {
            itemKey: "fulfillments-inbound-storage-labels",
            text: "Storage Labels",
            path: "/fulfillments/inbound/storage-labels",
          },
        ],
      },
      {
        itemKey: "fulfillments-outbound",
        text: "Outbound",
        items: [
          {
            itemKey: "fulfillments-outbound-picking-job",
            text: "Picking Job",
            path: "/fulfillments/outbound/picking-job",
          },
        ],
      },
    ],
  },
  {
    itemKey: "merchants",
    text: "Merchants",
    path: "/merchants",
  },
  {
    itemKey: "orders",
    text: "Orders",
    path: "/orders",
  },
];

const Sider = () => {
  const renderSubMenu = useCallback((items: any[]) => {
    return items?.map((item) => {
      if (item?.items?.length) {
        <SubMenu
          key={item.key}
          defaultOpen={true}
          label={item.label}
          icon={item.icon}
        >
          {renderSubMenu(item?.items)}
        </SubMenu>;
      }
      return (
        <MenuItem
          key={item.key}
          // className={
          //   MatchRoute({ to: item?.path })
          //     ? "bg-[rgba(var(--semi-grey-3),1)]"
          //     : ""
          // }
          icon={item.icon}
          // component={}
        >
          <Link to={item?.path as string}> {item.label}</Link>
        </MenuItem>
      );
    });
  }, []);

  const renderMenu = useCallback(
    (items: any[]) => {
      return items?.map((item) => {
        if (item?.items?.length) {
          return (
            <SubMenu
              key={item.key}
              defaultOpen={true}
              label={item.label}
              icon={item.icon}
            >
              {renderSubMenu(item?.items)}
            </SubMenu>
          );
        }

        return (
          <MenuItem key={item.key} icon={item.icon}>
            <Link to={item?.path as string}> {item.label}</Link>
          </MenuItem>
        );
      });
    },
    [renderSubMenu]
  );

  return (
    <Layout
      style={{ border: "1px solid var(--semi-color-border)" }}
      className="h-full semi-layout semi-layout-has-sider"
    >
      <Sidebar backgroundColor="var(--semi-color-bg-1)">
        <Menu
          key={"menu"}
          menuItemStyles={{
            subMenuContent: {
              background: "rgba(var(--semi-grey-1), 1)",
              // "&:hover": {
              //   background: "rgba(var(--semi-grey-1), 1)",
              // },
            },
            button: {
              "&:hover": {
                background: "rgba(var(--semi-grey-2), 1)",
              },
            },
          }}
        >
          {renderMenu(MenuItems)}
        </Menu>
      </Sidebar>
      {/* <Layout>
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

        <Footer />
      </Layout> */}
    </Layout>
  );
};

export default Sider;
