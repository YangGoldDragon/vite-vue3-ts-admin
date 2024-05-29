import request from "@/utils/request";

// 登录
export function loginAPI(data) {
  return request({
    url: "/api/user/login",
    method: "post",
    data,
  });
}
