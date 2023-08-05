import userReducer from '../Redux/User/UserSlice'
import {persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
const { configureStore } = require("@reduxjs/toolkit");

const persistConfig = {
    key:'root',
    storage
};
const persisted = persistReducer(persistConfig,userReducer)

const Store = configureStore({
    reducer: {
        user : persisted,
    },
});

const persistor = persistStore(Store)
export { Store,persistor}