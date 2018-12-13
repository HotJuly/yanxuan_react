import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route,NavLink} from 'react-router-dom';
import BScroll from 'better-scroll';

import {getShiWuTabs} from '../../store/actions';
import TopicList from './TopicContent/TopicList.jsx';
import './Topic.styl';

class Topic extends Component {
  state={
    curIndex:9
  }

  handleC=(path)=>{
    this.props.history.replace(path);
  }

  toggleList=(index)=>{
    this.setState({
      curIndex:index
    })
  }

  _initBScroll=()=>{
    this.setState({},()=>{
        new BScroll('.scroll',{
            click:true
        })
    });
}

  componentDidMount(){
    this.props.getShiWuTabs({cb:this._initBScroll})
  }

  render() {
    const {handleC,toggleList,props,state}=this;
    let {ShiWuTabs} =props.ShiWu;
    let {curIndex} = state;
    return (
      <div id="topic">
        <div className="header">
            <div className="wrap">
                <div className="home" onClick={()=>{ handleC('/home')}}></div>
                <div className="title">
                    <a href="#" className="item active">发现</a>
                    <a href="#" className="item">甄选家</a>
                </div>
                <div className="util">
                    <div className="search" onClick={()=>{ handleC('/search')}}></div>
                    <div className="shopcart" onClick={()=>{ handleC('/shopcart')}}></div>
                </div>
            </div>
            <div className="scroll">
                <div className="flexbox">
                {
                  ShiWuTabs?ShiWuTabs.map((tab,index)=>(
                    // <div className={curIndex==tab.tabId?"item active":"item"}  key={tab.tabId} onClick={()=>toggleList(tab.tabId)}>{tab.tabName}</div>
                    <NavLink to={`/topic/${tab.tabId}`} className="item"  key={tab.tabId}>{tab.tabName}</NavLink>
                  )):null
                }
                </div>
            </div>
        </div>
        <Route path="/topic/:id" component={TopicList}  />
        {/* <TopicList id={curIndex}  /> */}
    </div>
    );
  }
}

export default connect(
  (state)=>({ShiWu:state.ShiWu}),
  {getShiWuTabs}
)(Topic);
