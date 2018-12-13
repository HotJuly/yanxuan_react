import React, { Component } from 'react';
import {Switch,NavLink,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import BScroll from 'better-scroll';

import {getShiWuTabs,getShiWuInit,getShiWuMore,resetShiWuList} from '../../../store/actions';
import RecommendItem from "../../../components/TopicItems/RecommendItem/RecommendItem";
import ExpertItem from "../../../components/TopicItems/ExpertItem/ExpertItem.jsx";
import NewProductItem from "../../../components/TopicItems/NewProductItem/NewProductItem.jsx";
// import ImageItem from "../../../components/TopicItems/ImageItem.jsx";
import HomeItem from "../../../components/TopicItems/HomeItem/HomeItem.jsx";
import './TopicList.styl';

class TopicList extends Component {
  state={
    page: 1,
    id:9
  }

  

  newBScroll=()=>{
    this.setState({
      ...this.state
    },() => {
      this.bscroll = new BScroll(".list", {
        click: true,
        pullUpLoad:true
      });
      this.bscroll.on("pullingUp", () => {
        let {page,id}=this.state;
          page = page + 1;
          this.setState({
            ...this.state,
            page
          })
          if (id !== 7) {
            const cb=()=>{
              this.setState({},()=>{
                this.bscroll.finishPullUp();
                this.bscroll.refresh();
              })
            };

            this.props.getShiWuMore({
              id,
              page,
              cb
            });
          }
      });
    });
  }

  switchItem=(card,index)=>{
    switch (card.type) {
      case 1:
        return (<ExpertItem card={card} key={index}/>)
        break;
      case 2:
        return (<RecommendItem card={card} key={index}/>)
        break;
      // case 5:
      //   return (<ImageItem card={card} key={index}/>)
      //   break;
      case 7:
        return (<NewProductItem card={card} key={index}/>)
        break;
      case 8:
        return (<HomeItem card={card} key={index}/>)
        break;
      default:
        break;
    }
  }

  // componentWillReveiveProps(nextProps){
  //   console.log("newId")
  //   let newId=nextProps.id;
  //   if(newId!==this.state.id){
  //     this.setState({
  //       ...this.state,
  //       id:nextProps.newId
  //     })
  //   }
  // }

  componentDidUpdate(prevProps){
    let {id}=this.props.match.params;
    const cb = this.newBScroll;
    if(prevProps.match.params.id!==id){
      // this.id=id;
      this.props.resetShiWuList();
      if(id!==7){
        if (id == 9) {
          this.props.getShiWuInit({ cb });
        } else {
          this.props.getShiWuMore({ id, cb, page: this.state.page });
        }
      }
    }
  }

  componentDidMount(){
    let {id}=this.props.match.params;
    // let id=this.props.id;
    // this.setState({
    //   ...this.state,
    //   id
    // })
    // console.log(id)
    const cb = this.newBScroll;
    if (id == 9) {
      this.props.getShiWuInit({ cb });
    } else if (id != 7) {
      this.props.getShiWuMore({ id, cb, page: this.state.page });
    }else{
        cb()
    }
  }

  render() {
    var ShiWuList=[];
    const {switchItem,props,state} = this;
    const {ShiWuList} = props.ShiWu;
    let {id}=this.props.match.params;
    // this.id=id;
    // if(this.state.id!==this.props.id){
    //   this.setState({
    //     id:this.props.id
    //   })
    // }
    return (
      <div className="list" ref="list">
        <div>
            {
              id==7?(
                <iframe src="https://m.you.163.com/topic/static/look/index" frameBorder="0" allowtransparency="true" name="mframe2"></iframe>
              ):null
            }
            <div>
            {
              ShiWuList?ShiWuList.map((card,index)=>switchItem(card,index)):null
            }
            </div>
        </div>
    </div>
    );
  }
}

export default connect(
  (state)=>({ShiWu:state.ShiWu}),
  {getShiWuTabs,getShiWuInit,getShiWuMore,resetShiWuList}
)(TopicList);
