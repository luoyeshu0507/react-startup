
import {message} from 'antd'
import { observable, action } from 'mobx'
import axios from 'axios'

export default class {
  @observable userInfo = null
  @observable userLevel = 0
  @observable isLogining = false
  @observable firstLoad = true
  // 登出刷新页面处理
  @observable isLogoutWaiting = false

  // 头像
  @observable imageHash=0
  @action 
  changeImageHash =()=>{
    this.imageHash=Math.random()
  }


  @action
  login(user) {
    this.isLogining = true
    axios.post(`/api/user/login`, {
      username: user.username,
      password: user.password
    })
    .then(
      res => {
        this.getUserInfo();
        this.changeImageHash()
      },
      action(
        err => {
          this.isLogining = false
        }
      )
    )
    //just
    // this.userLevel =parseInt(user.username || 1);
  }

  @action
  loginOut() {
    if (this.userLevel === 0) return;
    this.userLevel = 0
    
    this.isLogoutWaiting = true
    axios.get(`/api/user/logout`)
    .then(
      action(res => {
        // debugger
        // window.location.reload()
        // this.userLevel = 0
        this.isLogoutWaiting = false
      }),
      action(() => {
        // debugger
        // window.location.reload()
        // this.userLevel = 0
        
        location.reload()//刷新了isLogoutWaiting自动变为false
        
        // this.firstLoad = true
        // 第一次登出的时候进入logout请求,此时从有用户状态切入登出，不能让logoutWaiting=false，否则就会弹出登录框
        // if(this.userLevel!=0){
        //   this.isLogoutWaiting = true
        // }else{
        //   this.isLogoutWaiting = false
        // }
        // this.userLevel = 0
        // this.isLogoutWaiting = false

      })
    )
  }

  @action
  getUserInfo() {
    axios.get(`/api/user/info`)
    .then(
      action(res => {
        this.isLogining = false
        this.userLevel = parseInt(res.level)
        this.userInfo = res
        if (this.firstLoad) {
          this.firstLoad = false
        }
      }),
      action(
        err => {
          this.isLogining = false
            if (this.firstLoad) {
            this.firstLoad = false
          }
        }
      )
    )
  }

  @action
  updateUserInfo=(data)=>{
    return axios.post('/api/user/info',data)
    // .then(()=>{message.success('修改成功,请重新登录')},()=>{message.error('修改失败，请重试！')})
  }
}