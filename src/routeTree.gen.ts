import { Route as IndexImport } from './routes/index'
import { Route as LoginImport } from './routes/Login'
import { Route as rootRoute } from './routes/__root'

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    },
    '/login': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
  }
}

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  LoginRoute,
})