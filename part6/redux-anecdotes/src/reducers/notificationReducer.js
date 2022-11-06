import { createSlice } from "@reduxjs/toolkit";

/*const initialState = {
  state: 'OFF',
  message: ''
 }*/ //notificationAtStart.map(item => item)

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    isDisplay: false,
    data: ''
  },
  reducers: {
    setNotification(state, action) {
      console.log(action)
      const message = action.payload
      const newState = {
        ...state,
        isDisplay: true,
        data: message
      }

      return newState
    },
    cleanNotification(state, action) {
      if(state.isDisplay) {
        const newState = {
          ...state,
          isDisplay: false,
          data: ''
        }
        return newState
      }

      return state
    }
  }
})



export const { displayNotification, setNotification, cleanNotification} = notificationSlice.actions
export default notificationSlice.reducer
