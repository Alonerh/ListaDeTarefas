import { useState } from 'react';
import * as C from './styled';
import {ItemType} from '../../types/Item';
import ListItem from '../../components/ListItem';
import AddArea from '../../components/AddArea';

const Home = ()=> {

    const [list, setList]=useState<ItemType[]>([
        {name: 'Comprar pão', id:1, done:false},
        {name: 'Lavar a casa', id:2, done:false}
    ]);

    const handleAddTask = (taskName: string)=>{
        let newList = [...list];
        let listLength = null;
        if(list.length === 0) {
            listLength = 1
        }   else {
            listLength = list[list.length - 1].id + 1
        }
        newList.push({
            name: taskName,
            //id: list[list.length - 1].id + 1,
            id: listLength,
            done: false 
        });
        setList(newList);
        console.log(list.length)
    }

    const handleTaskChange = (id: number, done: boolean) => {
        let newList = [...list];
        for(let i in newList) {
          if(newList[i].id === id) {
            newList[i].done = done;
          }
        }
        setList(newList);
      }
    const handleDeleteTask = (id: number)=>{
        let newList = [...list];
        newList = newList.filter((item, index) => item.id !== id)
        setList(newList);
    }

    return (
        <C.Container>
            <C.Area>
                <C.Header>Lista de Tarefas</C.Header>
                <AddArea onEnter={handleAddTask}/>
                <C.ItemContainer>
                    {list.map((item, index)=>(
                        <ListItem 
                            key={index}
                            list={list}
                            item={item}
                            onChange={handleTaskChange}
                            onClick={handleDeleteTask}
                        />
                    ))}
                </C.ItemContainer>
            </C.Area>
        </C.Container>
    )
};

export default Home;