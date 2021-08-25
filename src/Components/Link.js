import React from "react";
function Link({link,removeLink}) {
    function removeClicked(){
        removeLink(link.id);
    }
    
    return(
        <div>
            <a href={link.url}> {link.url} </a>
            <button onClick={removeClicked}>Remove</button>
        </div>
    )
}
export default Link;