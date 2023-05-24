import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';


import Table from 'react-bootstrap/Table';


export default function App() {
  const [todo,setTodo] = useState([]);
  const getData = async ()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const jsonData = await data.json();
    setTodo(jsonData)
  }
  useEffect(()=>{
    getData();


  },[])
  return (
    <div className='mt-5'>
      <Container className='mt-5'>
        <h1 className='text-center mt-5'>TITLE TODO</h1>
        <Table striped bordered hover>
      <thead>
        <tr className='mt-5'>
          <th>#</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
       
        {todo.map((item, index)=>(
          <tr key={index}>
        
         
          <td><input type="checkbox" checked ={item.completed} /></td>
          <td>{item.title}</td>
          <td>{item.completed?"completed":"pending"}</td>
        </tr>
        ))}
        </tbody>
    </Table>
      </Container>
    </div>
  )
}