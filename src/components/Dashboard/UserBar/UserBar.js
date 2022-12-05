import React, { useContext } from 'react';
import AuthUserContext from '../../Session/context';
import { withFirebase } from '../../Firebase';

const UserBar = props => {

    const user = useContext(AuthUserContext);

    return (
        <div className="user-bar">
            <div className="user-bar__logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 40" className="user-bar__logo-svg">
                    <path className="user-bar__logo-svg-emblem" d="M21.2 38.6C10.9 38.6 2.6 30.3 2.6 20S10.9 1.4 21.2 1.4c2.5 0 5 0.5 7.3 1.5C29 3.1 29.2 3.6 29 4.1s-0.8 0.7-1.2 0.5c-2.1-0.9-4.3-1.3-6.5-1.3C12 3.3 4.6 10.8 4.6 20S12 36.7 21.3 36.7 38 29.2 38 20c0-0.9-0.1-1.8-0.2-2.7 -0.1-0.5 0.3-1 0.8-1.1 0.5-0.1 1 0.3 1.1 0.8 0.1 1 0.2 2.1 0.2 3.1C39.9 30.3 31.5 38.6 21.2 38.6L21.2 38.6z"/>
                    <path className="user-bar__logo-svg-emblem" d="M20.9 24.5c-0.2 0-0.5-0.1-0.7-0.3l-5.6-5.6c-0.4-0.4-0.4-1 0-1.3s1-0.4 1.3 0l4.9 4.9L40.1 3.1c0.4-0.4 1-0.4 1.3 0s0.4 1 0 1.3L21.6 24.2C21.4 24.4 21.2 24.5 20.9 24.5L20.9 24.5z"/>
                    <path className="user-bar__logo-svg-txt" d="M58 10h-6.5V8.5h14.6V10h-6.5v21.1h-1.6L58 10 58 10z"/>
                    <path className="user-bar__logo-svg-txt" d="M74.9 13.9c4.9 0 8.6 3.8 8.6 8.8 0 5-3.7 8.8-8.6 8.8 -4.9 0-8.6-3.7-8.6-8.8C66.2 17.6 69.9 13.9 74.9 13.9zM74.9 30c4.1 0 7-3.1 7-7.3 0-4.1-2.8-7.3-7-7.3 -4.1 0-6.9 3.2-6.9 7.3C67.9 26.9 70.8 30 74.9 30L74.9 30z"/>
                    <path className="user-bar__logo-svg-txt" d="M87.4 8.5h4c7.9 0 12.2 4.2 12.2 11.3 0 7.6-4.6 11.3-12.2 11.3h-4C87.4 31.1 87.4 8.5 87.4 8.5zM92.1 29.6c6 0 9.8-3.4 9.8-9.8 0-6.1-3.8-9.8-9.8-9.8h-3v19.6H92.1z"/>
                    <path className="user-bar__logo-svg-txt" d="M114.8 13.9c4.9 0 8.6 3.8 8.6 8.8 0 5-3.7 8.8-8.6 8.8s-8.6-3.7-8.6-8.8C106.2 17.6 109.9 13.9 114.8 13.9zM114.8 30c4.1 0 7-3.1 7-7.3 0-4.1-2.8-7.3-7-7.3 -4.1 0-6.9 3.2-6.9 7.3C107.9 26.9 110.7 30 114.8 30L114.8 30z"/>
                </svg>
            </div>
            <div className="user-bar__actions">
                <span className="user-bar__action-user"><i className="user-bar__icon-user"></i> {user.email}</span>
                <span className="user-bar__action-signout"><i className="user-bar__icon-signout"></i> <button className="user-bar__signout" onClick={() => props.firebase.signOut()}>Sign out</button></span>
            </div>
        </div>
    );
}

export default withFirebase(UserBar);