import React from 'react';
import RoutesApp from './routes/RoutesApp';



const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <RoutesApp />
      </div>
    </ThemeProvider>
  );
};




export default App