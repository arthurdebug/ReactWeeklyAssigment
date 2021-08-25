import React from "react";
import Link from "./Link";
function LinkList({links,removeLink,searchLink}){
return(
    <ul>
        {links.map(link=>(
            <Link 
            key={link.id}
            link={link}
            removeLink={removeLink}
            searchLink={searchLink}
             />
        ))}
    </ul>
)
}

export default LinkList;