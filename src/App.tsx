import Header from './components/Header/Header'
import '@fontsource/roboto';
import '@fontsource-variable/open-sans';
import { useState } from 'react';
import Main from './components/views/Main/Main';

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
      <Main
        setup={viewSettings}
        stateToggle={settingsToggle}
      />
    </>
  )
}

export default App
