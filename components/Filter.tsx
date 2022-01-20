import React from 'react'

interface FilterProps {
    currentFilter: string,
    setFilter: (filter: string) => void
}

const Filter = (props: FilterProps) => {

    return(
        <div className={`Filter`}>
            <div 
                className={`Filter-button ${
                    props.currentFilter === "" 
                        ? 'active'
                        : ''
                }`}
                onClick={e => props.setFilter("")}
            >
                All
            </div>
            <div 
                className={`Filter-button ${
                    props.currentFilter === "open" 
                        ? 'active'
                        : ''
                }`}
                onClick={e => props.setFilter("open")}
            >
                Open
            </div>
            <div 
                className={`Filter-button ${
                    props.currentFilter === "done" 
                        ? 'active'
                        : ''
                }`}
                onClick={e => props.setFilter("done")}
            >
                Done
            </div>
        </div>
    )
}

export default Filter