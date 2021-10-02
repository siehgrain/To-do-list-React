import React, { useState } from "react";

import "./App.css";

const App = () => {

  const [message,setMessage] = useState('heello');

    return (
        <>
            <div className="container">{message}</div>
            <button onClick={() => setMessage("helppp") }>
              mudar mensagem
            </button>
        </>
    );
};

export default App;