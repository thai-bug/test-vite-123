import {
  ContactsOutlined,
  HddOutlined,
  ProductOutlined,
  ShopOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { useMemo } from "react";

const useMenu = () => {
  const MENU_PATHS = useMemo(
    () => [
      {
        itemKey: "fulfillment",
        text: "Fulfillment",
        icon: <HddOutlined />,
        items: [
          {
            itemKey: "storages",
            text: "Storages",
            path: "/fulfillment/storages",
          },
          {
            itemKey: "inbound",
            text: "Inbound",
            items: [
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
                itemKey: "picking-jobs",
                text: "Picking Jobs",
                path: "/fulfillment/outbound/picking-jobs",
              },
              {
                itemKey: "packing-jobs",
                text: "Packing Jobs",
                path: "/fulfillment/outbound/packing-jobs",
              },
            ],
          },
        ],
      },
      {
        itemKey: "merchants",
        text: "Merchants",
        path: "/merchants/",
        icon: <ContactsOutlined />,
      },
      {
        itemKey: "stores",
        text: "Stores",
        path: "/stores/",
        icon: <ShopOutlined />,
      },
      {
        itemKey: "products",
        text: "Product",
        path: "/products/",
        icon: <ProductOutlined />,
      },
      {
        itemKey: "orders",
        text: "Orders",
        path: "/orders/",
        icon: <SnippetsOutlined />,
      },
    ],
    []
  );
  return { MENU_PATHS };
};

export default useMenu;
