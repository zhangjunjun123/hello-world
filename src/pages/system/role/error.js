import NotFound from '@/pages/error/404'
import AccessDenied from '@/pages/error/403'
import InternalErrors from '@/pages/error/50x'

let routes = [
  {
    path: '/401',
    name: 'NotAllow',
    hidden: true,
    component: AccessDenied
  },
  {
    path: '/403',
    name: 'AccessDenied',
    hidden: true,
    component: AccessDenied
  },
  {
    path: '/404',
    hidden: true,
    component: NotFound
  },
  {
    path: '/50x',
    hidden: true,
    component: InternalErrors
  }
]

export default routes
