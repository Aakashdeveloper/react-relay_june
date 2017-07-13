import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/aboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="about" component={AboutPage}/>
		<Route path="course" component={CoursesPage}/>
	</Route>
);