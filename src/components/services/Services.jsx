import { useEffect } from 'react';
import { useState } from 'react';
import AdminData from '../../store/AdminData';
import {observer} from "mobx-react";
import Store from '../../store/Store';

const Services=(observer(()=> {
  const [service,setService]=useState([]);
  useEffect(()=>{
    handleService()
    getServices()
  },[])
  const handleService =()=>{
    sendServices(AdminData.serviceList);
    setService(AdminData.serviceList);
  }
    return (
      <>
         <h1>Services</h1>
         {
          service.map((_,id)=>
              <Services key={id} id={id}/>
          )}

      </>
    )
  }))

  export default Services
  