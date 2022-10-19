import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const LikeUnlike = ({ likes, unlikes}) => {
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0">
                    <ThumbUpIcon className="w-5 block" />
                    {/* <img class="w-5 block" src={ThumbUpIcon} alt="Like" /> */}
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {likes}
                </div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0">
                    <ThumbDownAltIcon className="w-5 block" />
                    {/* <img class="w-5 block" src={ThumbDownAltIcon} alt="Unlike" /> */}
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes}
                </div>
            </div>
        </div>
    );
};

export default LikeUnlike;