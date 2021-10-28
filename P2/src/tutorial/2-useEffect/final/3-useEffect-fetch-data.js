import React, { useEffect, useState} from 'react';

const url = 'https://reqres.in/api/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  
  const [loading,setLoading] = useState(false);
  const [count,setCount]=useState(0);


  const getUsers = async () => {
   
    const response = await fetch (url);
    const users= await response.json();

    setUsers(users.data);

 
    setLoading(false);
    //console.log(users);
    

  };

  const clickHandle=()=>{ 

    if (count>=1)
    {
      return

    }

    setLoading(true)
   setCount(count+1)
   setTimeout(()=>{
    getUsers()
   },2000)
   

  }

  

  return (
    <>
     
      <h3>github users</h3>
      <button onClick={clickHandle}>USERS</button>
      <ul className='users'>
        
        { loading? <div className="box"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> 
        :
       
        users?.map((user) => {
          const { id,email,first_name,last_name,avatar} = user;
          return (
            <li key={id}>
              <img src={avatar} />
              <div>{first_name}</div>
              <div>{last_name}</div>
              

              <div>
               
               
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;