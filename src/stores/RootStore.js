import { createContext, useContext } from 'react'
import AppleStore from './AppleStore'

class RootStore {
  constructor() {
    this.appleStore = new AppleStore()
  }
}
const RootStoreContext = createContext()
const useRootStore = () => {
  return useContext(RootStoreContext)
}
const RootStoreProvider = ({ store, children }) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  )
}
export { RootStore, RootStoreProvider, useRootStore }
