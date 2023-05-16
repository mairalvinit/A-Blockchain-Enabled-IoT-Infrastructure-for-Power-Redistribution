import { useState } from "react";
import { getContractAddress, getContractABI } from "./contract";
import Web3 from "web3";
import Algo from "./components/algo";

function App() {
  const [order , setOrder] = useState(0);

  const [name1, setName1] = useState(1);
  const [name2, setName2] = useState(2);
  const [name3, setName3] = useState(3);
  const [name4, setName4] = useState(4);

  
  const [P1, setP1] = useState(0);
  const [P2, setP2] = useState(1);
  const [P3, setP3] = useState(2);
  const [P4, setP4] = useState(3);

  const [swh , setSwh] = useState(1);

  const [stat, setStat] = useState("Unchanged");

  const handleNameChange1 = (event) => {
    setName1(event.target.value);
  };
  const handleNameChange2 = (event) => {
    setName2(event.target.value);
  };
  const handleNameChange3 = (event) => {
    setName3(event.target.value);
  };
  const handleNameChange4 = (event) => {
    setName4(event.target.value);
  };

  const handleSwitchChange = (event) => {
    setSwh(event.target.value);
  }

  function encode(a, b, c, d) {
    let num = 0;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);
    num = a*1000 + b*100 + c*10 + d;
    console.log("encode function me: ",num);
    return num;
  }

  const getTransaction = async () => {
    

    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const contractAddress = getContractAddress();
        const contractABI = getContractABI();
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        //const accounts = await window.ethereum.eth_requestAccounts();
        const account = accounts[0];
        const result2 = await contract.methods
          .get()
          .call({ from: account });
        console.log(result2);
        return result2;
        
      } catch (error) {
        console.error(error);
        alert(`Failed to set name to ${name}!`);
        return error;
      }
    }
  }

  const  setTransaction = async (event) => {
    console.log(event);
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const contractAddress = getContractAddress();
        const contractABI = getContractABI();
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        //const accounts = await window.ethereum.eth_requestAccounts();
        const account = accounts[0];
        const gas = await contract.methods.set(event).estimateGas();
        const result = await contract.methods
          .set(event)
          .send({ from: account, gas });
        // console.log(result);
        setStat("Successful!!!");
        
        return result;
 
       
          

      } catch (error) {
        console.error(error);
        alert(`Failed to set name to ${name}!`);
        return error;
      }
    }
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handle Submit me: ",name1, name2 , name3 , name4)
    const PL = encode(name1, name2 , name3 , name4);
    console.log("encode krke priority list :",PL);
    setStat("Pending...")
    setTransaction(PL);
  };

async function handleSubmit2(event){
      event.preventDefault();
      const inputswitch = swh-1;
    const result =  await setTransaction(inputswitch);
      console.log(result);   
    if (result.blockHash != null) {
          fetch(
            `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v${inputswitch}=0`
          ).then((res) => console.log(res.json));
            setStat("Successful!!!")
        }
      
  }

  async function handleGetRequest(event){
      event.preventDefault();
      const result = await getTransaction();
      console.log(result);
      setOrder(result);
      if(result >= 1000){
      let num = parseInt(result);
      setP1(parseInt(num%10 -1));
      num/=10;
      setP2(parseInt(num%10 -1));
      num/=10;
      setP3(parseInt(num%10 -1));
      num/=10;
      setP4(parseInt(num%10 -1));
      }else if(result>=0 && result<=4)alert(`Transaction is Set to ${order}`)
      else alert("Error!!! Invalid ID")
  }

  const handleON = async () => {

    await fetch(
      `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v3=0`
    ).then((res) => console.log(res.status));
    await fetch(
      `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v2=0`
    ).then((res) => console.log(res.status));
    await fetch(
      `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v1=0`
    ).then((res) => console.log(res.status));
    await fetch(
      `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v0=0`
    ).then((res) => console.log(res.status));
    }
  

  const handleOFF = async() => {
   
   await fetch(
      `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v0=1`)
      .then((res)=>console.log(res.status));
      
    await fetch(
      `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v1=1`)
      .then((res)=>console.log(res.status));
      
    await fetch(
      `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v2=1`)
      .then((res)=>console.log(res.status));
      
   await fetch(
      `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v3=1`)
      .then((res)=>console.log(res.status));

  }



  return (
    <div style={{textAlign:'center'}}>
      <h1>Power Distribution System using blockchain</h1>
      <button onClick={handleON}> ON</button>
      <button onClick={handleOFF}> OFF</button>
      <h4> Status : {stat} </h4>
      
      <form onSubmit={handleSubmit}> 
    <h3>Use Numbers to Define Priority</h3> 
          <div>
          Society Lift:
          <input type="number" value={name1}  min={1} max={4} onChange={handleNameChange1} />
          Water Pump :
          <input type="number" value={name2} min={1} max={4} onChange={handleNameChange2} />
          Parking Lights:
          <input type="number" value={name3} min={1} max={4} onChange={handleNameChange3} />
          Street Lights:
          <input type="number" value={name4} min={1} max={4} onChange={handleNameChange4} />
          </div>
        <button type="submit">Submit</button>
        </form>

      <form onSubmit={handleSubmit2}>
        <p>Enter your Switch Number : </p><input type="number" min={1} max={4} value={swh} onChange={handleSwitchChange} />
        <button type="submit">Submit</button>
      </form>        

       <Algo priority_1={P1} priority_2={P2} priority_3={P3} priority_4={P4}/>
      
      <form onSubmit={handleGetRequest}>
        <h3>Priority Order : {order}</h3>
        <h3>Appliances  --  Priority Order</h3>
        <h4>Society Lift : {P1}</h4>
        <h4>Water Pump : {P2}</h4>
        <h4>Parking Lights : {P3}</h4>
        <h4>Street Light : {P4}</h4>
        <button type="submit">Submit</button>
      </form>


    </div>
  );
}

export default App;
