/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as StoresIndexImport } from './routes/stores/index'
import { Route as ProductIndexImport } from './routes/product/index'
import { Route as OrdersIndexImport } from './routes/orders/index'
import { Route as MerchantsIndexImport } from './routes/merchants/index'
import { Route as LoginIndexImport } from './routes/login/index'
<<<<<<< HEAD
import { Route as StoresIdImport } from './routes/stores/$id'
import { Route as ProductCreateImport } from './routes/product/create'
import { Route as ProductIdImport } from './routes/product/$id'
=======
import { Route as StoresSlugImport } from './routes/stores/$slug'
>>>>>>> main
import { Route as OrdersIdImport } from './routes/orders/$id'
import { Route as FulfillmentOutboundPickingJobIndexImport } from './routes/fulfillment/outbound/picking-job/index'
import { Route as FulfillmentInboundStoragesIndexImport } from './routes/fulfillment/inbound/storages/index'
import { Route as FulfillmentInboundStorageLabelsIndexImport } from './routes/fulfillment/inbound/storage-labels/index'
import { Route as FulfillmentInboundOrdersIndexImport } from './routes/fulfillment/inbound/orders/index'
import { Route as FulfillmentInboundStorageLabelsCodeImport } from './routes/fulfillment/inbound/storage-labels/$code'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const StoresIndexRoute = StoresIndexImport.update({
  path: '/stores/',
  getParentRoute: () => rootRoute,
} as any)

const ProductIndexRoute = ProductIndexImport.update({
  path: '/product/',
  getParentRoute: () => rootRoute,
} as any)

const OrdersIndexRoute = OrdersIndexImport.update({
  path: '/orders/',
  getParentRoute: () => rootRoute,
} as any)

const MerchantsIndexRoute = MerchantsIndexImport.update({
  path: '/merchants/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const StoresSlugRoute = StoresSlugImport.update({
  path: '/stores/$slug',
  getParentRoute: () => rootRoute,
} as any)

const ProductCreateRoute = ProductCreateImport.update({
  path: '/product/create',
  getParentRoute: () => rootRoute,
} as any)

const ProductIdRoute = ProductIdImport.update({
  path: '/product/$id',
  getParentRoute: () => rootRoute,
} as any)

const OrdersIdRoute = OrdersIdImport.update({
  path: '/orders/$id',
  getParentRoute: () => rootRoute,
} as any)

const FulfillmentOutboundPickingJobIndexRoute =
  FulfillmentOutboundPickingJobIndexImport.update({
    path: '/fulfillment/outbound/picking-job/',
    getParentRoute: () => rootRoute,
  } as any)

const FulfillmentInboundStoragesIndexRoute =
  FulfillmentInboundStoragesIndexImport.update({
    path: '/fulfillment/inbound/storages/',
    getParentRoute: () => rootRoute,
  } as any)

const FulfillmentInboundStorageLabelsIndexRoute =
  FulfillmentInboundStorageLabelsIndexImport.update({
    path: '/fulfillment/inbound/storage-labels/',
    getParentRoute: () => rootRoute,
  } as any)

const FulfillmentInboundOrdersIndexRoute =
  FulfillmentInboundOrdersIndexImport.update({
    path: '/fulfillment/inbound/orders/',
    getParentRoute: () => rootRoute,
  } as any)

