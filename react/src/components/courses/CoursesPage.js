import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as courseActions from '../../actions/courseActions'


class CoursesPage extends React.Component{
	constructor(props, context ){
		super(props, context);

		this.state ={
			course:{title:""}
		};
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}
	onTitleChange(event){
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course:course});
	}
	onClickSave(){
		this.props.dispatch(courseActions.createCourse(this.state.course))
	}
	courseRow(course, index){
		return <tr><td key={index}>{course.title}</td></tr>;
	}
	render(){
		return(
			<div className= "jumbotron">
				<h1>Courses</h1>
				<h2>Add Course</h2>
				
				<input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
				<input type="submit" onClick={this.onClickSave} />
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{this.props.courses.map(this.courseRow)}
					</tbody>
					
				</table>
				
			</div>
		);
	}
}
CoursesPage.propTypes={
	dispatch:PropTypes.func.isRequired,
	courses:PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps){
	return {
		courses: state.courses
	}
}

export default connect(mapStateToProps)(CoursesPage);