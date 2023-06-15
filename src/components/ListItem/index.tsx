import { useState } from 'react';
import {
    Container,
    LeftSide,
    RightSide,
    Select,
    Text,
    Delete
} from './styled';

import { ItemType } from '../../types/Item';

type Item = {
    item: ItemType,
    list: ItemType[],
    onChange: (id:number, done:boolean)=>void,
    onClick: (id:number)=>void
}

const ListItem = ({item, list, onChange, onClick}:Item) =>{
    // Mark the task
    const listLength = list[list.length];
    const [done, setDone]=useState(item.done);

    const handleCheck = ()=>{
        if(done === false) {
            setDone(true)
        } else {
            setDone(false)
        }
    };

    return (
        <Container>
            <LeftSide>
                <Select
                    className='select'
                    type='checkbox'
                    onChange={e => onChange(item.id, e.target.checked)}
                    onClick={handleCheck}
                    />
                <Text done={done ? 'true' : 'false'}>
                    {item.name} = {item.id} = {item.done.toString()}
                </Text>
            </LeftSide>
            <RightSide>
                <Delete onClick={()=>onClick(item.id)}>X</Delete>
            </RightSide>
        </Container>
    )
};

export default ListItem;