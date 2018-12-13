import React, { Component } from 'react';
import {connect} from 'react-redux';

import {setKeyContentSort} from '../../store/actions';

import './KeyContent.styl';

class KeyContent extends Component {
  state={
    isOn:0
  }

  handleSort=(isOn)=>{
    this.setState({
      isOn
    });
    this.props.setKeyContentSort(isOn);
  }

  render() {
    let {props,state,handleSort} =this;
    let {goods}=props;
    let {isOn} =state;
    return (
      <div className="wrap-key">
        <div className="top">
          <span></span>
          <span></span>
          <input type="text" onClick={()=>this.props.history.replace('/search')}/>
          <div className="conditions">
            <div className={isOn==0?"on":null} onClick={()=>handleSort(0)} >综合</div>
            <div className={isOn==1?"on":null} onClick={()=>handleSort(1)} >价格高到低</div>
            <div className={isOn==2?"on":null} onClick={()=>handleSort(2)} >价格低到高</div>
          </div>
        </div>

        <ul>
          {
            goods?goods.map((item,index)=>(
              <li key={index}>
                <a href={`http://m.you.163.com/item/detail?id=${item.id}&_stat_area=0&_stat_referer=search&_stat_query=%E6%8C%89%E6%91%A9&_stat_count=40#/?_k=7ywltw`}>
                  <img src={item.listPicUrl} alt="" />
                  <div className="up">{item.simpleDesc}</div>
                  <div className="down">{item.name}</div>
                  <span className="new">¥{item.retailPrice}</span>
                  <span className="old">{item.counterPrice == item.retailPrice ? "" : `¥${item.counterPrice}`}</span>
                </a>
              </li>
            )):null
          }
          
        </ul>
      </div>
    );
  }
}

export default connect(
  (state)=>({goods:state.Search.keyContent}),
  {setKeyContentSort}
)(KeyContent);
