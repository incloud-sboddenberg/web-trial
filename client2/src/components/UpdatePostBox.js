import { Component } from 'react'

import UpdatePostBoxTemplate from '../templates/UpdatePostBoxTemplate'
import PropTypes from 'prop-types'


class UpdatePostBox extends Component {

    static propTypes = {
        postTitle: PropTypes.string,
        confirmDelete: PropTypes.func.isRequired,
        confirmEdit: PropTypes.func.isRequired,
        isComment: PropTypes.bool.isRequired
    }
    
    state = {
        isConfirmOpen: false,
        confirmMessage: '',
        action: 1 // 0: for editing, 1: for deleting
    }

    closeConfirmDialog = () => this.setState({ isConfirmOpen: false })
    openConfirmDialog = () => this.setState({ isConfirmOpen: true })

    setEditAsAction = () => this.setState({ action: 0})
    setDeleteAsAction = () => this.setState({ action: 1})

    handleEdit = () => {
        this.setConfirmMessage("edit")
        this.setEditAsAction()
        this.openConfirmDialog()
    }

    handleDelete = () => {
        this.setConfirmMessage("delete")
        this.setDeleteAsAction()
        this.openConfirmDialog()
    }

    handleAcceptAction = () => {
        switch (this.state.action) {
            case 0:
                this.props.confirmEdit()
            break;
            case 1:
                this.props.confirmDelete()
            break;
            default:
        }
        this.closeConfirmDialog()
    }

    setConfirmMessage = (action) =>  {
        const { isComment, postTitle } = this.props
        let confirmMessage = `Are you sure to ${action} comment?`
        if (!isComment) {
            confirmMessage = `Are you sure you to ${action} post: "${postTitle}"?` 
        }
        this.setState({ confirmMessage }) 
    }
    

    render() {
        return (
            UpdatePostBoxTemplate(this.handleEdit, this.handleDelete, this.state.confirmMessage, this.state.isConfirmOpen, this.closeConfirmDialog, this.handleAcceptAction)
        )
    }
}


export default UpdatePostBox
