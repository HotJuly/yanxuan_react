import {SETFOCUSLIST,SETCATELIST,SETTAGLIST,SETPOLICYDESCLIST,SETCATEGORY,SETSHIWUTABS,SETSHIWUINIT,SETSHIWULIST,RESETSHIWULIST,SETSEARCHINITLIST,SETSEARCHGOODS,SETSEARCHRESULT,SETKEYCONTENTSORT,RESETSEARCHRESULT} from './action-types';
import {reqMsiteInfo,reqCategory,reqShiWuTabs, reqShiWuInit,reqShiWuMore,reqShiWuList,reqSearchInit,reqSearchGoods,reqSearchResult,reqLoginCode} from '../api';


//设置Home页面数据的actions
export const setFocusList=(data)=>({type:SETFOCUSLIST,data})
export const setCateList=(data)=>({type:SETCATELIST,data})
export const setTagList=(data)=>({type:SETTAGLIST,data})
export const setPolicyDescList=(data)=>({type:SETPOLICYDESCLIST,data})

//设置Classify页面数据的action
export const setCategory=(data)=>({type:SETCATEGORY,data})

//设置ShiWu页面数据的actions
export const setShiWuTabs=(data)=>({type:SETSHIWUTABS,data})
export const setShiWuInit=(data)=>({type:SETSHIWUINIT,data})
export const setShiWuList=(data)=>({type:SETSHIWULIST,data})
export const resetShiWuList=()=>({type:RESETSHIWULIST})

//设置Search页面数据的actions
export const setSearchInitList=(data)=>({type:SETSEARCHINITLIST,data})
export const setSearchGoods=(data)=>({type:SETSEARCHGOODS,data})
export const setSearchResult=(data)=>({type:SETSEARCHRESULT,data})
export const resetSearchResult=()=>({type:RESETSEARCHRESULT})

//设置KeyContent页面数据排序方式的actions
export const setKeyContentSort=(data)=>({type:SETKEYCONTENTSORT,data})


//请求Home页面的数据
export function getMsiteInfo(cb){
    return async dispatch=>{
        const result=await reqMsiteInfo();
        if(!result.code){
            const {focusList,cateList,tagList,policyDescList} =result.data;
            dispatch(setFocusList(focusList));
            dispatch(setCateList(cateList));
            dispatch(setTagList(tagList));
            dispatch(setPolicyDescList(policyDescList));
            typeof cb === "function" && cb();
            
        }
    }
}


//请求Classify页面的数据
export function getCategory(cb){
    return async dispatch=>{
        const result=await reqCategory();
        if(!result.code){
            const category =result.data;
            dispatch(setCategory(category));
            typeof cb === "function" && cb();
            
        }
    }
}


//请求ShiWu页面的Tabs数据
export function getShiWuTabs(cb){
    return async dispatch=>{
        const result=await reqShiWuTabs();
        if(result.code==200){
            const ShiWuTabs =result.data;
            dispatch(setShiWuTabs(ShiWuTabs));
            typeof cb === "function" && cb();
        }
    }
}

export function getShiWuInit({cb}){
    return async dispatch=>{
        const result=await reqShiWuInit();
        if(result.code==200){
            const ShiWuInit =result.data;
            dispatch(setShiWuInit(ShiWuInit));
            typeof cb === "function" && cb();
        }
    }
}

export function getShiWuMore({cb,page,id}){
    return async dispatch=>{
        let result;
        if(id==9){
            result = await reqShiWuMore(page);
        }else{
            result = await reqShiWuList(id,page);
        }
        if(result.code==200){
            const ShiWuMore =result.data.result;
            dispatch(setShiWuList(ShiWuMore));
            typeof cb=="function"&&cb();
        }
    }
}


//请求Search页面的数据
export function getSearchInit(){
    return async dispatch=>{
        const result=await reqSearchInit();
        if(result.code==200){
            const searchInitList =result.data;
            dispatch(setSearchInitList(searchInitList));
        }
    }
}

export function getSearchGoods(keyword){
    return async dispatch=>{
        const result=await reqSearchGoods(keyword);
        if(result.code==200){
            const searchGoods =result.data;
            dispatch(setSearchGoods(searchGoods));
        }
    }
}

export function getSearchResult(keyword){
    return async dispatch=>{
        const result=await reqSearchResult(keyword);
        if(result.code==200){
            const searchResult =result.data;
            dispatch(setSearchResult(searchResult));
        }
    }
}

// export function sendCode(keyword){
//     return async dispatch=>{
//         const result=await reqLoginCode(keyword);
//         if(result.code==200){
//             const loginCode =result.data;
//             dispatch(setLoginCode(loginCode));
//         }
//     }
// }