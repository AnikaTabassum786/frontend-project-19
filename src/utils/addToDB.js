const getStorePhone=()=>{
    const storePhoneSTR = localStorage.getItem('favourite');

    if(storePhoneSTR){
        const storePhoneData= JSON.parse(storePhoneSTR)
        return storePhoneData
    }
    else{
        return []
    }
}

const addToStoreDB = (id) => {
   const storePhoneData = getStorePhone();
   if(storePhoneData.includes(id)){
    alert('Already exit')
   }

   else{
    storePhoneData.push(id)
    const data = JSON.stringify(storePhoneData)
    localStorage.setItem('favourite',data)
   }
}

export{getStorePhone,addToStoreDB}