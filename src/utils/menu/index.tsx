import { IconHome, IconUser } from "@douyinfe/semi-icons";

export const MenuItems = [
  {
    label: "Home",
    icon: <IconHome />,
    path: "/",
    key: "home"
  },
  {
    label: "Fulfillments ",
    icon: <IconHome />,
    key: "Fulfillments ",
    items: [
      {
        label: "Inbound ",
        icon: <IconHome />,
        key: "inbound",
        items1: [
          {
            label: "Orders",
            icon: <IconHome />,
            path: "/fulfillment/inbound/orders",
            key: "inbound-orders"
          },
          {
            label: "Storages ",
            icon: <IconHome />,
            path: "/fulfillment/inbound/storages",
            key: "storages"
          },
          {
            label: "Storage Labels ",
            icon: <IconHome />,
            path: "/fulfillment/inbound/storage-labels",
            key: "storage-labels"
          },
        ]
      },
      {
        label: "Outbound ",
        icon: <IconHome />,
        key: "outbound",
        items1: [
          {
            label: "Picking Job",
            icon: <IconHome />,
            path: "/fulfillment/outbound/picking-job",
            key: "picking-job"
          }
        ]
      }
    ]
  },
  {
    label: "Merchants ",
    icon: <IconHome />,
    path: "/merchants",
    key: "merchants"
  },
  {
    label: "Orders ",
    icon: <IconUser />,
    path: "/orders",
    key: "orders"
  },
];
