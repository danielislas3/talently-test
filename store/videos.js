// export const state = () => {
//   videos: []
// }

// export const actions = {

//   async fetchVideos(store) {
//     let { data } = await this.$axios.post('/content')
//     store.commit('setVideos', data.content)
//     return store.state.videos
//   }
// }

// export const getters = {
//   getVideos(state) {
//     console.log('GETTTTERs', state.videos);
//     return state.videos
//   }
// }

// export const mutations = {
//   setVideos(state, content) {
//     return state.videos = content
//   }
// }