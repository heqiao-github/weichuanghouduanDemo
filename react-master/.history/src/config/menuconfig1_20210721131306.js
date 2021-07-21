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
    key: "/news",
    title: "新闻"
  }
]

export default menuConfig1;