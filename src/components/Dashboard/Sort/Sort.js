import React from 'react';

const Sort = props => {

    // const priorityTabStyle = props.activeSort === 'priority' ? 'sort__tab sort__tab--active' : 'sort__tab';
    const { method, order } = props.activeSort;

    return (
        <div className="sort">
            <div className="sort__bar">
                <button
                    className={method === 'priority' ? 'sort__tab sort__tab--active' : 'sort__tab'}
                    onClick={() => props.setActiveSortMethod('priority', order === 'asc' ? 'desc' : 'asc')}>Priority {order === 'asc' ? '↑' : '↓'}
                </button>
                <button className={method === 'order' ? 'sort__tab sort__tab--active' : 'sort__tab'}
                    onClick={() => props.setActiveSortMethod('deadline', order === 'asc' ? 'desc' : 'asc')}>Date {order === 'asc' ? '↑' : '↓'}
                </button>
            </div>
        </div>
    );
}

export default Sort;