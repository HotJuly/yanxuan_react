import React, { Component } from 'react';

import './RecommendItem.styl';

class RecommendItem extends Component {
 
  // static propTypes={

  // }
  
  render() {
    const {card}=this.props;
    return (
      <div className="tpl-rec">
        <a href={card.schemeUrl}>
            <div className="name">
                <span className="ava">
                    <img src={card.avatar} />
                </span>
                <span>{card.nickname}</span>
            </div>
            <div className="title">{card.title}</div>
            <div className="pic">
                <img src={card.picUrl}/>
            </div>
            <div className="rcount">
                <i className="icon"></i>
                <span>{(card.readCount/1000).toFixed(1)}k人看过</span>
            </div>
        </a>
    </div>
    );
  }
}

export default RecommendItem;
