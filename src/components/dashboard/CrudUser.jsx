import React,{useState, useEffect} from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'
import { genericRequest } from '../../services/api.services'
const CrudUser = () => {

    const [users, setUsers] = useState([])

  useEffect(()=> {
    getUsers();
  },[])

  const getUsers = () => {
    genericRequest.get( "user/index", "").then(res => {
        if(res.status === 200){
            setUsers(res.users);
        }else{

        }
    })
  }

  const createUser = ( user ) => {
    genericRequest.post( "user/create", "", user).then(res => {
        if(res.status === 201){
            setUsers(res.users);
            getUsers();
        }else{

        }
    })
  }

  return (
    <div className='crud-container'>
        <UserForm createUser={createUser}/>
        <UserTable users={users}/>
    </div>
  )
}

export default CrudUser