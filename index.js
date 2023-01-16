function printData(something, id){
    document.getElementById(id).innerHTML = something;
}

async function indiaCount(){
    const result=  await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    const data= await result.json();
    
    let indiaConfirmed="";
    let indiaRecovered="";
    let indiaDeath="";
    totalConfirmedCases=data['data']['summary']['total'];
    totalDeathCount=data['data']['summary']['deaths'];
    totalDischarged=data['data']['summary']['discharged'];
    

    indiaConfirmed= "Confirmed cases:<br>"+totalConfirmedCases;
    indiaRecovered="Recovered:<br>"+totalDischarged;
    indiaDeath="Deaths:<br>"+totalDeathCount;
    printData(indiaConfirmed,"indiaDataConfirmed");
    printData(indiaRecovered,"indiaDataRecovered");
    printData(indiaDeath,"indiaDataDeath");
    // console.log(total);
}

indiaCount();

//covidAPI gets the data of each state/UT 
async function covidAPI(){
    const result=  await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    const data= await result.json();
    let stateName="";
    let stateConfirmed="";
    let statedRecovered="";
    let stateDeath="";
    console.log("initiated...");
    for(let i=0;i<36;i++){
        if(data['data']['regional'][i]['loc']==state)
        {
            deathCount= data['data']['regional'][i]['deaths'];
            confirmedCases= data['data']['regional'][i]['totalConfirmed'];
            discharged = data['data']['regional'][i]['discharged'];

            stateName=state;
            stateConfirmed='<p id="stateConfirmedJS"stateData">Confirmed cases:<br>'+confirmedCases+'</p>';
            statedRecovered='<p id="stateRecoveredJS" >Recovered:<br>'+ discharged+'</p>';
            stateDeath='<p id="stateDeathJS">Deaths:<br>'+ deathCount+'</p>';
            break;
        }            
    }
    printData(stateName,"stateName");
    printData(stateConfirmed,"stateConfirmed");
    printData(statedRecovered,"stateRecovered");
    printData(stateDeath,"stateDeath");
    

    
}


