const handleSuccess = (resolvedValue)=>{
         console.log(resolvedValue);
}


const handleFailure  = (rejectReason)=>{
        console.log(rejectReason);
}

  checkOut(order).then(resolvedValue) 

    .catch(rejectReason)