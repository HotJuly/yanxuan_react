import React, { Component } from 'react';
import { connect } from 'react-redux';
import BScroll from 'better-scroll';

import { getCategory } from '../../store/actions';

import './Classify.styl';



class Classify extends Component {

    state = {
        curIndex:0
    }
    
    subCateList=()=>{
        if(this.props.Category.length){
            return this.props.Category.map((cate, index) => {
                return cate.subCateList
            })[this.state.curIndex];
        }else{
            return [];
        }

    }

    categoryList=()=>{
        if(this.props.Category){
            return this.props.Category.map((cate) => {
                if (!cate.categoryList) {
                    return [];
                } else {
                    return cate.categoryList
                }
            })[this.state.curIndex];
        }else{
            return [];
        }
    }

    componentDidMount() {
        // this.props.getCategory(() => {
        //     this.leftScroll = new BScroll('.left', {
        //         click: true
        //     });
        //     this.rightScroll = new BScroll('.right', {
        //         click: true
        //     });
        // })
        this.props.getCategory(() => {
            this.setState({
                ...this.state
            }, () => {
                this.leftScroll = new BScroll('.left', {
                    click: true
                });
                this.rightScroll = new BScroll('.right', {
                    click: true
                });
            });
        })
    }

    render() {
        let { categoryList, subCateList, state, props } = this;
        let { curIndex } = state;
        var Category=[];
        if(props.Category){
            var { Category } = props;
        }
        function RightListOne(){
            const categoryArr=categoryList();
            if(categoryArr && categoryArr.length > 0 ){
                return (<div className="cateList">
                {
                    categoryList().map((categoryObj,index)=>(
                        <ul className="list" style={{ display: "block" }} key={categoryObj.id}>
                            <div className="hd">{categoryObj.name}</div>
                            {
                                categoryObj.categoryList.map((category,index)=>(
                                    <li key={category.id} style={{ float: "left", marginRight: "0.32rem" }}>
                                        <a href={`http://m.you.163.com/item/list?categoryId=${categoryObj.id}&subCategoryId=${category.id}`}>
                                            <div className="img">
                                                <img src={category.wapBannerUrl} />
                                            </div>
                                            <div className="name">
                                                {category.name}
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                            <li className="itemempty"></li>
                        </ul>
                    ))
                    
                }
                
            </div>)
            }else{
                return (
                    <div className="cateList">
                        <ul className="list">
                        <RightListTwo />
                        <li className="itemempty"></li>
                        </ul>
                    </div>
                )
            }
        }
        function RightListTwo(){
            let subCateArr=subCateList();
            return (
                subCateArr.map((subCate,index)=>(
                    <li key={subCate.id}>
                        <a href={`http://m.you.163.com/item/list?categoryId=${subCate.id}&subCategoryId=${subCate.id}`}>
                            <div className="img">
                                <img src={subCate.wapBannerUrl} />
                            </div>
                            <div className="name">
                                {subCate.name}
                            </div>
                        </a>
                    </li>
                )))
        }
        return (
            <div id="classify">
                <header>
                    <div className="topSearchIpt">
                        <i className="icon"></i>
                        <span className="placeholder">搜索商品, 共19972款好物</span>
                    </div>
                </header>
                <div className="content">
                    <div className="left">
                        <div className="wrap">
                            <ul>
                                {
                                    Category ? Category.map((cate, index) => (
                                        <li className="item" className={curIndex == index ? "active" : ""} key={cate.id} onClick={()=>{ this.setState({curIndex:index})}}>
                                            {cate.name}
                                        </li>
                                    )) : null
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            {
                                Category&&Category.length ? (<img src={Category[curIndex].wapBannerUrl} />) : null
                            }
                            <RightListOne />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({ Category: state.Category }),
    {
        getCategory
    }
)(Classify);
