import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../features/filter/filterSlice';
import { fetchTags } from '../../features/tags/tagsSlice';
import Tag from './Tag';

const Tags = () => {
    const dispatch = useDispatch();
    const {tags} = useSelector((state) => state.tags);

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch])

    const handleReset = () => {
        dispatch(reset());
    }

    return tags?.length > 0 ? 
        <section className='max-w-7xl mx-auto border-b flex'>
            <div className="px-5 py-6 lg:px-0 flex gap-2 overflow-y-auto">
                {
                    tags.map((tag, index) => <Tag key={index} title={tag.title} />)
                }
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal ml-20 mr-5 my-6 py-2 px-4 rounded-full" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </section> : null    
};

export default Tags;