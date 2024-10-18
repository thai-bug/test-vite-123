/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  ContactsOutlined,
  HddOutlined,
  ShopOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";

const useMenu = () => {
  const MENU_PATHS: any[] = [
    {
      itemKey: "fulfillment",
      text: "Fulfillment",
      icon: <HddOutlined />,
      items: [
        {
          itemKey: "inbound",
          text: "Inbound",
          items: [
            {
              itemKey: "storages",
              text: "Storages",
              path: "/fulfillment/inbound/storages",
            },
            {
              itemKey: "storage-labels",
              text: "Storage Labels",
              path: "/fulfillment/inbound/storage-labels",
            },
          ],
        },
        {
          itemKey: "outbound",
          text: "Outbound",
          items: [
            {
              itemKey: "picking-job",
              text: "Picking Job",
              path: "/fulfillment/outbound/picking-job",
            },
          ],
        },
      ],
    },
    {
      itemKey: "merchants",
      text: "Merchants",
      path: "/merchants",
      icon: <ContactsOutlined />,
    },
    {
      itemKey: "stores",
      text: "Stores",
      path: "/stores",
      icon: <ShopOutlined />,
    },
    {
      itemKey: "orders",
      text: "Orders",
      path: "/orders",
      icon: <SnippetsOutlined />,
    },
  ];

  return { MENU_PATHS };
};

export default useMenu;
