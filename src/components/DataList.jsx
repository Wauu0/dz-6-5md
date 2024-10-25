import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchData, filterData} from "../reducer/dataSlice.js";

const DataList = () => {
    const dispatch  = useDispatch()
    const filterItems = useSelector((state) => state.data.filterItems)
    const [filterText, setFilterText] = useState('')

    useEffect(() => {
        dispatch(fetchData())
    }, []);

    const handleFilterChange = (e) => {
        setFilterText(e.target.value)
        dispatch(filterData(e.target.value))
    }

    return (
        <div>
            <input type="text" placeholder='Филтер имя' onChange={handleFilterChange} value={filterText}/>
            <ul>
                {
                    filterItems.map((item, index) => (
                        <li key={index}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default DataList;