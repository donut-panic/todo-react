import React from 'react';

const Tag = props => {

    const style = `add-task__icon-${props.type}`;

    return(
        <span onClick={props.clearTagMethod} className="add-task__tag"><i className={style}></i> {props.value}</span>
    );
}

export default Tag;