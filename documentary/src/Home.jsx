function Home({setQuery}){
    return(
        <div className="home">
         <span className="material-symbols-outlined home-icon"
         onClick={() => setQuery("")}
         style={{cursor:"pointer"}}
         >
home
</span>
</div>
    );
}
export default Home;