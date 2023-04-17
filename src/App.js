// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';

function App (){
    return (
      <div>
        <img className='center'
        src={require('./Good Kitchen LOGO DESIGN WITH CHEF HAT SYMBOL.png')}
        alt="tokiti" />
        <p> This is an image of Tokiti's Kitchen logo</p>

        <div>
          <button onClick={() => alert("You clicked this button")}
          style = {{color: "blue"}}
          >Click me!</button>

        </div>

      </div>
      
      
    );
  }

export default App;