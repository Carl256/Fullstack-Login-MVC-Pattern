 async function getAllUsers() {
    const response = await fetch('/api/users');
    return await response.json();
}

 const createUser = async (data: any, errorObj:string []=[]) =>
  {
  const requestOptions = {
    method: "post",
    headers: { "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
    body: JSON.stringify(data),
  };
  try {
   //we use api because of the proxy in vite.config.ts
    const response = await fetch(`api/signup`, requestOptions);

    if(!response.ok){
      const error = await response.json();
      errorObj.push(error);
    }

    
    // is the response ok?
    if (response.ok) {
      // convert the response to json
      const data = await response.json();
      // return the json data
      return data;
    }
    // the we dont have a succesfull response, return the status text
    // assign the respose statuTect to the error object, so we can use it later
    // const error = { message: response.statusText, error: response };
    // throw error;

    



  }
  catch (error) {
    console.log(error);
  }
}

 async function loginUser(data: any) {
    const response = await fetch(`/api/user/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

// export the functions
export { getAllUsers, createUser, loginUser };