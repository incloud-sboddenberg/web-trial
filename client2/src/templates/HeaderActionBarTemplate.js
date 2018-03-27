import React from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import CreatePost from '../components/CreatePost'
import FontIcon from 'material-ui/FontIcon'
import { blue500 } from 'material-ui/styles/colors'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import NavigationClose from 'material-ui/svg-icons/navigation/close'



const HeaderActionBarTemplate = (
    username, page, handleLogout, 
    isPostDialogOpen, openPostDialog, closePostDialog,
    isDrawerOpen, openDrawer, closeDrawer,
    categories, clickCategory,
    handlePostCreation) => (
    <div>
        <Toolbar className="sticky-toolbar">
            <ToolbarGroup firstChild={true}>
            <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                onClick={openDrawer}
            >
                menu
            </FontIcon>
                <p className="user-section">Welcome</p> <h4 className="user-section bigger">{username}</h4><p className="user-section">to {page}</p>
            </ToolbarGroup>
            <ToolbarGroup>
                <RaisedButton label="Create Post" primary={true} onClick={openPostDialog} />
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
            title="Create new Post"
            open={isPostDialogOpen} 
            onRequestClose={closePostDialog} > 
            <CreatePost 
                closeModel={closePostDialog} 
                isEdit={false}
                handleSubmit={handlePostCreation}/>
        </Dialog>

        <Drawer 
            open={isDrawerOpen} >
            <AppBar 
                title="Categories" 
                iconElementLeft={<IconButton><NavigationClose onClick={closeDrawer} /></IconButton>} />
            { 
                categories.map(categoryObj => (
                    <MenuItem disabled={categoryObj.isDisabled} key={categoryObj.category} onClick={clickCategory(categoryObj.category)}>
                        {categoryObj.category}
                    </MenuItem>
                )) 
            }
        </Drawer>
    </div>
)


export default HeaderActionBarTemplate
