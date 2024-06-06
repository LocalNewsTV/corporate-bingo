import Header from './components/Header/Header'
import '@fontsource/roboto';
import '@fontsource-variable/open-sans';
import { useState } from 'react';

const App = () => {
  const [viewSettings, setViewSettings] = useState<boolean>(false);
  const settingsToggle = () => {
    setViewSettings(oldState => !oldState);
  }
  return (
    <>
      <Header
        state={viewSettings}
        stateToggle={settingsToggle}
      />
    </>
  )
}

export default App
