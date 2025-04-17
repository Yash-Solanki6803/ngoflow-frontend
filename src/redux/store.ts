import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

export interface RootState {
  auth: ReturnType<typeof authReducer>;
}

const persistConfig: PersistConfig<RootState> = {
  key: "root", // Match the reducer key
  storage,
  whitelist: ["auth"], // No need for whitelist since this config is specific to auth
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore Redux Persist actions
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
