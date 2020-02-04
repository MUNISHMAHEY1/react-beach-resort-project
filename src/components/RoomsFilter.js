import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'
// import {Checkbox} from 'pretty-checkbox-react'
 
//get all unique values
const getUnique = (items,value) =>{
    // Set() only excepts unique values
    return [...new Set(items.map(item => item[value]))]
}
function RoomsFilter({rooms}) {

    const context = useContext(RoomContext);
    // console.log(context);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    // get unique types
    let types = getUnique(rooms,"type");

    //add all
    types = ["all", ...types];

    // map to jsx
    types = types.map((item,index) =>{
        return (
            <option value={item} key={index}>
             {item}
            </option>
        )
    })

    let people = getUnique(rooms,'capacity');
    
    people = people.map((item,index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        )
    })


    return (

        
        <section className="filter-container">
            <Title title="search rooms"></Title>
            
            <form className="filter-form">
                {/*Select type */}
                <div className="form-group">
                    <label htmlFor="type"> room type</label>
                    <select 
                    name="type" 
                    id="type" 
                    value={type} 
                    className="form-control" 
                    onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select 
                    name="capacity" 
                    id="capacity" 
                    value={capacity} 
                    className="form-control" 
                    onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end guest */}

                {/* Room price*/}
                <div className="form-group">
                    <lable htmlFor="price"> Room price ${price}</lable>
                    <input type="range" name="price" min={minPrice} 
                    max={maxPrice} id="price" value={price} 
                    onChange={handleChange} className="form-control">
                    </input>
                </div>
                {/* end Room price*/}

                {/* Size*/}
                <div className="form-group">
                    <label htmlFor="size"> Room Size</label>
                    <div className="'size-inputs">
                        <input type="number" name="minSize" id="size" 
                        value={minSize} onChange={handleChange}
                        className="size-input"></input>
                        
                        <input type="number" name="maxSize" id="size" 
                        value={maxSize} onChange={handleChange}
                        className="size-input"></input>
                    </div>
                </div>
                {/* End of Size*/}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" 
                        id="breakfast" checked={breakfast} 
                        onChange={handleChange}></input>
                        <lable htmlFor="breakfast"> Breakfast</lable>
                    </div>

                    <div className="single-extra">
                        <input type="checkbox" name="pets" 
                        id="pets" checked={pets} 
                        onChange={handleChange}></input>
                        <lable htmlFor="pets"> Pets</lable>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}

export default RoomsFilter
