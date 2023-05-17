import React from "react";
import './App.css'
import TodoList from "./TodoList";

function App(){
  return(
    <div className="app">
      <TodoList ad='React' aciklama ='React Kullanılacak' tarih='17.05.2023'/>
      <TodoList ad='Spring Security' aciklama ='Security Önemli' tarih='17.05.2023'/>
      <TodoList ad='TodoLit' aciklama ='TodoList Güncel Tutulacak' />
    </div>

  );
}

export default App;