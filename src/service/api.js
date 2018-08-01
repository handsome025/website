import req from './requestType'
/**
 * 项目列表
 */
export const getProjectList = param => req.get('/index/pc/hot',param)
/**
 * 首页banner
 */
export const getBanner = param => req.get('/advertisement/pc/index',param)
/**
 * 首页检索信息标签
 */
export const getSearchInfo = param => req.get('/index/pc/searchInfo',param)
/**
 * 首页检索
 */
export const search = param => req.post('/pc/search?size=20&page='+param.pageNum,param.data)
/**
 * 首页资讯列表
 */
export const consultationIndex = param => req.get('/consultation/pc/index',param)
/**
 * 底部热门标签
 */
export const hotLabs = param => req.get('/index/pc/hot/labs',param)
/**
 * 资讯列表页
 */
export const getConsultationList = param => req.get('/consultation/detail/pc/pages?size=20&page='+param.pageNum)
/**
 * 资讯列表页
 */
export const getConsultationRelated = param => req.get('/consultation/pc/related/pages?id='+param.pageNum)
/**
 * 获取咨询边侧列表
 */
export const getConsultationPages = param => req.get('/consultation/pc/pages?size=20&page=1')
/**
 * 招商详情
 */
export const bizExDetail = param => req.get('/bizEx/pc/detail?bizExId='+param.id)
/**
 * 资讯详情
 */
export const consultationDetail = param => req.get('/consultation/pc/detail?id='+param.id)
/**
 * 资讯检索
 */
export const consultationSearch = param => req.get('/consultation/pc/search?size=20&page='+param.pageNum+'&content='+param.content)
/**
 * 提交手机号
 */
export const addConnection = param => req.get('/bizEx/pc/addConnection?bizExId='+param.bizExId+'&phone='+param.phone)