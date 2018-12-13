import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getSearchInit,getSearchGoods,getSearchResult,resetSearchResult} from '../../store/actions';

import './Search.styl';

class Search extends Component {

  state={
    isShow:false
  }

  number=0;

  handleSearch=(event)=>{
    if(event.keyCode==13){
      this.props.getSearchGoods(this.refs.search.value);
    }
  }

  handleChange=(event)=>{
    let No=this.number;
    this.number++;
    setTimeout(()=>{
      if(No+1==this.number){
        this.props.getSearchResult(this.refs.search.value);
      }
    },1000)
  }

  handleShow=(isShow)=>{
    setTimeout(() => {
      this.setState({
        isShow
      })
    }, 1000);
  }

  clickSearch=(event)=>{
    const value=event.target.innerText;
    this.props.getSearchGoods(value);
    this.props.history.replace('/keycontent');
  }

  componentDidMount(){
    this.props.getSearchInit();
  }

 componentWillUnmount(){
   this.props.resetSearchResult();
 }  

  render() {
    let {handleSearch,handleChange,clickSearch,handleShow,props,state} =this;
    let {isShow}=state;
    let {searchInitList,searchResult} =props.Search;
    if(searchInitList){
      var {defaultKeyword} =searchInitList;
    }
    return (
      <div id="wrap">
        <div className="search">
          <span></span>
          <input type="text" ref="search" placeholder={defaultKeyword?defaultKeyword.keyword:null} onFocus={()=>handleShow(true)} onBlur={()=>handleShow(false)} onChange={handleChange} onKeyDown={handleSearch} />
        </div>

        <div className="searchList">
          <ul>
            {
              isShow&&searchResult?searchResult.map((result,index)=>(
              <li key={index} onClick={clickSearch}>
                {result}
              </li>
              )):null
            }
            
          </ul>
        </div>

        <div className="initList">
          <span>热门搜索</span>
          <ul>
            {
              searchInitList&&searchInitList.hotKeywordVOList?searchInitList.hotKeywordVOList.map((keyword,index)=>(
                <li className={keyword.highlight?"highlight":null} key={index}>
                  <a href="keyword.schemeUrl">
                    {keyword?keyword.keyword:null}
                  </a>
                </li>
              )):null
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  (state)=>({Search:state.Search}),
  {
    getSearchInit,
    getSearchGoods,
    getSearchResult,
    resetSearchResult
  }
)(Search);
