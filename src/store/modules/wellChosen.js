import * as types from '../mutation-types'
import wellChosenApi from '../../api/wellChosen'

const state = {
    wellChosen: [],
    wellChosenDetail: [],
    wellChosenGet: '',
    page: 1,
    isOver: false,
    isEmpty: false
}

const getters = {
    wellChosenList: state => state.wellChosen,
    wellChosenDetail: state => state.wellChosenDetail,
    wellChosenGet: sttate => state.wellChosenGet
}

const actions = {
    getWellChosenList ({ commit }, params) {
        wellChosenApi.getWellChosenList(params).then(res => {
            commit(types.GET_WELLCHOSEN_LIST, {res})
        })
    },
    getWellChosenDetail ({ commit }, params) {
        wellChosenApi.getWellChosenDetail(params).then(res => {
            commit(types.GET_WELLCHOSEN_DETAIL, {res})
        })
    },
    getWellChosen ({ commit }, params) {
        wellChosenApi.getWellChosen(params).then(res => {
            commit(types.GET_WELLCHOSEN, {res})
        })
    }

}

const mutations = {
    [types.GET_WELLCHOSEN_LIST] (state, {res}) {
        let wellChosen = res
        if (wellChosen && typeof wellChosen === 'object' && wellChosen.code === 0) {
            state.page++
            state.wellChosen = state.wellChosen.concat(wellChosen.data.rows)
        } else {
            state.isEmpty = state.wellChosen.length === 0 ? true : 0
            state.isOver = true
        }
    },
    [types.GET_WELLCHOSEN_DETAIL] (state, {res}) {
        let wellChosen = res
        if (wellChosen && typeof wellChosen === 'object' && wellChosen.code === 0) {
            state.wellChosenDetail = wellChosen.data.rows
        } else {
        }
    },
    [types.GET_WELLCHOSEN] (state, {res}) {
        let wellChosen = res
        if (wellChosen && typeof wellChosen === 'object' && wellChosen.code === 0) {
            state.wellChosenGet = wellChosen.data
        } else {
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
