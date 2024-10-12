import { Link } from '@tanstack/react-router'
import { Nav } from '@douyinfe/semi-ui';

const Sidebar = () => {
  return (
    <div >
      <Nav
        bodyStyle={{ height: 320 }}
        items={[
          {
            itemKey: 'fulfillments ',
            text: 'Fulfillments ',
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
                    itemKey: "fulfillments-inbound-storages ",
                    text: "Storages ",
                    link: "/fulfillments/inbound/storages ",
                  },
                  {
                    itemKey: "fulfillments-inbound-storage-labels ",
                    text: "Storage Labels ",
                    link: "/fulfillments/inbound/storage-labels/",
                  },
                ]
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
                ]
              }
            ]
          },
          {
            itemKey: 'merchants',
            text: 'Merchants',
            link: "/merchants"
          },
          {
            itemKey: 'orders',
            text: 'Orders',
            link: "/orders"
          },
        ]}
      />
    </div>
  )
}

export default Sidebar