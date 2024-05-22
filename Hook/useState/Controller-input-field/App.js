import React from 'react' ; 

import {useState} from 'react' ; 



function App (){

        const [string,setString] = useState ('') ; 

        const handleInput = (e)=>{
            setString( e.target.value ) ; 
        }

        return (
            <div style={ {margin : 'auto' , textAlign : 'center ', marginTop : 150  } }  >
                <div style={{display : "inline-block"  }} >
                <input placeholder="enter here boy..."  type="text" onInput={handleInput}  /><br/>
                <label>you enter : </label>
                <input  value= {string}/>
                </div>
            </div>
        )



}


export default App; 