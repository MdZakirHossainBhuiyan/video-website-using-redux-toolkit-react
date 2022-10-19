import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemove, tagSelected } from '../../features/filter/filterSlice';

const Tag = ({title}) => {
    const dispatch = useDispatch();
    const {tags: selectedTags} = useSelector((state) => state.filter);

    const isSelected = selectedTags.includes(title) ? true : false;

    const handleSelect = () => {
        if(isSelected){
            dispatch(tagRemove(title));
        } else {
            dispatch(tagSelected(title));
        }
    }

    const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"

    return (
        <div className={style} onClick={handleSelect}>
            {title}
        </div>
    );
};

export default Tag;