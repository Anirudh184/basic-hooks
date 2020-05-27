import React from 'react';
import FetchResources from './fetchResources'; 

const ResourceList = ({ resource }) => {  
    
    const reqRes = FetchResources(resource);

    return(
        <ul>
            {
                reqRes.map(resource => 
                <li key = {resource.id}>
                    {resource.title}
                </li>)
            }
        </ul>
    ); 
}

export default ResourceList;