import React, { useState } from 'react';
import Tag from './Tag/Tag';

const Taskbar = props => {
    const [task, setTask] = useState('');
    const [dateTag, setDateTag] = useState('');
    const [importantTag, setImportantTag] = useState(false);

    const type = event => {

        let task = event.target.value;
        const date = task.match(/([12]\d{3})[./-](0[1-9]|1[0-2])[./-](0[1-9]|[12]\d|3[01])$/);

        if (!importantTag && task.match(/important$|urgent$/i)) {
            setImportantTag(true);
        }

        if (!dateTag && date) {
            setDateTag(date.slice(1,4).join('/'));
        }

        setTask(task);
        
    }

    const addTask = event => {

        if (event.key === 'Enter' && task !== '') {
            props.addTaskMethod(task, importantTag, dateTag);
            setTask('');
            setDateTag('');
            setImportantTag(false);
        }
    }

    const clearTag = type => {
        (type === 'date') ? setDateTag('') : setImportantTag(''); 
    }

    return (
        <div className="add-task">
            <div className="add-task__wrapper">
                <input type="text" className="add-task__input" value={task} onChange={type} onKeyDown={addTask} placeholder="Type in some task and press Enter" />
                <div className="add-task__tags-wrapper">
                    {dateTag ? <Tag value={dateTag} type="date" clearTagMethod={() => clearTag('date')} /> : null }
                    {importantTag ? <Tag value="Important" type="important" icon="" clearTagMethod={() => clearTag('important')} /> : null }
                </div>
            </div>
        </div>
    )
}

export default Taskbar;