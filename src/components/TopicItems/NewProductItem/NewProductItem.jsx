import React, { Component } from 'react';

import './NewProductItem.styl';

class NewProductItem extends Component {
 
  // static propTypes={

  // }
  
  render() {
    const {card}=this.props;
    function imgList(itemList){
        if(itemList){
            return itemList.map((item)=>{
                if(item!==null){
                    return (
                        <li key={item.itemId}>
                            <img src={item.itemUrl} alt="" width="100%" height="100%" />
                        </li>
                    )
                }
            })
        }
    }
    return (
        <div className="m-tpls m-tpls-new">
            <a href={card.schemeUrl}>
                <div className="title">{card.title}</div>
                <div className="content">{card.subTitle}</div>
            </a>
            <ul className="m-gplist">
            {imgList(card.itemList)}
                
            </ul>
            <div className="u-rcount">
                <i className="ico"></i>
                <span>{(card.readCount/1000).toFixed(1)}k人看过</span>
            </div>
        </div>
    );
  }
}

export default NewProductItem;
