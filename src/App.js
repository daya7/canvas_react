
import React, {useRef} from 'react';
import CanvasDraw from 'react-canvas-draw';


function App() {
  const firstCanvas= useRef(null)
   const scndCanvas= useRef(null)
   //saving
  const handleClick= () =>{
  const data = firstCanvas.current.getSaveData();
  console.log(data)
  scndCanvas.current.loadSaveData(data);
  }
  //cleaning scream
  const clear= () =>{
  firstCanvas.current.clear();
  scndCanvas.current.clear();
  }
  const undo =() =>{
  firstCanvas.current.undo();
  }
  return (
    <div>
    //functionals buttons
    <button onClick={handleClick}>
    Save Draw
    </button>
    <button onClick={clear}>
    Clear
    </button>
    <button onClick={undo}>
    Undo
    </button>
    
    //spaces
    <CanvasDraw 
    brushRadius ={1}
    brushColor ='red'
    catenaryColor = "red"
    hideGrid= {false}
    style ={{border: '1px solid #0000'}}
    ref = {firstCanvas}
    
    />
    <CanvasDraw 
    hideGrid={true} 
    disabled= {true}
    ref = {scndCanvas}/>
    </div>
  );
}

export default App;
