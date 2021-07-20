import Home from '../pages/Home/Home';
import User from '../pages/Home/Home';
import UserList from '../pages/';
import UserAdd from '../components/User/UserAdd';
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
      path: "/user",
      component: User,
      name: "用户中心",
      children:[   /*嵌套路由*/
        {
          path: "/user/",
          component: UserList,
          name: "用户",
          auth: true,
        },
        {
          path: "/user/add",
          component: UserAdd,
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