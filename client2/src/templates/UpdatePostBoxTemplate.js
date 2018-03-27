import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Dialog from 'material-ui/Dialog'
import { blue500 } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'

const UpdatePostBoxTemplate = (handleEdit, handleDelete, confirmMessage, isConfirmOpen, closeConfirmDialog, handleAcceptAction) => {
    const actions = [
      <FlatButton
        label="No"
        primary={true}
        onClick={closeConfirmDialog}
      />,
      <FlatButton
        label="Yes"
        primary={true}
        keyboardFocused={true}
        onClick={handleAcceptAction}
      />
    ]
    return (
        <div className="update-section">
            <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                onClick={handleEdit}
            >
                    mode_edit
            </FontIcon>

            <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                onClick={handleDelete}
            >
                    delete
            </FontIcon>

            <Dialog
              title="Are you Sure?"
              modal={false}
              actions={actions}
              open={isConfirmOpen}
              onRequestClose={closeConfirmDialog}
            >
                {confirmMessage}
            </Dialog>
        </div>
    )
}


export default UpdatePostBoxTemplate
