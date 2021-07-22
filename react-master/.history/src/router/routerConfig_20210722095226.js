import Home from '../pages/Home/Home';
import User from '../pages/Home/Home';
import UserList from '../pages/User/user';
import Role from '../pages/role/Role';
import News from '../components/News';
import Login from '../pages/login/login';
import NotFound from '../components/NotFound';

let routerConfig = [
    {
      path: "/",
      component: Home,
      exact:true,
      name: "首页",
      auth: true,
      children:[],
    },
    {
      path: "/login",
      component: Login,
      name: "登录",
      children:[],
    },
    {
      path: "/404",
      component: NotFound,
      name: "报错",
      auth: false,
      children:[],
    },
    {
      path: "/userCenter",
      component: User,
      name: "用户中心",
      children:[   /*嵌套路由*/
        {
          path: "/user",
          component: UserList,
          name: "用户",
          auth: true,
        },
        {
          path: "/role",
          component: Role,
          name: "角色",
          auth: true,
        },
      ]
    },
    {
      path: "/me",
      component: News,
      name: "个人中心",
      auth: true,
      children:[],
    }
];
export {
  routerConfig,
}