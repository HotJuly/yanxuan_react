import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMsiteInfo } from '../../store/actions';
import Swiper from 'swiper';
import BScroll from 'better-scroll';

import './Home.styl';



class Home extends Component {

  state={
    tabIndex:0,
    isGoTop:false
  }

  cb = () => {
    setTimeout(() => {
      new Swiper('.swiper-container-horizontal', {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination-clickable'
        },
      });
      new BScroll('.inner',{
        click:true,
        scrollX:true
      });
    }, 0);
    
  }

  toggleClass=(index)=>{
    this.setState({
      ...this.state,
      tabIndex:index
    })
  }

  goTop=()=>{
    document.body.scrollTop=document.documentElement.scrollTop=0;
  }

  componentDidMount() {
    this.props.getMsiteInfo(this.cb);
    const maxHeight=document.documentElement.clientHeight/2;
    // window.onscroll(()=>{
    //   console.log(window.scrollY)
    //   if(window.scrollY>=maxHeight){
    //     this.setState({
    //       ...this.state,
    //       isGoTop:true
    //     })
    //   }
    // })
    document.addEventListener("scroll",()=>{
        if(window.scrollY>=maxHeight&&!this.state.isGoTop){
          this.setState({
            ...this.state,
            isGoTop:true
          })
          // document.querySelector('#app').scrollX=0;
        }else if(window.scrollY<=maxHeight&&this.state.isGoTop){
          this.setState({
            ...this.state,
            isGoTop:false
          })
        }
      })
  }


  render() {
    let {toggleClass,goTop,props,state} =this;
    var cateList=[];
    let {tabIndex,isGoTop} =state;
    if(this.props.Msite){
      var { focusList, tagList,cateList, policyDescList } = props.Msite;
    }
    

    return (
      <div id="home" ref="scroll">
        <div className="HomeHeader">
          <header>
            <a href="/home" id="logo"></a>
            <div className="topSearchIpt">
              <i className="icon"></i>
              <span className="placeholder">搜索商品, 共19918款好物</span>
            </div>
            <div className="loginBtn">登录</div>
          </header>
          <div className="tabWrap">
            <div className="m-tabs">
              <div className="header">
                <div className="inner">
                  <div className="list">
                    {
                      cateList?cateList.map((cate,index)=>(
                        <div className={tabIndex===index?"tab active":"tab"} key={index} onClick={toggleClass.bind(this,index)}>
                          <span className="txt">{cate.name}</span>
                        </div>
                      )):null
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="toggleWrap">
              <div className="linear"></div>
              <div className="toggle">
                <div className="icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="slideWarp">
          <div className="m-slide m-indexSlide">
            <div className="slide-con">
              <div className="swiper-container common-swiper-container swiper-container-horizontal">
                <div className="swiper-wrapper">
                {
                  focusList?focusList.map((focus,index)=>{
                    return (
                      <div className="swiper-slide swiper-slide-prev" key={index}>
                        <a href={focus.targetUrl}>
                          <img src={focus.picUrl} alt="" />
                        </a>
                      </div>
                    )
                  }):null
                }
                </div>
                <div className="swiper-pagination common-swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                  {/* <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-indexServicePolicy newUser active">
          <ul className="g-grow">
          {
            policyDescList?policyDescList.map((item,index)=>{
              return (
                <li className="item" key={index}>
                  <a href={item.schemeUrl}>
                    <i className="u-icon u-icon-servicePolicy-index" style={{ background: `url(${item.icon}) no-repeat`, backgroundSize: "100% 100%" }} ></i>
                    <span className="text">{item.desc}</span>
                  </a>
                </li>
                )
            }):null
          }
          </ul>
        </div>
        <div style={{ backgroundColor: "#F4F4F4" }}>
          <div className="m-kingKongModule" style={{ backgroundImage: "url(http://yanxuan.nosdn.127.net/56cd3b1e32f4d2edd03915efcef04de0.png)", backgroundSize: "100% 100%" }}>
            <div className="m-carousel kingkongCarousel" >
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {
                    cateList?cateList.map((cate,index)=>{
                      return (
                        <div className="swiper-slide" key={index}>
                          <a href={cate.appListPicUrl} className="kingkong-item mb-9">
                            <div className="icon">
                              <img className="img" src={cate.iconUrl} />
                            </div>
                            <div className="txt" style={{ color: "#333333" }}>{cate.name}</div>
                          </a>
                        </div>
                      );
                    }):null
                  }
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
          <div className="m-freshmanModule m-indexFloor">
            <div className="moduleTitle">
              <span className="txt">新人专享礼</span>
            </div>
            <div className="content">
              <a className="left" href="javascript:void(0)">
                <div className="name">新人专享礼包</div>
                <div className="imgWrap">
                  <div className="m-lazyload img m-lazyload-loaded">
                    <img className="swiper-lazy" src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" style={{ display: "inline" }} alt="" />
                  </div>
                  <div className="animate"></div>
                </div>
              </a>
              <div className="right">
                <div className="module1">
                  <a className="m-activityItem" href="javascript:void(0)" style={{ backgroundImage: "url()", backgroundSize: "100% 100%" }} >
                    <div className="picWrap">
                      <div className="m-lazyload pic m-lazyload-loaded">
                        <img className="swiper-lazy" src="http://yanxuan.nosdn.127.net/7dd153f648f9ffb70384b5868b132ed1.png" style={{ display: "inline" }} alt="" />
                      </div>
                      <div className="discount">
                        <div className="line1">¥217</div>
                        <div className="line2">¥239</div>
                      </div>
                    </div>
                    <div className="cnt">
                      <div className="title">福利社</div>
                      <div className="subTitle">今日特价</div>
                      <span></span>
                    </div>
                  </a>
                </div>
                <div className="module2">
                  <a className="m-activityItem" href="javascript:void(0)" style={{ backgroundImage: "url()", backgroundSize: "100% 100%" }}>
                    <div className="picWrap">
                      <div className="m-lazyload pic m-lazyload-loaded">
                        <img src="http://yanxuan.nosdn.127.net/589f0990b8ba1d354a698731afacd2d4.png" style={{ display: "inline" }} alt="" />
                      </div>
                      <div className="discount">
                        <div className="line1">¥1</div>
                        <div className="line2">¥9</div>
                      </div>
                    </div>
                    <div className="cnt">
                      <div className="title">新人拼团</div>
                      <div className="subTitle"></div>
                      <div className="tag">1元起包邮</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="m-indexManufacturersSupplying">
            <div className="moduleTitle">
              <div className="left">
                <span>品牌制造商直供</span>
              </div>
              <a className="right" href="/manufacturer/list">
                <span>更多</span>
                <i className="icon u-icon u-icon-index-titleArrow"></i>
              </a>
            </div>
            <ul className="list">
            {
              tagList?tagList.map((tag,index)=>{
                return (
                    <a  className="item" style={{ backgroundImage: `url(${tag.picUrl})`, backgroundSize: "100% 100%" }} key={index} >
                      <div className="cnt">
                        <h4 className="title">{tag.name}</h4>
                        <div>
                          <span className="price">
                            <span>{tag.floorPrice}</span>
                            <span>元起</span>
                          </span>
                          <i className="newIcon" style={{display:tag.newOnShelf?"inline-block":"none"}}>上新</i>
                        </div>
                      </div>
                    </a>
                )
              }):null
            }
            </ul>
          </div>
        </div>
        <div className="goTop" style={{display:isGoTop?"block":"none"}} onClick={goTop}></div>
      </div>
    );
  }
}

export default connect(
  (state) => ({ Msite: state.Msite,cateList:state.Msite.cateList }),
  {
    getMsiteInfo
  }
)(Home);
