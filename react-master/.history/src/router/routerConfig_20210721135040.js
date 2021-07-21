import Home from '../pages/Home/Home';
import User from '../pages/Home/Home';
import UserList from '../pages/User/user';
import Role from '../pages/role/Role';
import News from '../components/News';
import Login from '../pages/login/login';

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
      component: Login,
      name: "报错",
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
      path: "/news",
      component: News,
      name: "新闻",
      auth: true,
      children:[],
    }
];
export {
  routerConfig,
}