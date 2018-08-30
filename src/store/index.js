// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as api from '../service/api'
axios.defaults.baseURL = 'http://localhost:8080'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let projectState = []

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      navIndex:0,//首页菜单导航
      projectList:[], //首页项目列表
      projectPageNum:1, //首页项目当前页
      moreProject:false, //首页更多项目
      inforList:[], //资讯列表
      bannerList:[], //首页banner list
      recommendSearchInfo:[], //首页检索标签
      hotProjectList:[], //首页热门项目
      searchInfo:[], //首页检索标签
      consultationIndex:[], //首页资讯列表
      hotLabs:[], //地步热门标签
      consultationList:[], //资讯列表页
      consultationPageNum:1, //资讯列表当前页
      moreConsultation:false, //资讯列表更多项目
      consultationPages:[], //资讯列表侧边栏
      articleInfo:'', // 资讯详情
      bizInfo:'', // 项目详情
      type:'',
      friendShipLink:[] //友情链接
    },
    actions: {
      async initList({dispatch, commit}) {
        // axios.all([api.getProjectList(), api.getBanner(), api.getSearchInfo(), api.consultationIndex()])
        // .then(axios.spread((projectList, bannerList, searchInfo, consultation) => {
        //   commit('setProjectList',projectList.list)
        //   commit('setBannerList',bannerList.list)
        //   commit('setSearchInfo',searchInfo.list)
        //   commit('setConsultationIndex',consultation.list)
        //   console.info(consultation)
        // }));
        
        await dispatch('indexInit')
        let bannerList = await api.getBanner()
        let search = await api.search({pageNum:1,data:[]})
        let searchInfo = await api.getSearchInfo()
        commit('setBannerList',bannerList)
        commit('setProjectList', search)
        commit('setSearchInfo',searchInfo)
      },
      async search({ commit }, data) {
        if(data.isFirst){
          commit('setProjectListEmpty')
          let search = await api.search(data)
          // console.info(999,search)
          commit('setProjectList', search)
        }else{
          commit('setProjectListEmpty')
          // let search = await api.search(data)
          commit('setProjectList', data)
          // console.info(999,data)
        }
      },
      async getConsultationList({dispatch, commit}, data) {
        if(data.isFirst){
          // await dispatch('indexInit')
          let consultationList = await api.getConsultationList(data)
          let consultationPages = await api.getConsultationPages(data)
          let setHotProject = await api.getProjectList()
          let hotLabs = await api.hotLabs()
          commit('setHotLabs',hotLabs)
          commit('setConsultationList', consultationList)
          commit('setConsultationPages', consultationPages)
          commit('setHotProject',setHotProject)
          console.info(consultationList)
        }else{
          commit('setConsultationListEmpty')
          // let consultationList = await api.getConsultationList(data)
          commit('setConsultationList', data)
        }
      },
      async getConsultationSearch({dispatch, commit}, data) {
          commit('setConsultationListEmpty')
          let consultationList = await api.consultationSearch(data)
          commit('setConsultationList', consultationList)
      },
      async getArticle({dispatch, commit}, data) {
        await dispatch('indexInit')

        let consultationDetail = await api.consultationDetail({id:data})
        commit('setArticleInfo',consultationDetail)
      },
      async getArticleDetail({dispatch, commit}, data) {
        let consultationDetail = await api.consultationDetail({id:data})
        commit('setArticleInfo',consultationDetail)
      },
      async getBiz({dispatch, commit}, data) {
        await dispatch('indexInit')

        let bizExDetail = await api.bizExDetail({id:data})
        commit('setBizInfo',bizExDetail)
      },
      async getBizDetail ({dispatch, commit}, data){
        let bizExDetail = await api.bizExDetail({id:data})
        commit('setBizInfo',bizExDetail)
      },
      async indexInit({dispatch, commit}, data) {
        let setHotProject = await api.getProjectList()
        let consultation = await api.consultationIndex()
        let hotLabs = await api.hotLabs()
        let friendShipLink = await api.friendShipLink()
        commit('setHotProject',setHotProject)
        commit('setConsultationIndex',consultation)
        commit('setHotLabs',hotLabs)
        commit('setFriendShipLink',friendShipLink)
      },
      async hotLabsInit({dispatch, commit}, data) {
        let hotLabs = await api.hotLabs()
        commit('setHotLabs',hotLabs)
      }
    },

    mutations: {
      setProjectList(state, list) {
        if(list.data){

          state.moreProject = list.data.hasNextPage
          state.projectPageNum = list.data.pageNum
          // console.info("setProjectList",list.data.list)
          state.projectList = list.data.list
          state.type = 'index'
        }
      },
      setHotProject(state, list) {
        if(list.data){
          // state.moreProject = list.data.hasNextPage
          // state.projectPageNum = list.data.pageNum
          // console.info("setProjectList",list.data.list)
          state.hotProjectList = list.data.list
        }
      },
      setBannerList (state, list){
        // console.info(999999,list)
        state.bannerList = list.data
      },
      setSearchInfo (state, list){
        if(list.data){
          state.recommendSearchInfo = list.data.recommendSearchInfo
        }
      },
      setProjectListEmpty (state){
        state.moreProject = false
        state.projectList = []
      },
      setConsultationListEmpty (state){
        state.moreConsultation = false
        state.consultationList = []
      },
      setConsultationIndex(state, list){
        if(list.data){
          state.consultationIndex = list.data.list
        }
      },
      setHotLabs(state, list){
        if(list.data){
          state.hotLabs = list.data
        }
      },
      setFriendShipLink(state, list){
        if(list.data){
          state.friendShipLink = list.data
        }
      },
      setConsultationList(state, list){
        if(list.data){
          state.moreConsultation = list.data.hasNextPage
          state.consultationPageNum = list.data.pageNum
          state.consultationList = list.data.list
          state.type = 'consultation'
        }
      },
      setConsultationPages(state, list){
        if(list.data){
          // console.info(999999,list)
          state.consultationPages = list.data.list
        }
      },
      setArticleInfo(state, list){
        if(list.data){
          // console.info('setArticleInfo',list)
          state.type = ''
          state.articleInfo = list.data
        }
      },
      setBizInfo(state, list){
        if(list.data){
          state.type = ''
          // console.info('setArticleInfo',list)
          state.bizInfo = list.data
          // console.info(4444,list.data)
        }
      },
      setNavIndex(state, index){
          state.navIndex = index
      },
      setType(state, type){
          state.type = type
      }
    },
    getters: {
        projectList: function (state) {
            return state.projectList
        }
    }
  })
}
