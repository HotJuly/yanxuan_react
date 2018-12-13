import React, { Component } from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import './AppFooter.styl';


class AppFooter extends Component {


    handlC=(path)=>{
        return ()=>{
            this.props.history.replace(path);
        }
    }
  render() {
    return (
        <footer className="footer_guide border-1px">
            <NavLink to="/home"  className="guide_item">
                <span className="item_icon">
                    <i className="icon icon_home"></i>
                </span> 
                <span>首页</span>
            </NavLink>
            <NavLink to="/classify"  className="guide_item">
                <span className="item_icon">
                    <i className="icon icon_classify"></i>
                </span> 
                <span>分类</span>
            </NavLink>
            <NavLink to="/topic"  className="guide_item">
                <span className="item_icon">
                    <i className="icon icon_topic"></i>
                </span> 
                <span>识物</span>
            </NavLink>
            <NavLink to="/shopcart"  className="guide_item">
                <span className="item_icon">
                    <i className="icon icon_shopcart"></i>
                </span> 
                <span>购物车</span>
            </NavLink>
            <NavLink to="/login"  className="guide_item">
                <span className="item_icon">
                    <i className="icon icon_login"></i>
                </span> 
                <span>我的</span>
            </NavLink>
        </footer>
    );
  }
}

export default withRouter(AppFooter);
