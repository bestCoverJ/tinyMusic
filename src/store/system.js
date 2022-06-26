import axios from 'axios'

const header = '/api'

export default {
  namespaced: true,
  state: {
    id: '',
    user: {},
    status: '',
    // 用户登录
    loginUrl: header + '/login/cellphone',
    // 获取登录状态
    statusUrl: header + '/login/status',
    // 首页-发现
    homepageUrl: header + '/homepage/block/page',
    // 喜欢音乐列表
    likelistUrl: header + '/likelist',
    likelist: [],
    // 歌曲详情
    songDetailUrl: header + '/song/detail',
    // 首页banner
    bannerUrl: header + '/banner',
    // 获取精品歌单
    highqualityUrl: header + '/top/playlist/highquality',
    // 歌单 ( 网友精选碟 )
    playlistUrl: header + '/top/playlist',
    // 获取歌单详情
    playlistDetailUrl: header + '/playlist/detail',
    // 获取歌单所有歌曲
    playlistDetailAllUrl: header + '/playlist/track/all',
    // 热门评论
    hotcommentUrl: header + '/comment/hot',
    // 私人FM
    personalFmUrl: header + '/personal_fm',
    // 获取音乐url,
    songUrl: header + '/song/url'
  },
  mutations: {
    SET_USER_ID(state, userId) {
      state.id = userId || ''
    },
    SET_USER(state, user) {
      state.user = user || {}
    },
    SET_LIKE_LIST(state, likelist) {
      state.likelist = likelist || []
    },
    SET_STATUS(state, status) {
      state.status = status || ''
    }
  },
  actions: {
    // 用户登录
    async login(context, params) {
      return await axios.post(context.state.loginUrl, {
        ...params
      }).catch(() => {})
    },
    // 获取登录状态
    async queryStatus(context, params) {
      return await axios.post(context.state.statusUrl, {
        ...params
      }).catch(() => {})
    },
    // 首页-发现
    async queryHomepage(context, params) {
      return await axios.post(context.state.homepageUrl, {
        ...params
      }).catch(() => {})
    },
    // 喜欢音乐列表
    async queryLikelist(context, params) {
      return await axios.post(context.state.likelistUrl, {
        ...params
      }).catch(() => {})
    },
    // 歌曲详情
    async querySongDetail(context, params) {
      return await axios.get(context.state.songDetailUrl + `?ids=${params.ids}`).catch(() => {})
    },
    // 喜欢音乐列表
    async queryBanner(context, params) {
      return await axios.post(context.state.bannerUrl, {
        ...params
      }).catch(() => {})
    },
    // 获取精品歌单
    async queryhighquality(context, params) {
      return await axios.post(context.state.highqualityUrl, {
        ...params
      }).catch(() => {})
    },
    // 获取歌单 ( 网友精选碟 )
    async queryplaylist(context, params) {
      return await axios.post(context.state.playlistUrl, {
        ...params
      }).catch(() => {})
    },
    // 获取歌单详情
    async queryplaylistDetail(context, params) {
      return await axios.get(context.state.playlistDetailUrl + `?id=${params.id}`).catch(() => {})
    },
    // 获取歌单所有歌曲
    async queryplaylistDetailAll(context, params) {
      return await axios.get(context.state.playlistDetailAllUrl + `?id=${params.id}&limit=${params.limit}`).catch(() => {})
    },
    // 获取热门评论
    async queryhotcomment(context, params) {
      return await axios.get(context.state.hotcommentUrl +
        `?id=${params.id}&type=${params.type}&limit=${params.limit}`).catch(() => {})
    },
    // 获取私人FM
    async querypersonalFm(context, params) {
      return await axios.get(context.state.personalFmUrl).catch(() => {})
    },
    // 获取音乐url
    async querySongUrl(context, params) {
      return await axios.post(context.state.songUrl, {
        ...params
      }).catch(() => {})
    }
  }
}

