export default{
    namespaced: true,
    state:{
        eleccion:[],
        presupuesto:{},
        fases:['', 'presupuesto', 'programas','cotizacion', 'perifericos','carrito'],
        fase:0
    },
    mutations:{
        aumentar(state){
            state.fase++
        },
        disminuir(state){
            state.fase--
        },
        reset(state, number){
            state.fase = number;
        }
    },
    actions:{
        next({commit, state}){
            commit('aumentar');
        },
        addEleccion(state, payload){
            state.eleccion.push(payload)
        }
    },
    getters:{
        eleccion: (state) => state.eleccion,
        fase: (state) => state.fase,
        
    }
}