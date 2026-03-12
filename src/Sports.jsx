import LoadLi from "./LoadLi";

export default function Sports({sport}) {
    
    // console.log(sport);
    

    if (sport.players > 5) {
        
        return (
            <div className="actor">
    
                
    
                <ul>
    
                    <LoadLi  sport = {sport}></LoadLi>
    
                </ul>
            </div>
        )
    }

}