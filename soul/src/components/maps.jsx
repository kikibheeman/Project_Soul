import axios from "axios";

const URL ='http://localhost:8080/all';

//tosignup
const SignUp = (uname, pwd, email) => axios.post(URL+'/postD', {uname, pwd, email});
//tologin
const SignIn=(uname,pwd)=>axios.post(URL+'/pomL',{uname,pwd})
//toget
const Memx= () => axios.get(`${URL}/gm`);
//togetbyId
const MemView = (id) => axios.get(`${URL}/getm/${id}`);
//todeletebyId
const MemDel = (id) =>axios.delete(`${URL}/delete/${id}`);
//toupdatebyid
const MemUpdate=(updatedMem) => axios.put(`${URL}/pum`,updatedMem);
//topost
const MAdd =(addmember) => axios.post(`${URL}/pom`,addmember);




export{Memx,MAdd,MemUpdate,MemView,MemDel,SignUp,SignIn}