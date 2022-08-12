import React, { ChangeEvent, FormEvent, useState } from 'react';

const TodoInsert = () => {
    const [value,setValue] = useState('');
    const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value);
    }
    const onSubmit = (e: FormEvent) =>{
        e.preventDefault();
        //todo
        setValue('');
    }
    return(
        <form onSubmit={onSubmit}>
            <input 
                placeholder='write to do'
                value={value}
                onChange={onChange}
            />
            <button type='submit'>ADD</button>
        </form>
    )
}

export default TodoInsert;