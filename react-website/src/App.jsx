import SearchBar from "./components/SearchBar"
import Card from "./components/Card"
import { useState, useEffect } from "react";
export default function App(){
  const [query,setQuery]=useState("");
  const[data,setData]=useState([]);
  
  
  
  useEffect(() => {
  async function loadData() {
    try {
      // STEP 1: Fetch the list of Pokemon (first 151)
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const list = await res.json();

      // STEP 2: Fetch details for each Pokémon
      const detailedData = await Promise.all(
        list.results.map(async (pokemon) => {
          const detailRes = await fetch(pokemon.url);
          const detailData = await detailRes.json();

          return {
            id: detailData.id,
            name: detailData.name,
            img: detailData.sprites.front_default, // image URL
          };
        })
      );

      setData(detailedData);
    } catch (err) {
      console.error("Error loading Pokémon", err);
      setData([]);
    }
  }

  loadData();
}, []);








        const filteredData =
  query.trim() === ""
    ? data
    : data.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()))













  return (
    
    <>
    <div className="text-2xl">
    <SearchBar query={query} setQuery={setQuery}/>
    </div>
    
    <div className="grid grid-cols-3 gap-4 mt-4 bg-yellow-100">
  {filteredData.map((item) => (
    <Card 
      key={item.id}
      img={item.img}
      title={item.name}
    />
  ))}
</div>


    </>
  )
}