'use client'
import store, { AppStore, persistor } from '@/redux/reducer/reducer'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  )
}
