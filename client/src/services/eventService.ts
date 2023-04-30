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
    "Access-Control-Allow-Origin": "*"
  },
    body: JSON.stringify(data),
  };

  try {
    // we use api because of the proxy in vite.config.ts
    const response = await fetch(`api/signup`, requestOptions);

    if (!response.ok) {
      const error = await response.json() as ResponseErrors;
      errorResponse.push(error);
    }

    // is the response ok?
    if (response.ok) {
      // get the json data from the response
      const message = await response.json() as ResponseMessage;
      // push the message to the messageResponse array
      // assign the message to the messageResponse object
      messageResponse.message = message.message;
      return messageResponse;
    }
  } catch (error) {
    // if there is an error, return the error
    return error;
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