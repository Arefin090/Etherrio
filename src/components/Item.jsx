import React from "react";

const Item = ({Links,title}) => {
    return (
        <div className="text-left">
            <ul>
                <h1 className="mb-1 font-semibold">{title}</h1>
                {
                    Links.map((link) =>(
                        <li key={link.name} className="text-gray-400">{link.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Item;