import React from 'react'
import Header from './components/Header'
import Routes from './routes'
import StyledApp from './appStyle'

const App = () => {
  return (
      <StyledApp>
        <Header />
        <Routes />
      </StyledApp>
  );
}

export default App;
