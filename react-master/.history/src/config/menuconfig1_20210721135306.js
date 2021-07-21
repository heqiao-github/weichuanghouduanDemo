const menuConfig1 = [
  {
    title:"首页",
    key:"/"
  },
  {
    title: "用户中心",
    key: "/userCenter",
    children: [
      {
        key: "/user",
        title: '用户'
      },
      {
        key: "/role",
        title: '角色'
      }
    ]
  },
  {
    key: "/me",
    title: "个人中心"
  }
]

export default menuConfig1;