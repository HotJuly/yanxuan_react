
export function isHaveClassName(element,className){
    const reg=new RegExp(`(^| )${className}($| )`);
    return reg.test(element.className);
}

export function toggleClassName(obj,className,path){
    const key=Object.keys(obj)[0];
    const element=Object.values(obj)[0];
    const isAdd=path.includes(`/${key}`);
    if(isAdd&&!isHaveClassName(element,className)){
        const oldClass=element.className;
        element.className=`${oldClass} ${className}`;
    }else if(!isAdd&&isHaveClassName(element,className)){
        // const newClass = element.className.replace(`/(^| )${className}($| )/`,'');
        const reg=new RegExp(`(^| )${className}($| )`);
        const newClass = element.className.replace(reg,'');
        element.className=newClass;
    }
}