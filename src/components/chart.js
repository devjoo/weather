import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
    function average(data){
        let num = 0;
        for(var i in data){
            num += data[i];
        }
        return num/data.length;
    }

    return (
        <div>
            <Sparklines data={props.data} width={120} height={180}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    );
};


