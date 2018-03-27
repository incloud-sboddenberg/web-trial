import { Component } from 'react'

import PaginationTemplate from '../templates/PaginationTemplate'
import PropTypes from 'prop-types'

class Pagination extends Component {

    static propTypes = {
        page: PropTypes.number.isRequired,
        finalPage: PropTypes.number.isRequired
    }
    
    state = {
        isNextDisabled: false,
        isPrevDisabled: false
    }

    componentWillReceiveProps(nextProps) {
        const { finalPage, page } = nextProps
        
        if (finalPage === 1) {
            this.setState({ isNextDisabled: true, isPrevDisabled: true })
        }
        else {
            if (page === 1)
                this.setState({ isPrevDisabled: true, isNextDisabled: false })
            else if (page === finalPage)
                this.setState({ isNextDisabled: true, isPrevDisabled: false })
            else
                this.setState({ isPrevDisabled: false, isNextDisabled: false })
        }
    }


    render() {
        return (
            PaginationTemplate(
                this.state.isNextDisabled, 
                this.state.isPrevDisabled, 
                this.props.handleNext, 
                this.props.handlePrev
            )
        )
    }
}

export default Pagination
