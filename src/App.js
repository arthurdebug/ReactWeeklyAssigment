import './App.css';
import React,{ useEffect, useState } from "react";
import LinkFormType from "./Components/LinkFormType";
import LinkList from "./Components/LinkList";
import SearchBar from "./Components/SearchBar";
//local store for page refresh still keep data
const LOCAL_STORAGE_KEY = "react-link-list-links";
function App() {
  const[links, setLinks] = useState([]);
  //trying to use search
  const [search, setSearch] = useState('')
//for local store
 useEffect(() =>{
   const storagelinks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));if (storagelinks){setLinks(storagelinks);}
 },[]);
  useEffect(() =>{
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(links));
  },[links]);
  //add link
  function addLink(link){
    setLinks([link, ...links])
  }
//remove link
  function removeLink(id){
    setLinks(links.filter(link =>link.id !==id))
  }
//search function
const filteredLinks = (search) => {
  const lowerSearch = search.toLowerCase();
  return(links.filter((link) => {
    return ( 
      link.url.toLowerCase().indexOf(lowerSearch) > -1
    );
  }))
};

function onSearchBarChange(search){
  setSearch(search);
};
  return (
<div className="App">
  <header className="App-header">
    <div className="App"><SearchBar onSearchChangeProp={onSearchBarChange}/></div>
    <p> Arthur Links</p>
    <LinkFormType addLink={addLink} />
    <LinkList links={filteredLinks(search)} 
    removeLink={removeLink}
    />
  </header>
</div>
)
}

export default App;