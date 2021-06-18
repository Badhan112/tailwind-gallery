import React, { useEffect, useState } from 'react';
import ImageCard from '../ImageCard';

const Home = () => {
    const [images, setImages] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => setImages(data.hits) );
    }, [term])

    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-3 gap-4">
                {
                    images.map(img => <ImageCard key={img.id} image={img} /> )
                }
            </div>
        </div>
    );
};

export default Home;