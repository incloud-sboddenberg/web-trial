import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const PaginationTemplate = (isNextDisabled, isPrevDisabled, handleNext, handlePrev) => (

    <div>
        {isPrevDisabled &&
        
            <FlatButton label="Prev" disabled={true} onClick={handlePrev}/>
        }
        {!isPrevDisabled &&
        
            <FlatButton label="Prev" onClick={handlePrev}/>
        }

        {isNextDisabled &&
        
            <FlatButton label="Next" disabled={true} onClick={handleNext}/>
        }
        {!isNextDisabled &&
        
            <FlatButton label="Next" onClick={handleNext}/>
        }
    </div>
)


export default PaginationTemplate
