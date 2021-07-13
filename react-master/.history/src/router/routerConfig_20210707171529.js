import Home from '../components/User';
import User from '../components/User';
import UserList from '../components/User/UserList';
import UserAdd from '../components/User/UserAdd';
import UserEdit from '../components/User/UserEdit.js';
import Shop from '../components/Shop';
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
      path: "/shop",
      component: Shop,
      name: "商店",
      children:[],
      auth: true,
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
      name: "用户",
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
          name: "增加",
          auth: true,
        },
        {
          path: "/user/edit",
          component: UserEdit,
          name: "编辑",
          auth: true,
        }
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