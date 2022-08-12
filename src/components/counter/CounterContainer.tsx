import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { increase, decrease, increaseBy } from '../../modules/counter';
import Counter from './Counter';

const CounterContainer = () => {
    const count = useSelector((state:RootState)=>state.counter.count);
    const dispatch = useDispatch();

    const onDecrease = () =>{
        dispatch(decrease());
    }
    const onIncrease = () => {
        dispatch(increase());
    }
    const onIncreaseBy = (diff:number) =>{
        dispatch(increaseBy(diff));
    }

    return(
        <Counter
           
        />
    )
}

export default CounterContainer;