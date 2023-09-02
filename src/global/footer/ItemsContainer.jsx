import React from "react";
import Item from "./Item";
import { ABOUTUS, OURFIRM, RESULTS, RESOURCES } from "./Menus";

const ItemsContainer = () => {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={ABOUTUS} title="Who We Are"/>
        <Item Links={OURFIRM} title="Our Team"/>
        <Item Links={RESULTS} title="Results"/>
        <Item Links={RESOURCES} title="Resources"/>
    </div>
    );
};

export default ItemsContainer;