import { useState } from "react";

function Algo(params) {

    const [battery , setBattery] = useState(100);
    const [stop , setStop] = useState(false);
    const [state1 , setState1] = useState("ON");
    const [state2 , setState2] = useState("ON");
    const [state3 , setState3] = useState("ON");
    const [state4 , setState4] = useState("ON");
    //Energy Algorithm Function
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    //priority function
    async function runPriority(priority_1, priority_2, priority_3, priority_4){
    
    //   let P = 100 // ini_pow_of_battery ;


    console.log(priority_1, priority_2, priority_3, priority_4)

       let P_cur = 100; // current_pow_of_battery;
        let P = 100;
       let W=4; // pow_consumed_active_4 (per sec)
       let X=3; // pow_consumed_active_3
        let Y=2; // pow_consumed_active_2
        let Z=1; // pow_consumed_active_1
        let cur=4;



        for(let time=0;P_cur>0;time++){
            
            if(cur==4){
                P_cur=P_cur-W;
                if(P_cur<=3*P/4){
                    //switch_off(priority_4);
                    await fetch(
                        `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v${priority_4}=1`
                      )
                    //   .then((res)=> res.json())
                    //   .then((json)=>console.log(json));
                    setState4("OFF");
                    cur=3;
                }
                //console.log(4);
            }
            else if(cur==3){
                P_cur=P_cur-X;
                if(P_cur<=P/2){
                    //switch_off(priority_3);
                    await fetch(
                        `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v${priority_3}=1`
                      )
                    //   .then((res)=> res.json())
                    //   .then((json)=>console.log(json));
                    setState3("OFF");
                    cur=2;
                }
                //console.log(3);
            }
            else if(cur==2){
                P_cur=P_cur-Y;
                if(P_cur<=P/4){
                    //switch_off(priority_2);
                   await fetch(
                        `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v${priority_2}=1`
                      )
                    //   .then((res)=> res.json())
                    //   .then((json)=>console.log(json));
                    setState2("OFF");
                    cur=1;
                }
                //console.log(2);
            }
            else if(cur==1){
                P_cur=P_cur-Z;
                if(P_cur<=0){
                    //switch_off(priority_1);
                   await fetch(
                        `https://blynk.cloud/external/api/update?token=${import.meta.env.VITE_BLYNK_TOKEN}&v${priority_1}=1`
                      )
                    //   .then((res)=> res.json())
                    //   .then((json)=>console.log(json));
                    setState1("OFF");
                    cur=0;
            }
            console.log(1);
            }
        
            if(cur==0 || stop==true) break;
            // console.log(battery);
            setBattery(P_cur);
            await sleep(1000); 
        }
    }

    function handleChange(event){
        event.preventDefault();
        // console.log(battery);
        // console.log(priority_1, priority_2, priority_3, priority_4)
        console.log(params.priority_1 , params.priority_2 , params.priority_3 , params.priority_4);
        runPriority(params.priority_1 , params.priority_2 , params.priority_3 , params.priority_4);
    }

    function handleStop(event){
        event.preventDefault();
        setStop(true);
    }

    return (<>
        <form onSubmit={handleChange}>
        <h1>Battery Percentage : {battery}%</h1>
        <h3>Priority 1 : {state1}</h3>
        <h3>Priority 2 : {state2}</h3>
        <h3>Priority 3 : {state3}</h3>
        <h3>Priority 4 : {state4}</h3>
        <button type="submit">Start</button>
        </form>
        <button type="button" onClick={handleStop}>Stop</button>
</>
)
}

export default Algo;