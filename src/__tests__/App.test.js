import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import PersonItem from '../components/pages/personItem';
import PeopleList from '../components/pages/peopleList';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
const middleware =applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

const fixture = {
    "gender": "male",
    "name": {
        "title": "monsieur",
        "first": "c\u00e9lestin",
        "last": "petit"
    },
    "location": {
        "street": "4871 avenue jean-jaur\u00e8s",
        "city": "epautheyres",
        "state": "valais",
        "postcode": 9123
    },
    "email": "c\u00e9lestin.petit@example.com",
    "login": {
        "username": "crazyleopard151",
        "password": "timothy",
        "salt": "4r36bQfD",
        "md5": "e1af3045b1057b49f5a3c638dcab8f81",
        "sha1": "66f9f03bcdf1a77814e2096eabb3c582dca48c60",
        "sha256": "d75a38fbb44245cb16e7ae6e8bffc9c6d1802a018a17ceb36e855dd2df0cc17a"
    },
    "dob": "1962-09-13 00:50:58",
    "registered": "2008-05-06 08:03:29",
    "phone": "(779)-439-2075",
    "cell": "(511)-772-1693",
    "id": {
        "name": "AVS",
        "value": "756.PHCQ.HXWE.90"
    },
    "picture": {
        "large": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg",
        "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/men\/97.jpg",
        "thumbnail": "https:\/\/randomuser.me\/api\/portraits\/thumb\/men\/97.jpg"
    },
    "nat": "CH"
}

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders PeopleList successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <PeopleList />
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);

});


it('renders PersonItem successfully', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Provider store={store}>
            <PersonItem
                key={1}
                id={1}
                data={fixture}/>
        </Provider>, div);

    ReactDOM.unmountComponentAtNode(div);
});

