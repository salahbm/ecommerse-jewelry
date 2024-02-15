declare module 'redux-persist/es/persistReducer' {
  import {Reducer} from 'redux';

  export default function persistReducer<S, A>(
    config: any,
    reducer: Reducer<S, A>,
  ): any;
}

declare module 'redux-persist/es/persistStore';
declare module 'redux-persist/integration/react';
declare module 'redux-persist-sensitive-storage';
