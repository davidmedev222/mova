export enum Routes {
  welcome = '/welcome',
  login = '/login',
  register = '/register',
  home = '/',
  category = '/category/[name]',
  movie = '/movie/[id]',
  explore = '/explore',
  mylist = '/my-list',
  download = '/download',
  profile = '/profile'
}
export enum StackRoutes {
  welcome = 'welcome/index',
  login = 'login/index',
  register = 'register/index',
  home = 'index',
  category = 'category/[name]/index',
  movie = 'movie/[id]/index',
  explore = 'explore/index',
  mylist = 'my-list/index',
  download = 'download/index',
  profile = 'profile/index'
}
