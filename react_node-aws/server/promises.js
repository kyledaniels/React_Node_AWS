const handleSuccess = (resolvedValue)=>{
         console.log(resolvedValue);
}


const hanleFailure  = (rejectReason)=>{
        console.log(rejectReason);
}

  checkOut(order).then(resolvedValue) 

    .catch(rejectReason)