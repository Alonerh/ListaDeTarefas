import { useState, KeyboardEvent } from 'react';
import * as C from './styled';


type Props = {
    onEnter: (taskName:string)=>void;
}
const AddArea = ({onEnter}:Props)=>{

    const [text, setText]=useState('');

    const handleKeyUp = (e:KeyboardEvent)=>{
        if((e.code === 'Enter' || e.code === 'NumpadEnter') && text !== '') {
            onEnter(text)
            setText('')
        }
    }
    const handleKeyUpDirect = ()=>{
        if (text !=='') {
            onEnter(text)
            setText('')
        }
    }

    return (
        <C.AddContainer>
            <C.AddButton onClick={handleKeyUpDirect}>+</C.AddButton>
            <C.Add 
                type='text' 
                placeholder='Adicione uma tarefa' 
                value={text} 
                onChange={e=>setText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.AddContainer>
    )
};

export default AddArea;