import { ResponseErrors,ResponseMessage, FormData } from "../interfaces/errors";

async function getAllUsers() {
    const response = await fetch('/api/users');
    return await response.json();
}

const createUser = async (data: FormData, errorResponse:ResponseErrors[], messageResponse: ResponseMessage) =>
  {
  const requestOptions = {
    method: "post",
    headers: { "Content-Type": "application/json",
  },
    body: JSON.stringify(data),
  };

  try {
    // we use api because of the proxy in vite.config.ts to prevent exposing the port of the backend
    const response = await fetch(`api/signup`, requestOptions);

    if (!response.ok) {
      const error = await response.json() as ResponseErrors;
      errorResponse.push(error);
      return;
    }

    if (response.ok) {
      // get the json data from the response
      const message = await response.json() as ResponseMessage;
      // assign the message to the messageResponse object
      messageResponse.message = message.message;
      return messageResponse;
    }
  } catch (error) {
    // if there is an error, return the error
    return error;
  }
}

const loginUser = async (data: any, errorResponse:ResponseErrors[]) => {
    const requestOptions = await fetch(`/api/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })

      try{
        const response = await requestOptions.json();
        
        if(!response.ok){
          const error = await response.json() as ResponseErrors;
          errorResponse.push(error);
          console.log(errorResponse);
          return;
        }

        if(response.ok){
          const message = await response.json() as ResponseMessage;
          return message;
        }
      }catch(error){
        return error;
      }
}

// password reset
const resetPassword = async (data: any, errorResponse:ResponseErrors[]) => {
  const requestOptions = await fetch(`/api/password-reset`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })

    try{
      const response = await requestOptions.json();
      
      if(!response.ok){
        const error = await response.json() as ResponseErrors;
        errorResponse.push(error);
        console.log(errorResponse);
        return;
      }

      if(response.ok){
        const message = await response.json() as ResponseMessage;
        return message;
      }
    }catch(error){
      return error;
    }
}

// export the functions
export { getAllUsers, createUser, resetPassword, loginUser };