


export default function LoadLi({sport }) {
    
    // console.log(sport.name);
    
    return <li >  Name : {sport.name ? sport.name : "Guest"} .  Players : {sport.players ? sport.players : 0} . Country : {sport.country} . PopularPlayer : {sport.popularPlayer}</li>
}