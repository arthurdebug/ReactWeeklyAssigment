import React from "react";
function Link({link,removeLink}) {
    function removeClicked(){
        removeLink(link.id);
    }
    
    return(
        <div className="danger">
            <a href={link.url}> {link.url} </a>
            <button className="primary" onClick={removeClicked}>Remove</button>
        </div>
    )
}
export default Link;