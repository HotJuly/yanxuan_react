import React from "react"
import "./index.styl"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {Toast} from 'antd-mobile'


class Login extends React.Component {

    state={
        isHome:true,
        isUser:false,
        isPhone:false,
    }

    selectLogin=(isHome,isUser,isPhone)=>{
        this.setState({
            ...this.state,
            isHome,
            isUser,
            isPhone
        })
    }

    sendCode=()=>{
        this.props.sendCode(this.refs.phone);
    }

    render() {
        let {state,selectLogin} =this;
        let {isUser,isPhone,isHome}=state;
        let time;
        
        return (
            <div>
                <div style={{height: '44px'}} className="hdWraper">
                    <div className="m-hd">
                        <div className="m-topBar">
                            <div className="bd">
                                <div className="row">
                                    <a className="u-icon u-icon-home"></a>
                                    <a href="javascript:;"><i className="logo u-icon u-icon-logo"></i></a>
                                    <div className="right">
                                        <a href="javascript:;" className="search">
                                            <li className="u-icon u-icon-search1"></li>
                                        </a>
                                        <a href="javascript:;" className="cart">
                                            <li className="u-icon u-icon-cart"></li>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    isHome ? (<div style={{height: '623px'}} className="loginTypesWrap">
                        <div className="m-loginTypes">
                            <div className="cont">
                                <div className="logoWrap">
                                    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
                                </div>
                                <div className="btnWrap">
                                    <div className="w-button w-button-xl w-button-block" onClick={()=>selectLogin(false,false,true)}>
                                        <i className="u-icon u-icon-loginPhone"></i>
                                        <span>手机号码登录</span>
                                    </div>
                                    <div className="w-button w-button-xl w-button-block w-button-ghostRed" onClick={()=>selectLogin(false,true,false)}>
                                        <i className="u-icon u-icon-loginMail"></i>
                                        <span>用户账号登录</span>
                                    </div>
                                    <div className="btn">
                                        <span>手机号快捷注册</span>
                                        <i className="u-icon u-icon-arrow-right3"></i>
                                    </div>

                                </div>
                            </div>
                            <div className="thirdWrap">
                                <div className="itemWrap">
                                    <span className="item">
                                        <i className="icon icon-weixin"></i>
                                    <span className="name">微信</span>
                                    </span>
                                </div>
                                <div className="itemWrap">
                                    <span className="item">
                                        <i className="icon icon-qq"></i>
                                    <span className="name">QQ</span>
                                    </span>
                                </div>
                                <div className="itemWrap">
                                    <span className="item">
                                        <i className="icon icon-weibo"></i>
                                    <span className="name">微博</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>) : null
                }

                {
                    isPhone ? (<div className="loginWrap loginWrap-1">
                        <div className="view">
                            <div id="logo1">
                                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
                                <div id="loginPhone">
                                    <div className="phone">
                                        <input type="text" maxLength="11" placeholder="请输入手机号" ref="phone"/>
                                    </div>
                                    <div className="code">
                                        <input type="text" maxLength="6" placeholder="请输入验证码" ref="code"/>
                                        <button disabled={time>0 ? true : false}>{time==0 ? "获取验证码" : `已发送${time}s`}</button>
                                    </div>
                                    <div className="denglu">
                                        登录
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="foot">
                            <div className="w-button w-button-xl w-button-block w-button-ghostRed" onClick={()=>selectLogin(true,false,false)}>
                                <span>其他登录方式</span>
                            </div>
                            <div className="btn btn-1"><span>注册帐号</span><i className="u-icon u-icon-arrow-right3"></i>
                            </div>
                        </div>
                    </div>) : null
                }

                {
                    isUser ? (<div className="loginWrap loginWrap-1">
                        <div className="view">
                            <div id="logo2">
                                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
                                <div id="username">
                                    <div className="name">
                                        <input type="text" ref="name" placeholder="请输入用户名" />
                                    </div>
                                    <div className="code">
                                        <input type="password" maxLength="8" ref="pwd" placeholder="请输入密码" />
                                    </div>
                                    <div className="denglu">
                                        登录
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="foot">
                            <div className="w-button w-button-xl w-button-block w-button-ghostRed" onClick={()=>selectLogin(true,false,false)}>
                                <span>其他登录方式</span>
                            </div>
                            <div className="btn btn-1"><span>注册帐号</span><i className="u-icon u-icon-arrow-right3"></i>
                            </div>
                        </div>
                    </div>) : null
                }

            </div>
        )
    }

}
export default connect(
    state => ({}),
    {}
)(Login)
