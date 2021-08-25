import React from "react";
function Link({link,removeLink,searchLink}) {
    function removeClicked(){
        removeLink(link.id);
    }
    function checksearch(){
        searchLink(link.id)  
    }
    return(
        <div>
            <a href={link.url}> {link.url} </a>
            <button onClick={removeClicked}>Remove</button>
        </div>
    )
}
export default Link;