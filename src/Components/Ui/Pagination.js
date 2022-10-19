import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../features/pagination/paginationSlice';

const Pagination = () => {
    const [selectedPage, setSelectedPage] = useState(1);
    const dispatch = useDispatch();

    const handlePagination = (pageNumber) => {
        setSelectedPage(pageNumber);
        dispatch(setPage(pageNumber));
    }

    const selectedStyle = "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";
    const defaultStyle = "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                <div onClick={() => handlePagination(1)} className={(selectedPage === 1)?selectedStyle:defaultStyle}>
                    1
                </div>
                <div onClick={() => handlePagination(2)} className={(selectedPage === 2)?selectedStyle:defaultStyle}>
                    2
                </div>
                <div onClick={() => handlePagination(3)} className={(selectedPage === 3)?selectedStyle:defaultStyle}>
                    3
                </div>
                <div onClick={() => handlePagination(4)} className={(selectedPage === 4)?selectedStyle:defaultStyle}>
                    4
                </div>
            </div>
        </section>
    );
};

export default Pagination;