import {useState}from "react";
function Pra(){
    const [value,setvalue]=useState(10);
    
    function add(){
        if (value!=10){
        
        setvalue(value+1)
        
            if(value===5){
            {value+"This is a mid value"}
        }
    }
        else{
            {value+"It do not more than this value"}
        }
    }
    
        function remove(){
        if (value!=1){
        
        setvalue(value-1)
                if(value===5){
            {value+"This is a mid value"}
        }
        }

        else{
            {value+"It do not less than this value"}
        }
        

    }
        
    
    return(

<div>
    <h1>Button value{value}</h1>
    {/* <h3>Mid value{mid}</h3> */}
    <button onClick={add}>Add</button>
    <button onClick={remove}> Remove</button>
</div>
    );
}
export default Pra;