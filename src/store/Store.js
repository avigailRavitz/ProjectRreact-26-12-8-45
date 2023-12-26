import{ observable, makeObservable,action} from 'mobx';
import AdminData from './AdminData'
class Store{

 
    sendDetails=async(id,name,address,phone,owner,logo,description)=>{
        console.log("enter save saveDetalise ")
        console.log(id,name,address,phone,owner,logo,description)
        const response = await fetch("http://localhost:8787/businessData", {
            method: "POST",
            body: JSON.stringify({
              id,name,address,phone,owner,logo,description
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(id,name,address,phone,owner,logo,description)
        }

          getDetalise=async()=>{
            console.log("enter save detalis")
           const response = await fetch("http://localhost:8787/businessData");
           const data = await response.data.json();
           this.business=JSON.parse(data);
        // console.log(this.details)
           }  


///////////////////services///////////////////////////


           sendServices=async(services)=>{
            const response = await fetch("http://localhost:8787/service", {
                method: "POST",
                body: JSON.stringify(services),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              console.log(id,name,description, price,duration,)
            }
    
              getServices=async()=>{
                const response1 = await fetch("http://localhost:8787/services", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                AdminData.serviceList = await response1.json();
                console.log("after get")
               }  

               
}
export default new Store;