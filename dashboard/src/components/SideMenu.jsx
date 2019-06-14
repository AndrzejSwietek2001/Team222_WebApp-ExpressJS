import React from "react";



const SideMenu = (props) => {
    return(
        <div className="menu">
            
                <div className="block-menu-first">
                    <a className="a-menu" href="/">user </a>
                </div>
                <div className="block-menu">
                    <a href="/">czat</a>
                </div>
                <div className="block-menu">
                    <a href="/"><img src="https://img.icons8.com/flat_round/96/000000/combo-chart.png"/></a>
                </div>
                <div className="block-menu">
                    <a href="/"><img src="https://img.icons8.com/color/96/000000/calendar.png"/></a>
                </div>
                <div className="block-menu">
                    <a href="/"><img src="https://img.icons8.com/color/96/000000/opened-folder.png"/></a>
                </div>
                <div className="block-menu">
                    <a href="/"><img src="https://img.icons8.com/flat_round/96/000000/settings.png" /></a>
                </div>

        </div>
              
    );
}
export default SideMenu;