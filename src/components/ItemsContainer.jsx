import React from "react";
import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";

const ItemsContainer = () => {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={PRODUCTS} title="Who We Are"/>
        <Item Links={RESOURCES} title="Our Firm"/>
        <Item Links={COMPANY} title="Results"/>
        <Item Links={SUPPORT} title="Resources"/>
    </div>
    );
};

export default ItemsContainer;