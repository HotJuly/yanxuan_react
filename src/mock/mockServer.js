import Mock from 'mockjs';
import category from './category.json';
import msite from './msite.json';
// import shiwu from './shiwu.json';
// import newProducts from './new.json';
// import topicHomes from './topicHome.json';
// import categoryList from './categoryList.json';

// Mock.mock("/category",{code:0,data:});
// Mock.mock("/category",{code:0,data:});
// Mock.mock("/categoryList",{code:0,data:categoryList});
// Mock.mock("/shiwu",{code:0,data:shiwu});
// Mock.mock("/newproducts",{code:0,data:newProducts});
// Mock.mock("/topichomes",{code:0,data:topicHomes});

Mock.mock("/topicList",{code:0,data:msite.topicList});
Mock.mock("/subCateList",{code:0,data:msite.headCateList.subCateList});
Mock.mock("/focusList",{code:0,data:msite.focusList});
Mock.mock("/cateList",{code:0,data:msite.cateList});
Mock.mock("/tagList",{code:0,data:msite.tagList});
Mock.mock("/policyDescList",{code:0,data:msite.policyDescList});
Mock.mock("/msiteinfo",{code:0,data:msite});
Mock.mock("/category",{code:0,data:category});