# Yet another ToDo app is here!

## Demo version

URL: https://to-do-app-bd889.firebaseapp.com/

Login: `demo@demo.pl`

Password: `demo123`

## Project background

I started learning ReactJS in 2019. Obviously, you can't learn a lot without practicing. You can find dozens of tutorials on how to create this kind of app, but I wanted to go one step further and use Firebase (to store state and manage users). Even it's far from perfect, I learned a lot when creating this.

## Main features

Besides classic to-do functionality, this app has some more complex features I list below. 

### User authentication

The app provides some simple user authentication system that uses Firebase Auth API. You can create your own account with an e-mail address and some password or sign in if you already have one. Thanks to Google's API, simple data validation is also supported. 

### Responsive look

I wanted this app to be as responsive as possible. Thanks to media queries, you can use it on your desktop or on your phone. 

### Firebase Realtime Database support

Like I wrote before, this was the main goal of the whole project. Creating to-do list that can't store the data seemed to be boring for me. In case of this service, all users can store their data in well-secured, non-relational database.  

### Tags autodetection

Users can mark their tasks as `important` or set deadlines for them. There is no need to use date pickers or check any checkboxes. Everything is audotetected by the taskbar. If you wish to undo, you just need to click a tag that appears under the main text field. At the moment, only English date notation is supported: `DD/MM/YYYY`.

![How to add tags](https://i.imgsafe.org/d7/d79c7e6bff.gif)

## Cloning the repo & local tests

You can of course clone this repo and use it to learn React, but you'll have to setup your own Firebase account.

After you do this, you also need to create .env file in the root directory. 

```
REACT_APP_TMDB_API_KEY="Your TMDB Key" 
REACT_APP_FIREBASE_API_KEY="Your Firebase API KEY"
REACT_APP_FIREBASE_AUTH_DOMAIN="Your Firebase AUTH domain"
REACT_APP_FIREBASE_DATABASE_URL="Your Firebase Database URL"
REACT_APP_FIREBASE_STORAGEBUCKET="Your Firebase storage bucket"
REACT_APP_FIREBASE_PROJECT_ID="Your Firebase project ID"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="Your Firebase messaging sender ID"
```

