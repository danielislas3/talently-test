export const state = () => ({
  videos: [],
  comentarios: [],
  video: {},
  newComment: {
    content: "",
    user_id: "",
    content_id: ""
  }
});

export const actions = {
  async fetchVideos({ commit }) {
    try {
      let { data } = await this.$axios.post("/content");
      commit("setVideos", data.content);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchComentarios({ commit }, videoId) {
    try {
      let { data } = await this.$axios.post(`/content/${videoId}/comments`);

      commit("setComentarios", data.comments);
    } catch (error) {
      console.log(error);
    }
  },

  async agregarComentario({ commit }, payload) {
    try {
      let { data } = await this.$axios.post("/comment/create", payload);
      commit("setNewComment", data.message);
    } catch (error) {
      console.log("error: ", error);
    }
  },
  async eliminarComentario({ commit }, comment) {
    try {
      let { data } = await this.$axios.delete("/comment/" + comment.id);
      if (data[0]) {
        commit("deleteComment", comment);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  async updateComentario({ commit }, payload) {
    try {
      let { data } = await this.$axios.post(
        `/comment/${payload.comment.id}/update`,
        {
          content: payload.content
        }
      );
      if (data[0]) {
        commit("updateComment", data[0]);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  async updateProgress({ commit }, payload) {
    try {
      let { data } = await this.$axios.post(
        `/content/${payload.videoId}/progress`,
        {
          progress: payload.progress
        }
        );
        
       if (data.content) {
         commit("updateVideo", data.content);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }
};

export const getters = {
  getVideos(state) {
    return state.videos;
  },
  getComentarios(state) {
    return state.comentarios;
  },
  getPendingVideo(state) {
    return state.videos[0];
  }
};

export const mutations = {
  setVideos(state, content) {
    return (state.videos = content);
  },
  setVideoActual(state, id) {
    const video = state.videos.filter(video => video.id == id);
    return (state.video = video[0]);
  },
  setComentarios(state, comentarios) {
    return (state.comentarios = comentarios);
  },

  setNewComment(state, payload) {
    payload.user = state.auth.user;
    state.comentarios.push(payload);
    return (state.newComment = payload);
  },
  deleteComment(state, payload) {
    const index = state.comentarios.findIndex(
      comment => comment.id === payload.id
    );
    state.comentarios.splice(index, 1);
  },
  updateComment(state, payload) {
    const index = state.comentarios.findIndex(
      comment => comment.id == payload.id
    );
    state.comentarios[index].content = payload.content;
  },
  updateVideo(state, payload) {
    const index = state.videos.findIndex(
      video => video.id == payload.id
    );
    state.videos[index].progress = payload.progress;
  }
};
