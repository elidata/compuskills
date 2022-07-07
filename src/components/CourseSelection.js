import React from 'react' ;
import { useParams } from 'react-router-dom';

const Selection = (props) =>{
    const params = useParams() ;

    return <h1>Filter is {params.filter}</h1>
}
 
export default Selection;