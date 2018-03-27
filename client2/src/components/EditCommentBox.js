import { Component } from 'react'
import serializeForm from 'form-serialize'

import EditCommentBoxTemplate from '../templates/EditCommentBoxTemplate'
import PropTypes from 'prop-types'

class EditCommentBox extends Component {

    static propTypes = {
        comment: PropTypes.string.isRequired,
        isDialogOpen: PropTypes.bool.isRequired,
        closeDialog: PropTypes.func.isRequired,
        saveEdit: PropTypes.func.isRequired
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        this.props.saveEdit(values.comment)
    }

    render() {
        const { comment, isDialogOpen, closeDialog } = this.props
        return (
            EditCommentBoxTemplate(this.handleFormSubmit, comment, isDialogOpen, closeDialog)
        )
    }
}

export default EditCommentBox
