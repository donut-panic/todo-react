import React from 'react';

const Checkbox = props => {

    const toggleStatus = event => {
        event.target.classList.toggle('checkbox-icon--active');
        setTimeout(() => {
            props.toggleStatusMethod();
        }, 1400);
    }

    const checkboxStyle = props.completed ? 'checkbox-icon checkbox-icon--active' : 'checkbox-icon';

    return (
        <svg className={checkboxStyle} onClick={toggleStatus} data-name="Checkbox" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path className="checkbox-icon__path checkbox-icon__circle-grey"
                d="m16.05 30a14 14 0 1 0 -14 -14 14 14 0 0 0 14 14z" />
            <path className="checkbox-icon__path checkbox-icon__circle-green"
                d="M21.52,3.11A14,14,0,1,0,30.05,16a14.6,14.6,0,0,0-.19-2.31" />
            <polyline className="checkbox-icon__path checkbox-icon__tick" points="10.59 14.53 14.89 18.83 30.13 3.6" />
        </svg>
    );

}

export default Checkbox;