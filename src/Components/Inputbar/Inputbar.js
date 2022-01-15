import React from "react";
import './Inputbar.css';
import { FiAlignLeft, FiPlus } from 'react-icons/fi';

const Inputbar = () => {
    return (
        <>
            <div className="inputSection">
                <FiAlignLeft size="26"/>  
                <input placeholder="Please Add Task" />
                <button title="Add">
                    <FiPlus size="26"/>
                </button>
            </div>
           
        </> 
    );
};



export default Inputbar;