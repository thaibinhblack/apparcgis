import mutations from './mutations'
import actions from './actions'
import moment from 'moment'
const state = {
    viewImage: false,
    map: null,
    view: null,
    FeatureLayer: null,
    ubgpopupTemplate: null,
    selectedFeature: null,
    url: "https://tilis.vbgis.vn/arcgis/rest/services/DoThi/CayXanh/FeatureServer/0",
    dialog_update: false,
    feature: {
        geometry: {
            
        },  
        attributes: {
            SoHieu: null,
            KinhDo: null,
            ViDo: null,
            TuyenDuong: null,
            MaTenCX: null,
            ThuocTinh: null,
            GhiChu: null,
            ChieuCao: null,
            DoRongTan: null,
            DuongKinh: null,
            NguoiCapNhat: null,
            MaTinhTrang: null,
            NgayTrong:  new Date().getFullYear() +'-'+(new Date().getMonth() + 1) + '-' + new Date().getDate(),
            NgayCapNhat: new Date().getFullYear() +'-'+(new Date().getMonth() + 1) + '-' + new Date().getDate(),
        }
    },
    searchs: [],
    track: {
 
    },
    page_image: {
        router: false,
        objectid: 0
    }
}
const getters = {
    getView: (state) => {
        return state.view
    },
    getFeatureLayer: (state) => {
        return state.FeatureLayer
    },
    getpopuptemplate: (state) => {
        return state.ubgpopupTemplate
    },
    getSelectedFeature: (state) => {
        return state.selectedFeature
    },
    getStateDialogUpdate: (state) => {
        return state.dialog_update
    },
    getFeature: (state) => {
        return state.feature
    },
    getSearch: (state) => {
        return state.searchs
    },
    getTrack: (state) => {
        return state.track
    },
    get_page_image: (state) => {
        return state.page_image
    }
}
export default{
    state,
    getters,
    mutations,
    actions,
}