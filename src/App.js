import './App.css';
import React,{ useEffect, useState } from "react";
import LinkFormType from "./Components/LinkFormType";
import LinkList from "./Components/LinkList";
//local store for page refresh still keep data
const LOCAL_STORAGE_KEY = "react-link-list-links";
function App() {
  const[links, setLinks] = useState([]);
  //trying to use search
//  const [searchTerm, setSearchTerm] = useState('')
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
//testing out search link
/*const searchHandler = (searchTerm) => {
  setSearchTerm(searchTerm);
  if (searchTerm !== "") {
    const NewLinkList = links.filter((link) => {
      return Object.values(link)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setSearchResults(NewLinkList);
  } else {
    setSearchResults(LinkList);
  }
};
*/
  return (
<div className="App">
  <header className="App-header">
    <div className="App"><input type="text" placeholder="Search Here" onChange={event =>{setSearchTerm(event.target.value)}}/></div>
    <p> Arthur Links</p>
    <LinkFormType addLink={addLink} />
    <LinkList links={links} 
    removeLink={removeLink}/>
  </header>
</div>
)
}

export default App;
