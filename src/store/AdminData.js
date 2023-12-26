import{ observable, makeObservable,action} from 'mobx';
import Service from '../components/service/Service';

class AdminData{
   
     business = {
        id: "123",
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://coding-academy.org/images/ca_logo.png",
        description: "The best coding academy in the world",
    };
     services =[
        {
        id: "11",
        name: "פגישת ייעוץ פרונטלית",
        description: "פגישת ייעוץ פרטנית בקליניקה",
        price: 500,
        duration: 60,
         },
         {
        id: "12",
        name: "פגישת ייעוץ פרונטלית",
        description: "פגישת ייעוץ פרטנית בקליניקה",
        price: 500,
        duration: 60,
         }
    ]
    isLogin=false;

    sendToEdit=false;
    serviceList={};
    constructor(){
        makeObservable(this,{
         //    arreyMeeting:observable,//מערך הפגישות
         //  //  addArryMeeting:action,//
            serviceList:observable,
            services:observable,//מערך השרותים
            addAarreyServices:action,
            isLogin:observable,//בדיקה אם המשתמש הוא המנהל(משתנה)
            sendToEdit:observable,
            setsendToEdit:action,
            setIsLogin:action,//בדיקה אם המשתמש הוא המנהל(פונקציה)
        })
     }
     setIsLogin=(val)=>{
        this.isLogin=val;
     }
     setsendToEdit=(val)=>{
      this.sendToEdit=val;
   }
   addAarreyServices = (service) => {
      this.services = [...this.services, { id: this.services.length, name: service.name,description: this.service.description ,price :this.service.price,duration: this.service.duration}];
  }
     
     
}
export default new AdminData;