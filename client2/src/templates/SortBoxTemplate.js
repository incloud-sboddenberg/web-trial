import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const SortBoxTemplate = (handleSortChanging, sortValue, isInComments) => {

    let cssClass = "sort-box"
    if (isInComments !== undefined && isInComments) {
        cssClass="sort-in-comments"
    }


    return (
        <SelectField
            className={cssClass}
            floatingLabelText="Sort by:"
            value={sortValue}
            onChange={handleSortChanging}
        >
            <MenuItem value={1} primaryText="best" />
            <MenuItem value={2} primaryText="worst" />
            <MenuItem value={3} primaryText="newest" />
            <MenuItem value={4} primaryText="oldest" />
        </SelectField>
    )



}

export default SortBoxTemplate
