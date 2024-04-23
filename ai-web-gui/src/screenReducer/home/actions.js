export const actions ={
    SAVE_USER_DETAILS:"SAVE_USER_DETAILS",
    SAVE_CHAT:"SAVE_CHAT"
}

export const onStore = data =>{
    return {
        type:actions.SAVE_USER_DETAILS,
        data
    }
}

export const saveHomeDetails =()=>async dispatch=>{
    dispatch(onStore(true))
}

export const getChatbotData = async (text) => {
   
        return new Promise(async(resolve,reject)=>{
            try{
                const requestOptions = {
                    method: 'POST',
                    // mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    // headers: {
                    //     'Accept': 'application/json, text/plain',
                    //     'Content-Type': 'application/json;charset=UTF-8',
                    //     "Access-Control-Allow-Origin": "*",
                    //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                    // },
                    body: JSON.stringify({  "text":text.text })
                }

                // requestOptions.header("Access-Control-Allow-Origin", "*");
                // requestOptions.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


                let response = await fetch('http://localhost:5000/chatbot',requestOptions)
                if (response) {
                    response  = response.json()
                }
                resolve(response)
            }catch(error){
                console.log("Eroor inside action file",error);
                }
        })
       

    // fetch('http://localhost:5000/chatbot',requestOptions)
    //   .then(response => response.json())
    //   .then(json => setData(json))
    //   .catch(error => console.error(error));

  
}

export const onStoreChatbot = data =>{
    return {
        type:actions.SAVE_CHAT,
        data
    }
}