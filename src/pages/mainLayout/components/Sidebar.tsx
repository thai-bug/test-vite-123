import { Nav } from '@douyinfe/semi-ui';
import { Link } from '@tanstack/react-router';
import { useMemo } from 'react';

// Define navigation items
const navItems = [
  {
    itemKey: 'fulfillments',
    text: 'Fulfillments',
    items: [
      {
        itemKey: "fulfillments-inbound",
        text: "Inbound",
        items: [
          {
            itemKey: "fulfillments-inbound-orders",
            text: "Orders",
            link: "/fulfillments/inbound/orders",
          },
          {
            itemKey: "fulfillments-inbound-storages",
            text: "Storages",
            link: "/fulfillments/inbound/storages",
          },
          {
            itemKey: "fulfillments-inbound-storage-labels",
            text: "Storage Labels",
            link: "/fulfillments/inbound/storage-labels",
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
            link: "/fulfillments/outbound/picking-job",
          },
        ],
      },
    ],
  },
  {
    itemKey: 'merchants',
    text: 'Merchants',
    link: '/merchants'
  },
  {
    itemKey: 'orders',
    text: 'Orders',
    link: '/orders',

  },
];

const Sidebar = () => {
  const items = useMemo(() => navItems, []); // Memoize items for better performance


  return (
    <div>
      <Nav
        bodyStyle={{ height: "100%" }}
        items={items}
      />
    </div>
  );
};

export default Sidebar;
