import React from 'react';
import Checkbox from './Checkbox/Checkbox';
import dayjs from 'dayjs';

const ListItem = props => {

    const { id, important, deadline, completed, title } = props;

    const priorityDisplay = important ? (
        <div className="list__task-priority">
            <i className="list__icon-important"></i>
            <span className="list__icon-desc">Important</span>
        </div>
    ) : null;

    const deadlineDisplay = dayjs(deadline).format('YYYY/MM/DD');

    return (
        <li className="list__li">
            <div className="list__checkbox">
                <Checkbox completed={completed} toggleStatusMethod={() => props.toggleStatusMethod(id, !completed)} />
            </div>
            <div className="list__content">
                <div className="list__task-title">{completed ? <span className="list__strike">{title}</span> : title}</div>
                <div className="list__details">
                    <div className="list__task-date">
                        <i className="list__icon-deadline"></i>
                        <span className="list__icon-desc">{deadlineDisplay}</span>
                    </div>
                    {priorityDisplay}
                </div>
            </div>
            <div className="list__delete">
                <i className="list__icon-remove" onClick={() => props.removeTaskMethod(id)}></i>
            </div>
        </li>
    );
}

export default ListItem;