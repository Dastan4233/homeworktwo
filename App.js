import React, {useState} from "react";

function App() {
  const [active, setActive] = useState(false);

  const Click = () => {
    setActive( state => ! state);
  };
  return (
    <div className="App">
      <button className="first"   style={{
          backgroundColor: active ? 'blue' : '',
          
           
        }}
        onClick={Click}
      >
        
        </button>
      <button className="second" style={{
          backgroundColor: active ? 'red' : '',
          
        }}
        onClick={Click}
      >
        
        </button>
    </div>
    
  );
}

export default App;
