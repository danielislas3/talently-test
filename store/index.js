export const state = () => ({
  videos: [],
  comentarios: [],
  video: {},
  newComment: {
    content: '',
    user_id: '',
    content_id: '',
  }

})

export const actions = {

  async fetchVideos({ commit }) {
    try {
      let { data } = await this.$axios.post('/content')
      commit('setVideos', data.content)

    } catch (error) {
      console.log(error);
    }
  },
  async fetchComentarios({ commit }, videoId) {
   
    try {
      let { data } = await this.$axios.post(`/content/${videoId}/comments`)

      commit('setComentarios', data.comments)

    } catch (error) {
      console.log(error);
    }
  },

  async agregarComentario({ commit }, payload) {
    try {
      let { data } = await this.$axios.post('/comment/create', payload)
      console.log('data: ', data.message);

      commit('setNewComment', data.message)
    } catch (error) {
      console.log('error: ', error);

    }
  },


}

export const getters = {
  getVideos(state) {
    return state.videos
  },
  getComentarios(state) {
    return state.comentarios
  },
  getPendingVideo(state) {
    return state.videos[0]
  }
}

export const mutations = {
  setVideos(state, content) {
    return state.videos = content
  },
  setComentarios(state, comentarios) {
    return state.comentarios = comentarios
  },
  setVideoActual(state, id) {

    const video = state.videos.filter(video => video.id == id)
    return state.video = video[0]
  },
  setNewComment(state, payload) {
    payload.user = state.auth.user
    state.comentarios.push(payload)
    return state.newComment = payload
  },
}