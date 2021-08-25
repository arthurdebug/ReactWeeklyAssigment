import React,{ useState } from "react";
import {v4 as uuid} from "uuid";

function LinkFormType({addLink}){
    const [link, setLink] = useState({
        id:"",
        url:"",
        tags:[]
    })

function inputLink (e) {
 setLink({ ...link, url: e.target.value})
}

function handleSubmit(e){
    e.preventDefault()
    if(link.url.trim()){
        addLink({...link, id: uuid()});
        setLink({...link, url: ""});
    }
}
return (
    <form onSubmit={handleSubmit}>
        <input 
        name="url"
        type="text"
        value={link.url}
        onChange={inputLink}
        />
        
        <button type="submit">Submit</button>
    </form>
)
}
export default LinkFormType;