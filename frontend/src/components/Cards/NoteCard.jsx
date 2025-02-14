import moment from 'moment';
import React from 'react';
import {MdOutlinePushPin} from "react-icons/md";
import { MdCreate, MdDelete } from 'react-icons/md';

const NoteCard = ({
    empName,
    date,
    designation,
    isPinned,
    onEdit,
    onDelete,
    onPinNote
}) => {
  return (
    <div className='border border-slate-300 rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out'>
        <div className='flex items-center justify-between'>
            <div>
            <h6 className='text-sm font-medium'>{empName}</h6>
            <span className='text-xs text-slate-500'>{moment(date).format("Do MMM YYYY")}</span>
            </div>
            
            <MdOutlinePushPin className={` icon-btn ${isPinned ? 'text-primary' : 'text-slate-300'}`} onClick={onPinNote} />
        </div>
        <p className='text-xs text-slate-600 mt-2'>{designation?.slice(0,60)}</p>

        <div className='flex items-center justify-between mt-2'>

                <div className='flex items-center gap-2'>
                    <MdCreate
                    className='icon-btn hover:text-green-600'
                    onClick={onEdit}
                    />
                    <MdDelete
                    className='icon-btn hover:text-red-500'
                    onClick={onDelete}
                    />
                </div>
         
        </div>
    </div>
  )
}

export default NoteCard