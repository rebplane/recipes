import React from 'react';
import FilledStar from './FilledStar';
import EmptyStar from './EmptyStar';
import HalfStar from './HalfStar';

function StarDisplay({ avg }) {

    let starDisplay = (starNum) => { 
        if (avg < starNum + 0.5) { 
            return <EmptyStar/>
        }
        else if (avg < starNum + 1 && avg >= starNum + 0.5) {   
            return <HalfStar/>
        }
        else {
            return <FilledStar/>
        }
    }

    return (

        <div class>

            <div class="flex text-orange-700">
                {starDisplay(0)}
                {starDisplay(1)}
                {starDisplay(2)}
                {starDisplay(3)}
                {starDisplay(4)}
            </div>
        
    </div>
)};

export default StarDisplay;