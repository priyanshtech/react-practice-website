import SearchBar from "./components/SearchBar"
import Card from "./components/Card"
import { useState, useEffect } from "react";
export default function App(){
  const [query,setQuery]=useState("");
  const[data,setData]=useState([]);
  
  async function fetchingApi(){
    const fetched= await fetch("https://pokeapi.co/api/v2/pokemon?limit=1500");
    const response=await fetched.json();
    const cleaner= response.results.map((item)=>({
      naam:item.name,

    }))
    setData(cleaner)};
    
 
  
  useEffect(() => {
    fetchingApi();}
     , []);





  const filteredData =
  query.trim() === ""
    ? data
    : data.filter((item) =>
        item.naam.toLowerCase().includes(query.toLowerCase())
      );



        













  return (
    
    <>
    <div className="text-2xl">
    <SearchBar query={query} setQuery={setQuery}/>
    </div> 
    
    <div className="grid grid-cols-3 gap-4 mt-4 bg-yellow-100">
  {filteredData.map((item) => (
    <Card 
      key={item.naam}
      title={item.naam}
    />
  ))}
</div>


    </>
  )
}
