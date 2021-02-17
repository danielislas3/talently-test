export const state = () => ({
  videos: [],
  
  video: {},
})

export const actions = {

  async fetchVideos(store) {
    let { data } = await this.$axios.post('/content')
    store.commit('setVideos', data.content)
    return store.state.videos
  },



}

export const getters = {
  getVideos(state) {
    return state.videos
  },
  getPendingVideo(state) {
    return state.videos[0]
  }
}

export const mutations = {
  setVideos(state, content) {
    return state.videos = content
  },
  setVideoActual(state, id) {
    
    const video = state.videos.filter(video => video.id == id)
    return state.video = video[0]
  }
}