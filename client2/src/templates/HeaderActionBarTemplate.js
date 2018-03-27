import React from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import Dialog from 'material-ui/Dialog'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField'
import {List, ListItem} from 'material-ui/List'


const HeaderActionBarTemplate = (
    username, handleLogout,
    isDialogOpen, toggleDialog,
    handleCityInput, cities, addCountryToUser) => (
    <div>
        <Toolbar className="sticky-toolbar">
            <ToolbarGroup firstChild={true}>
                <p className="user-section">Welcome</p> <h4 className="user-section bigger">{username}</h4>
            </ToolbarGroup>
            <ToolbarGroup>
             <FloatingActionButton mini={true} onClick={toggleDialog} >
                  <ContentAdd />
            </FloatingActionButton>
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

        <Dialog
            className="long-dialog"
            title="Add New City"
            open={isDialogOpen} 
            onRequestClose={toggleDialog} > 
               <TextField 
                hintText="city"
                fullWidth={true}
                onChange={handleCityInput}
                floatingLabelText="City" />
            <List>
                {cities.map((city, i) => (<ListItem key={i} primaryText={city.name} onClick={addCountryToUser(city.name, city.id)} />))}
            </List>
        </Dialog>

        
    </div>
)


export default HeaderActionBarTemplate
