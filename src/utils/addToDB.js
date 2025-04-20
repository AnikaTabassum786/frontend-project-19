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

// const removePhone =(id)=>{
//     const storePhoneData = getStorePhone();
//     const remainingFavorites = storePhoneData.filter(phone => phone.id !== id)
//     localStorage.setItem('favourite', JSON.stringify(remainingFavorites))
   
// }

const removePhone = (id) => {
    const storePhoneData = getStorePhone();
    const remainingFavorites = storePhoneData.filter(phone => parseInt(phone) !== parseInt(id));
    localStorage.setItem('favourite', JSON.stringify(remainingFavorites));
};

export{getStorePhone,addToStoreDB,removePhone}