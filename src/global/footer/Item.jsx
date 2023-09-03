import React from "react";

const Item = ({Links,title}) => {
    return (
        <div className="text-left">
            <ul>
                <h1 className="text-white font-bold">{title}</h1>
                {
                    Links.map((link) =>(
                        <li key={link.name} className="text-white">{link.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Item;