import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './HomeItem.styl';

class HomeItem extends Component {
 
  static propTypes={
    card:PropTypes.object.isRequired
  }
  
  render() {
    const {card}=this.props;
    return (
        <div className="m-tpls m-tpls-rec">
            <a href={card.schemeUrl}>
                <div className="title">{card.title}</div>
                <div className="u-pic">
                    <img src={card.picUrl} alt="" width="100%" height="100%" />
                </div>
                <div className="u-rcount">
                    <i className="ico"></i>
                    <span>{card.readCount/1000}k人看过</span>
                </div>
            </a>
        </div>
    );
  }
}

export default HomeItem;