const FulfillmentInboundStorageLabelsCodeRoute =
  FulfillmentInboundStorageLabelsCodeImport.update({
    path: '/fulfillment/inbound/storage-labels/$code',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/orders/$id': {
      id: '/orders/$id'
      path: '/orders/$id'
      fullPath: '/orders/$id'
      preLoaderRoute: typeof OrdersIdImport
      parentRoute: typeof rootRoute
    }
<<<<<<< HEAD
    '/product/$id': {
      id: '/product/$id'
      path: '/product/$id'
      fullPath: '/product/$id'
      preLoaderRoute: typeof ProductIdImport
      parentRoute: typeof rootRoute
    }
    '/product/create': {
      id: '/product/create'
      path: '/product/create'
      fullPath: '/product/create'
      preLoaderRoute: typeof ProductCreateImport
      parentRoute: typeof rootRoute
    }
    '/stores/$id': {
      id: '/stores/$id'
      path: '/stores/$id'
      fullPath: '/stores/$id'
      preLoaderRoute: typeof StoresIdImport
=======
    '/stores/$slug': {
      id: '/stores/$slug'
      path: '/stores/$slug'
      fullPath: '/stores/$slug'
      preLoaderRoute: typeof StoresSlugImport
>>>>>>> main
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/merchants/': {
      id: '/merchants/'
      path: '/merchants'
      fullPath: '/merchants'
      preLoaderRoute: typeof MerchantsIndexImport
      parentRoute: typeof rootRoute
    }
    '/orders/': {
      id: '/orders/'
      path: '/orders'
      fullPath: '/orders'
      preLoaderRoute: typeof OrdersIndexImport
      parentRoute: typeof rootRoute
    }
    '/product/': {
      id: '/product/'
      path: '/product'
      fullPath: '/product'
      preLoaderRoute: typeof ProductIndexImport
      parentRoute: typeof rootRoute
    }
    '/stores/': {
      id: '/stores/'
      path: '/stores'
      fullPath: '/stores'
      preLoaderRoute: typeof StoresIndexImport
      parentRoute: typeof rootRoute
    }
    '/fulfillment/inbound/storage-labels/$code': {
      id: '/fulfillment/inbound/storage-labels/$code'
      path: '/fulfillment/inbound/storage-labels/$code'
      fullPath: '/fulfillment/inbound/storage-labels/$code'
      preLoaderRoute: typeof FulfillmentInboundStorageLabelsCodeImport
      parentRoute: typeof rootRoute
    }
    '/fulfillment/inbound/orders/': {
      id: '/fulfillment/inbound/orders/'
      path: '/fulfillment/inbound/orders'
      fullPath: '/fulfillment/inbound/orders'
      preLoaderRoute: typeof FulfillmentInboundOrdersIndexImport
      parentRoute: typeof rootRoute
    }
    '/fulfillment/inbound/storage-labels/': {
      id: '/fulfillment/inbound/storage-labels/'
      path: '/fulfillment/inbound/storage-labels'
      fullPath: '/fulfillment/inbound/storage-labels'
      preLoaderRoute: typeof FulfillmentInboundStorageLabelsIndexImport
      parentRoute: typeof rootRoute
    }
    '/fulfillment/inbound/storages/': {
      id: '/fulfillment/inbound/storages/'
      path: '/fulfillment/inbound/storages'
      fullPath: '/fulfillment/inbound/storages'
      preLoaderRoute: typeof FulfillmentInboundStoragesIndexImport
      parentRoute: typeof rootRoute
    }
    '/fulfillment/outbound/picking-job/': {
      id: '/fulfillment/outbound/picking-job/'
      path: '/fulfillment/outbound/picking-job'
      fullPath: '/fulfillment/outbound/picking-job'
      preLoaderRoute: typeof FulfillmentOutboundPickingJobIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/orders/$id': typeof OrdersIdRoute
<<<<<<< HEAD
  '/product/$id': typeof ProductIdRoute
  '/product/create': typeof ProductCreateRoute
  '/stores/$id': typeof StoresIdRoute
=======
  '/stores/$slug': typeof StoresSlugRoute
>>>>>>> main
  '/login': typeof LoginIndexRoute
  '/merchants': typeof MerchantsIndexRoute
  '/orders': typeof OrdersIndexRoute
  '/product': typeof ProductIndexRoute
  '/stores': typeof StoresIndexRoute
  '/fulfillment/inbound/storage-labels/$code': typeof FulfillmentInboundStorageLabelsCodeRoute
  '/fulfillment/inbound/orders': typeof FulfillmentInboundOrdersIndexRoute
  '/fulfillment/inbound/storage-labels': typeof FulfillmentInboundStorageLabelsIndexRoute
  '/fulfillment/inbound/storages': typeof FulfillmentInboundStoragesIndexRoute
  '/fulfillment/outbound/picking-job': typeof FulfillmentOutboundPickingJobIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/orders/$id': typeof OrdersIdRoute
<<<<<<< HEAD
  '/product/$id': typeof ProductIdRoute
  '/product/create': typeof ProductCreateRoute
  '/stores/$id': typeof StoresIdRoute
=======
  '/stores/$slug': typeof StoresSlugRoute
>>>>>>> main
  '/login': typeof LoginIndexRoute
  '/merchants': typeof MerchantsIndexRoute
  '/orders': typeof OrdersIndexRoute
  '/product': typeof ProductIndexRoute
  '/stores': typeof StoresIndexRoute
  '/fulfillment/inbound/storage-labels/$code': typeof FulfillmentInboundStorageLabelsCodeRoute
  '/fulfillment/inbound/orders': typeof FulfillmentInboundOrdersIndexRoute
  '/fulfillment/inbound/storage-labels': typeof FulfillmentInboundStorageLabelsIndexRoute
  '/fulfillment/inbound/storages': typeof FulfillmentInboundStoragesIndexRoute
  '/fulfillment/outbound/picking-job': typeof FulfillmentOutboundPickingJobIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/orders/$id': typeof OrdersIdRoute
<<<<<<< HEAD
  '/product/$id': typeof ProductIdRoute
  '/product/create': typeof ProductCreateRoute
  '/stores/$id': typeof StoresIdRoute
=======
  '/stores/$slug': typeof StoresSlugRoute
>>>>>>> main
  '/login/': typeof LoginIndexRoute
  '/merchants/': typeof MerchantsIndexRoute
  '/orders/': typeof OrdersIndexRoute
  '/product/': typeof ProductIndexRoute
  '/stores/': typeof StoresIndexRoute
  '/fulfillment/inbound/storage-labels/$code': typeof FulfillmentInboundStorageLabelsCodeRoute
  '/fulfillment/inbound/orders/': typeof FulfillmentInboundOrdersIndexRoute
  '/fulfillment/inbound/storage-labels/': typeof FulfillmentInboundStorageLabelsIndexRoute
  '/fulfillment/inbound/storages/': typeof FulfillmentInboundStoragesIndexRoute
  '/fulfillment/outbound/picking-job/': typeof FulfillmentOutboundPickingJobIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/orders/$id'
<<<<<<< HEAD
    | '/product/$id'
    | '/product/create'
    | '/stores/$id'
=======
    | '/stores/$slug'
>>>>>>> main
    | '/login'
    | '/merchants'
    | '/orders'
    | '/product'
    | '/stores'
    | '/fulfillment/inbound/storage-labels/$code'
    | '/fulfillment/inbound/orders'
    | '/fulfillment/inbound/storage-labels'
    | '/fulfillment/inbound/storages'
    | '/fulfillment/outbound/picking-job'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/orders/$id'
<<<<<<< HEAD
    | '/product/$id'
    | '/product/create'
    | '/stores/$id'
=======
    | '/stores/$slug'
>>>>>>> main
    | '/login'
    | '/merchants'
    | '/orders'
    | '/product'
    | '/stores'
    | '/fulfillment/inbound/storage-labels/$code'
    | '/fulfillment/inbound/orders'
    | '/fulfillment/inbound/storage-labels'
    | '/fulfillment/inbound/storages'
    | '/fulfillment/outbound/picking-job'
  id:
    | '__root__'
    | '/'
    | '/orders/$id'
<<<<<<< HEAD
    | '/product/$id'
    | '/product/create'
    | '/stores/$id'
=======
    | '/stores/$slug'
>>>>>>> main
    | '/login/'
    | '/merchants/'
    | '/orders/'
    | '/product/'
    | '/stores/'
    | '/fulfillment/inbound/storage-labels/$code'
    | '/fulfillment/inbound/orders/'
    | '/fulfillment/inbound/storage-labels/'
    | '/fulfillment/inbound/storages/'
    | '/fulfillment/outbound/picking-job/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  OrdersIdRoute: typeof OrdersIdRoute
<<<<<<< HEAD
  ProductIdRoute: typeof ProductIdRoute
  ProductCreateRoute: typeof ProductCreateRoute
  StoresIdRoute: typeof StoresIdRoute
=======
  StoresSlugRoute: typeof StoresSlugRoute
>>>>>>> main
  LoginIndexRoute: typeof LoginIndexRoute
  MerchantsIndexRoute: typeof MerchantsIndexRoute
  OrdersIndexRoute: typeof OrdersIndexRoute
  ProductIndexRoute: typeof ProductIndexRoute
  StoresIndexRoute: typeof StoresIndexRoute
  FulfillmentInboundStorageLabelsCodeRoute: typeof FulfillmentInboundStorageLabelsCodeRoute
  FulfillmentInboundOrdersIndexRoute: typeof FulfillmentInboundOrdersIndexRoute
  FulfillmentInboundStorageLabelsIndexRoute: typeof FulfillmentInboundStorageLabelsIndexRoute
  FulfillmentInboundStoragesIndexRoute: typeof FulfillmentInboundStoragesIndexRoute
  FulfillmentOutboundPickingJobIndexRoute: typeof FulfillmentOutboundPickingJobIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  OrdersIdRoute: OrdersIdRoute,
<<<<<<< HEAD
  ProductIdRoute: ProductIdRoute,
  ProductCreateRoute: ProductCreateRoute,
  StoresIdRoute: StoresIdRoute,
=======
  StoresSlugRoute: StoresSlugRoute,
>>>>>>> main
  LoginIndexRoute: LoginIndexRoute,
  MerchantsIndexRoute: MerchantsIndexRoute,
  OrdersIndexRoute: OrdersIndexRoute,
  ProductIndexRoute: ProductIndexRoute,
  StoresIndexRoute: StoresIndexRoute,
  FulfillmentInboundStorageLabelsCodeRoute:
    FulfillmentInboundStorageLabelsCodeRoute,
  FulfillmentInboundOrdersIndexRoute: FulfillmentInboundOrdersIndexRoute,
  FulfillmentInboundStorageLabelsIndexRoute:
    FulfillmentInboundStorageLabelsIndexRoute,
  FulfillmentInboundStoragesIndexRoute: FulfillmentInboundStoragesIndexRoute,
  FulfillmentOutboundPickingJobIndexRoute:
    FulfillmentOutboundPickingJobIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/orders/$id",
<<<<<<< HEAD
        "/product/$id",
        "/product/create",
        "/stores/$id",
=======
        "/stores/$slug",
>>>>>>> main
        "/login/",
        "/merchants/",
        "/orders/",
        "/product/",
        "/stores/",
        "/fulfillment/inbound/storage-labels/$code",
        "/fulfillment/inbound/orders/",
        "/fulfillment/inbound/storage-labels/",
        "/fulfillment/inbound/storages/",
        "/fulfillment/outbound/picking-job/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/orders/$id": {
      "filePath": "orders/$id.tsx"
    },
<<<<<<< HEAD
    "/product/$id": {
      "filePath": "product/$id.tsx"
    },
    "/product/create": {
      "filePath": "product/create.tsx"
    },
    "/stores/$id": {
      "filePath": "stores/$id.tsx"
=======
    "/stores/$slug": {
      "filePath": "stores/$slug.tsx"
>>>>>>> main
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/merchants/": {
      "filePath": "merchants/index.tsx"
    },
    "/orders/": {
      "filePath": "orders/index.tsx"
    },
    "/product/": {
      "filePath": "product/index.tsx"
    },
    "/stores/": {
      "filePath": "stores/index.tsx"
    },
    "/fulfillment/inbound/storage-labels/$code": {
      "filePath": "fulfillment/inbound/storage-labels/$code.tsx"
    },
    "/fulfillment/inbound/orders/": {
      "filePath": "fulfillment/inbound/orders/index.tsx"
    },
    "/fulfillment/inbound/storage-labels/": {
      "filePath": "fulfillment/inbound/storage-labels/index.tsx"
    },
    "/fulfillment/inbound/storages/": {
      "filePath": "fulfillment/inbound/storages/index.tsx"
    },
    "/fulfillment/outbound/picking-job/": {
      "filePath": "fulfillment/outbound/picking-job/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
