import React from "react";
import Link from "./Link";
function LinkList({links,removeLink}){
return(
    <ul>
        {links.map(link=>(
            <Link 
            key={link.id}
            link={link}
            removeLink={removeLink}
             />
        ))}
    </ul>
)
}

export default LinkList;