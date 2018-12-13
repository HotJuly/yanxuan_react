import {
    combineReducers
} from 'redux';

import {
    SETFOCUSLIST,
    SETCATELIST,
    SETTAGLIST,
    SETPOLICYDESCLIST,
    SETCATEGORY,
    SETSHIWUTABS,
    SETSHIWUINIT,
    SETSHIWULIST,
    RESETSHIWULIST,
    SETSEARCHINITLIST,
    SETSEARCHGOODS,
    SETSEARCHRESULT,
    SETKEYCONTENTSORT,
    RESETSEARCHRESULT
} from './action-types';

const initMsite = {};

function Msite(state = initMsite, action) {
    const {
        data
    } = action;
    switch (action.type) {
        case SETFOCUSLIST:
            return {...state,focusList:data}
        case SETCATELIST:
            return {...state,cateList:data}
        case SETTAGLIST:
            return {...state,tagList:data}
        case SETPOLICYDESCLIST:
            return {...state,policyDescList:data}
        default:
            return state;
    }
}

const initCategory=[];
function Category(state = initCategory, action){
    const {data} = action;
    switch (action.type) {
        case SETCATEGORY:
            return data;
        default:
            return state;
    }
}

const initShiWu={ShiWuList:[]};
function ShiWu(state = initShiWu, action){
    const {data} = action;
    switch (action.type) {
        case SETSHIWUTABS:
            return {...state,ShiWuTabs:data};
        case SETSHIWUINIT:
            let shiwuArr1=[];
            data.forEach(({topics})=>{
                let list=topics.filter((topic)=>topic.type===1||topic.type===2||topic.type===7);
                shiwuArr1=shiwuArr1.concat(list);
            });
            return {...state,ShiWuList:shiwuArr1};
        case SETSHIWULIST:


            let shiwuArr2=[];
            //处理推荐栏目的数据
            if(data.length>0&&data[0].look){
                data.forEach((item)=>{
                    if(item.topics.length>0) {
                        let topics=item.topics.filter((topic)=>{
                            return topic!==null;
                            });
                        shiwuArr2=shiwuArr2.concat(...topics);
                    }
                })
                state.ShiWuList=state.ShiWuList.concat(shiwuArr2)
            }else{
                //处理除推荐以外的数据
                data.forEach((topic)=>{
                    if(topic.itemList){
                        topic.itemList=topic.itemList.filter((item)=>item);
                    }
            })
                state.ShiWuList=state.ShiWuList.concat(data);
            }
            return {...state};

            // if(state.ShiWuList){
            //     let ShiWuList=state.ShiWuList.concat(data)
            //     return {...state,ShiWuList};
            // }else{
            //     return {...state,ShiWuList:data};
            // }
        case RESETSHIWULIST:
            return {...state,ShiWuList:[]}
        default:
            return state;
    }
}

const initSearch=[];
function Search(state = initSearch, action){
    const {data} = action;
    switch (action.type) {
        case SETSEARCHINITLIST:
            return {...state,searchInitList:data};
        case SETSEARCHGOODS:
            return {...state,searchGoods:data.directlyList,keyContent:data.directlyList};
        case SETSEARCHRESULT:
            return {...state,searchResult:data};
        case RESETSEARCHRESULT:
            return {...state,searchResult:[]};
        case SETKEYCONTENTSORT:
            let keyContent=state.keyContent;
            if(data==1){
                keyContent.sort((k1,k2)=>{
                    return k2.retailPrice-k1.retailPrice
                })
            }else if(data==2){
                keyContent.sort((k1,k2)=>{
                    return k1.retailPrice-k2.retailPrice
                })
            }else{
                keyContent=state.searchGoods;
            }
            return {...state,keyContent};
        default:
            return state;
    }
}

export default combineReducers({
    Msite,
    Category,
    ShiWu,
    Search
})