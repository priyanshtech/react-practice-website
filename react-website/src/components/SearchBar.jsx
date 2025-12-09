export default function SearchBar({ query,setQuery}){
    return (
        <div className="flex justify-center bg-green-200">
            <input className="border-2 w-90 mt-5 rounded-lg px-1" placeholder="search"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}></input>
        </div>
    )
}