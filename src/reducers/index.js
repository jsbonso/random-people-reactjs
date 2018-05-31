"use strict"
import {combineReducers} from 'redux';

// HERE IMPORT REDUCERS TO BE COMBINED
import {peopleReducers} from './peopleReducers';


//HERE COMBINE THE REDUCERS
export default combineReducers({
    people: peopleReducers,
})
