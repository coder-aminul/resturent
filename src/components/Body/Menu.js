import React, { Component } from "react";
import DISHES from '../.././Data/Dishes';
import MenuItems from "./MenuItems";

class Menu extends Component{
    state={
        dishes:DISHES
    }
    render(){
        const menu=this.state.dishes.map(item=>{
            return(
                <MenuItems dises={item} key={item.id}/>
            );
        })
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="grid-container">
                            {menu}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Menu;