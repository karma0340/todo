
function Game({title,des,par,image,title2,des2,par2,image2,title3,des3,par3,image3}){
    return(
        <>
        <div>
            <h1>{title}</h1>
            <h3>{des}</h3>
            <p>{par}</p>
            <img src={image}/>
            </div>

                    <div>
            <h1>{title2}</h1>
            <h3>{des2}</h3>
            <p>{par2}</p>
            <img src={image2}/>
            </div>

                    <div>
            <h1>{title3}</h1>
            <h3>{des3}</h3>
            <p>{par3}</p>
            <img src={image3}/>
            </div>
            
            
        </>
    );
}
export default Game;