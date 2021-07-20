import request from '../utils/request';

const reqRoleList = () => {
  return request({
    method: "GET",
    url: "/api/user/getRoleList"
  })
}

const reqAddRole = (data) => {
  return request({
    method: "POST",
    url: "/api/user/roleAdd",
    data: data
  })
}

const reqUpdateRole = (data) => {
  return request({
    method: "POST",
    url: "/api/manage/role/update",
    data: data
  })
}

export {
  reqRoleList,
  reqAddRole,
  reqUpdateRole
}