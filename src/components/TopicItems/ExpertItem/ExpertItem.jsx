import React, { Component } from 'react';

import './ExpertItem.styl';

class ExpertItem extends Component {
 
  // static propTypes={

  // }
  
  render() {
    const {card}=this.props;
    return (
        <div className="tps2-exp">
            <a href={card.schemeUrl}>
                <div className="info">
                    <div className="info">
                        <div className="name">
                            <span className="ava">
                                <img src={card.avatar} alt="" width="100%" height="100%" />
                            </span>
                            <span>{card.nickname}</span>
                        </div>
                        <div className="title">{card.title}</div>
                        <div className="desc">{card.subTitle}</div>
                        <div className="rcount">
                            <i className="icon"></i>
                            <span>{(card.readCount/1000).toFixed(1)}k人看过</span>
                        </div>
                    </div>
                </div>
                <div className="pic" style={{background:`url(${card.picUrl})`,backgroundSize:"auto 100%",backgroundPositionX:"50%"}}>
                </div>
            </a>
        </div>
    );
  }
}

export default ExpertItem;
