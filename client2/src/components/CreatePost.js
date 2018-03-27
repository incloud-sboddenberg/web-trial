import { Component } from 'react'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'

import CreatePostTemplate from '../templates/CreatePostTemplate'


import { connect } from 'react-redux'


class CreatePost extends Component {

    static propTypes = {
        closeModel: PropTypes.func.isRequired,
        categories: PropTypes.array.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        isEdit: PropTypes.bool.isRequired,
        editValues: PropTypes.object
    }

    state = {
        isAvailable: true
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        const { isEdit, categories, handleSubmit, closeModel } = this.props
        // check for categories only on creation mode
        if (!isEdit) {
            if (categories.find(category => category === values.category) === undefined) {
                this.setState({ isAvailable: false })
                return 
            } else {
                this.setState({ isAvailable: true })
            }
        }

        handleSubmit(values.title, values.content, values.category) 
        closeModel()
    }

    checkEditValues = () => {
        const { editValues, isEdit } = this.props
        if (!isEdit || editValues === undefined) {
            return {title: undefined, content: undefined}
        }

        return editValues
    }



    render() {
        const { categories, isEdit } = this.props
        const editValues = this.checkEditValues()
        return (
            CreatePostTemplate(
                this.handleFormSubmit.bind(this), 
                categories, 
                this.state.isAvailable,
                isEdit, editValues.title, editValues.content)
        )
    }
}

function mapStateToProps ({ categories }) {
    return {
        categories: categories.ids
    }
}


export default connect(mapStateToProps)(CreatePost)
