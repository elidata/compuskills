import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = (props)=>{
    const params = useParams() ;

    return (<h1>Course Detail for course id {params.course_id} </h1>)
}
 
export default CourseDetail;