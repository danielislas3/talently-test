
// export const mutations = {
//   setComentarios(state, payload) {
//     state.comentarios = payload
//   },

//   setComentarios(state, payload) {
//     state.comentarios = payload
//   },
//   setTarea(state, payload) {
//     state.tareas.push(payload)
//   },
//   deleteTarea(state, payload) {
//     const index = state.tareas.findIndex(tarea => tarea.id === payload.id)
//     state.tareas.splice(index, 1)
//   },
//   updateTarea(state, payload) {
//     const index = state.tareas.findIndex(tarea => tarea.id === payload.id)

//     state.tareas[index].nombre = payload.nombre
//   },
//   setTareaIndividual(state, payload) {
//     state.tarea = payload
//   }
// }

// export const actions = {
//   nuxtServerInit({ commit }, { req }) {
//     return db.collection("tareas").get()
//       .then(query => {
//         const tareas = [];
//         query.forEach(element => {
//           let tarea = element.data()
//           tarea.id = element.id
//           tareas.push(tarea);
//         });
//         return commit("setTareas", tareas);
//       })
//       .catch(err => {
//         console.log("err: ", err);
//       });
//   },

//   async agregarTarea({ commit }, payload) {
//     try {
//       const doc = await db.collection('tareas').add({
//         nombre: payload,
//         fecha: new Date()
//       })
//       commit('setTarea', { nombre: payload, id: doc.id })
//     } catch (error) {
//       console.log('error: ', error);

//     }
//   },

//   async eliminarTarea({ commit }, payload) {
//     try {
//       const doc = await db.collection('tareas').doc(payload.id).delete()

//       commit('deleteTarea', { nombre: payload, id: payload.id })
//     } catch (error) {
//       console.log('error: ', error);

//     }
//   },
//   async editarTarea({ commit }, payload) {
//     try {
//       const doc = await db.collection('tareas').doc(payload.id).update({
//         nombre: payload.nombre
//       })


//       commit('updateTarea', { nombre: payload.nombre, id: payload.id })
//       this.app.router.push('/vuex')
//     } catch (error) {
//       console.log('error: ', error);

//     }

//   }
//}