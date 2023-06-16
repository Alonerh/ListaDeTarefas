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
    onChange: (id:number, done:boolean)=>void,
    onClick: (id:number)=>void
}

const ListItem = ({item, onChange, onClick}:Item) =>{
    // Mark the task
    return (
        <Container>
            <LeftSide>
                <Select
                    className='select'
                    type='checkbox'
                    checked={item.done ? true : false}
                    onChange={e => onChange(item.id, e.target.checked)}
                />
                <Text done={item.done ? 'true' : 'false'} className='text'>
                    {item.name}                                                                                                                                                                         
                </Text>
            </LeftSide>
            <RightSide>
                <Delete onClick={()=>onClick(item.id)}>X</Delete>
            </RightSide>
        </Container>
    )
};

export default ListItem;