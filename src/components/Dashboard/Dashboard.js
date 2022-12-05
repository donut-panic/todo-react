import React, { useState, useEffect } from 'react';
import { withAuthorization } from '../Session';
import UserBar from './UserBar/UserBar';
import Taskbar from './Taskbar/Taskbar';
import Sort from './Sort/Sort';
import List from './List/List';
import Footer from './Footer/Footer';
import dayjs from 'dayjs';

const Dashboard = props => {

    const userRef = props.firebase.db.ref(`users/${props.firebase.auth.currentUser.uid}`);
    const [activeSort, setActiveSort] = useState({ method: 'priority', order: 'asc' });
    const [hasLoaded, setHasLoaded] = useState(false);
    const [incompletedTasks, setIncompletedTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const addTask = (title, important, deadline) => {

        const deadlineTimestamp = !deadline ? Date.now() : dayjs(deadline).valueOf();

        userRef.push({
            completed: false,
            deadline: deadlineTimestamp,
            important,
            title
        });
    }

    const removeTask = id => {
        userRef.child('/' + id).remove()
            .catch(error => {
                console.log('Error: ' + error);
            });
    }

    const toggleStatus = (id, status) => {
        userRef.child('/' + id).update({ completed: status })
            .catch(error => {
                console.log('Error: ' + error);
            });
    }

    const setSort = (method, order) => {
        setActiveSort({ method, order });
    }

    useEffect(() => {
        const listener = userRef.on('value', snapshot => {
            const fetchedIncompletedTasks = [];
            const fetchedCompletedTasks = [];
            snapshot.forEach(childSnapshot => {
                const key = childSnapshot.key;
                const data = childSnapshot.val();
                if (!data.completed) {
                    fetchedIncompletedTasks.push({ id: key, ...data });
                } else {
                    fetchedCompletedTasks.push({ id: key, ...data });
                }
            });
            setIncompletedTasks(fetchedIncompletedTasks);
            setCompletedTasks(fetchedCompletedTasks);
            setHasLoaded(true);
        });
        return () => userRef.off('value', listener);
    }, [props.firebase.db]);

    return (
        <div className="dashboard">
            <UserBar />
            <Taskbar
                addTaskMethod={addTask} />
            <Sort
                activeSort={activeSort}
                setActiveSortMethod={setSort} />
            <List
                title="To do"
                sort={activeSort}
                tasks={incompletedTasks}
                hasLoaded={hasLoaded}
                toggleStatusMethod={toggleStatus}
                removeTaskMethod={removeTask} />
            <List
                title="Completed"
                sort={activeSort}
                tasks={completedTasks}
                hasLoaded={hasLoaded}
                toggleStatusMethod={toggleStatus}
                removeTaskMethod={removeTask} />
            <Footer />
        </div>
    );

}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Dashboard);