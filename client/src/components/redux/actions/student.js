import {DELETE, UPDATE, FETCH_ALL, CREATE} from '../../constants/actionType'
import * as api from '../../../API';

// action creator
export const getStudentDetail = () => async (dispatch) => { 
    try {
        const { data } = await api.fetchDetail();

        dispatch({ type:  FETCH_ALL, payload: data })
       
    } catch (error) {
        console.log('get error ==> ', error)
    }
}

export const addStudentDetail = (products) => async (dispatch) => {
    try {   
        const {data} = await  api.addDetail(products)

        dispatch({ type: CREATE , payload: data})
    } catch (error) {
        console.log('post error ==> ', error)
    }
}

export const updateStudentDetail = (id, products) => async (dispatch) => {
    try {
       const { data } =  await api.updateDetail(id, products)

       dispatch({ type: UPDATE, payload: data})
    } catch(error) {
        console.log(error)
    }
}

export const deleteStudentDetail = (id) => async (dispatch) => {
    try {
        await api.deleteDetail(id)

        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}