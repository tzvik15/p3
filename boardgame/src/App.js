import React from 'react';
import './App.css';
import Board from './components/Board/Board';
import TileCard from './components/TileCard/TileCard';
import Chat from './components/Chat/Chat';
import Choice from './components/Choice/Choice';
import Header from './components/Header/Header';

function App() {

   return (
      <body>

         <Header />

         <div className="content-container">
               
               <Board />
            
            <div className="cards-container col">

               <Chat />
               <TileCard />
               <Choice />
               
            </div>

         </div>
         
      </body>
   )
}

export default App;
