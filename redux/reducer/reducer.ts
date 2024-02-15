// redux/reducer/rootReducer.ts
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import createSensitiveStorage from 'redux-persist-sensitive-storage'
import shopSlicer from '../shop-slicer'

const rootReducer = combineReducers({
  shop: shopSlicer,
})

const persistConfig = {
  key: 'root',
  storage: createSensitiveStorage({
    keychainService: 'mrJoni&Co',
    sharedPreferencesName: 'mrJoni&Co-sharedPreferences',
  }),
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Initialize redux store
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store

export type AppStore = ReturnType<typeof persistor>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
