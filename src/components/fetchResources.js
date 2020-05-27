import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchResources = (resource) => {
    const [ resources, updateResources ] = useState([]);

    const getResurces = async (resource) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/' + resource);
        
        updateResources(response.data); 
    }
    
    useEffect(() => {
        getResurces(resource)
    }, [resource]);
 
    return resources;
}


export default FetchResources;