import React from 'react';
import ListItem from './ListItem/ListItem';
import Loader from './Loader/Loader';

const List = props => {

    let listItems = [];
    let sortedList = [];
    const { method, order } = props.sort;
    const hasLoaded = props.hasLoaded;

    if (method === 'deadline') {
        sortedList = order === 'asc' ? props.tasks.sort((a, b) => a.deadline - b.deadline) : props.tasks.sort((a, b) => b.deadline - a.deadline);
    } else {
        sortedList = order === 'asc' ? props.tasks.sort((a, b) => a.important - b.important) : props.tasks.sort((a, b) => b.important - a.important);
    }

    sortedList.forEach(item => {
        const tag = <ListItem
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
            deadline={item.deadline}
            important={item.important}
            toggleStatusMethod={props.toggleStatusMethod}
            removeTaskMethod={props.removeTaskMethod} />
        listItems.push(tag);
    });

    const emptyInfo = props.title === 'To do' ? 'Add some tasks and start working.' : 'Nothing completed yet.';

    return (
        <div className="list">
            <h1 className="list__list-title">{props.title} ({listItems.length})</h1>
            <ul className="list__ul">
                {!hasLoaded ? <Loader /> : listItems.length === 0 ? <div className="list__empty-info">{emptyInfo}</div> : listItems}
            </ul>
        </div>
    );
}

export default List;