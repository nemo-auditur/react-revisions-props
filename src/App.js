import './App.css';

import Component1 from './Components/Component1';

function App() {
  return (
    <div className="App">
      App:
      <Component1
        surname='Paul'
        lastname='Macron'
      />
      <Component1
        surname='Pierre'
        lastname='Dupont'/>
    </div>
  );
}

export default App;
