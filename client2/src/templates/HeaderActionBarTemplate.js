import React from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FontIcon from 'material-ui/FontIcon'
import { blue500 } from 'material-ui/styles/colors'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import NavigationClose from 'material-ui/svg-icons/navigation/close'



const HeaderActionBarTemplate = (
    username, handleLogout) => (
    <div>
        <Toolbar className="sticky-toolbar">
            <ToolbarGroup firstChild={true}>
            <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                onClick={() => {console.log("open drawer")}}
            >
                menu
            </FontIcon>
                <p className="user-section">Welcome</p> <h4 className="user-section bigger">{username}</h4>
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarSeparator />
                <IconMenu
                iconButtonElement={
                    <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                    </IconButton>
                }
                >
                    <MenuItem primaryText="Logout" onClick={handleLogout} />
                </IconMenu>
            </ToolbarGroup>
        </Toolbar>
        
    </div>
)


export default HeaderActionBarTemplate
