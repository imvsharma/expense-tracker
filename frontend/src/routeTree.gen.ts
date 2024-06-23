/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as LoginImport } from './routes/login'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as LayoutDashboardImport } from './routes/_layout/dashboard'
import { Route as LayoutUserIndexImport } from './routes/_layout/user/index'
import { Route as LayoutUserSettingsImport } from './routes/_layout/user/settings'
import { Route as LayoutUserChangepasswordImport } from './routes/_layout/user/changepassword'
import { Route as LayoutUserAccountinfoImport } from './routes/_layout/user/accountinfo'
import { Route as LayoutUserSettingsProfileImport } from './routes/_layout/user/settings/profile'
import { Route as LayoutUserSettingsAppearanceImport } from './routes/_layout/user/settings/appearance'
import { Route as LayoutUserSettingsAccountImport } from './routes/_layout/user/settings/account'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutDashboardRoute = LayoutDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutUserIndexRoute = LayoutUserIndexImport.update({
  path: '/user/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutUserSettingsRoute = LayoutUserSettingsImport.update({
  path: '/user/settings',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutUserChangepasswordRoute = LayoutUserChangepasswordImport.update({
  path: '/user/changepassword',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutUserAccountinfoRoute = LayoutUserAccountinfoImport.update({
  path: '/user/accountinfo',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutUserSettingsProfileRoute = LayoutUserSettingsProfileImport.update({
  path: '/profile',
  getParentRoute: () => LayoutUserSettingsRoute,
} as any)

const LayoutUserSettingsAppearanceRoute =
  LayoutUserSettingsAppearanceImport.update({
    path: '/appearance',
    getParentRoute: () => LayoutUserSettingsRoute,
  } as any)

const LayoutUserSettingsAccountRoute = LayoutUserSettingsAccountImport.update({
  path: '/account',
  getParentRoute: () => LayoutUserSettingsRoute,
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
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/_layout/dashboard': {
      id: '/_layout/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof LayoutDashboardImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/user/accountinfo': {
      id: '/_layout/user/accountinfo'
      path: '/user/accountinfo'
      fullPath: '/user/accountinfo'
      preLoaderRoute: typeof LayoutUserAccountinfoImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/user/changepassword': {
      id: '/_layout/user/changepassword'
      path: '/user/changepassword'
      fullPath: '/user/changepassword'
      preLoaderRoute: typeof LayoutUserChangepasswordImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/user/settings': {
      id: '/_layout/user/settings'
      path: '/user/settings'
      fullPath: '/user/settings'
      preLoaderRoute: typeof LayoutUserSettingsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/user/': {
      id: '/_layout/user/'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof LayoutUserIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/user/settings/account': {
      id: '/_layout/user/settings/account'
      path: '/account'
      fullPath: '/user/settings/account'
      preLoaderRoute: typeof LayoutUserSettingsAccountImport
      parentRoute: typeof LayoutUserSettingsImport
    }
    '/_layout/user/settings/appearance': {
      id: '/_layout/user/settings/appearance'
      path: '/appearance'
      fullPath: '/user/settings/appearance'
      preLoaderRoute: typeof LayoutUserSettingsAppearanceImport
      parentRoute: typeof LayoutUserSettingsImport
    }
    '/_layout/user/settings/profile': {
      id: '/_layout/user/settings/profile'
      path: '/profile'
      fullPath: '/user/settings/profile'
      preLoaderRoute: typeof LayoutUserSettingsProfileImport
      parentRoute: typeof LayoutUserSettingsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  LayoutRoute: LayoutRoute.addChildren({
    LayoutDashboardRoute,
    LayoutUserAccountinfoRoute,
    LayoutUserChangepasswordRoute,
    LayoutUserSettingsRoute: LayoutUserSettingsRoute.addChildren({
      LayoutUserSettingsAccountRoute,
      LayoutUserSettingsAppearanceRoute,
      LayoutUserSettingsProfileRoute,
    }),
    LayoutUserIndexRoute,
  }),
  LoginRoute,
  SignupRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/login",
        "/signup"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/dashboard",
        "/_layout/user/accountinfo",
        "/_layout/user/changepassword",
        "/_layout/user/settings",
        "/_layout/user/"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/_layout/dashboard": {
      "filePath": "_layout/dashboard.tsx",
      "parent": "/_layout"
    },
    "/_layout/user/accountinfo": {
      "filePath": "_layout/user/accountinfo.tsx",
      "parent": "/_layout"
    },
    "/_layout/user/changepassword": {
      "filePath": "_layout/user/changepassword.tsx",
      "parent": "/_layout"
    },
    "/_layout/user/settings": {
      "filePath": "_layout/user/settings.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/user/settings/account",
        "/_layout/user/settings/appearance",
        "/_layout/user/settings/profile"
      ]
    },
    "/_layout/user/": {
      "filePath": "_layout/user/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/user/settings/account": {
      "filePath": "_layout/user/settings/account.tsx",
      "parent": "/_layout/user/settings"
    },
    "/_layout/user/settings/appearance": {
      "filePath": "_layout/user/settings/appearance.tsx",
      "parent": "/_layout/user/settings"
    },
    "/_layout/user/settings/profile": {
      "filePath": "_layout/user/settings/profile.tsx",
      "parent": "/_layout/user/settings"
    }
  }
}
ROUTE_MANIFEST_END */
