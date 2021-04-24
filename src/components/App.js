import AppleBasket from './AppleBasket'

import { RootStore, RootStoreProvider } from '../stores/RootStore'
const rootStore = new RootStore()

function App() {
  return (
    <RootStoreProvider store={rootStore}>
      <AppleBasket />
    </RootStoreProvider>
  );
}

export default App;
