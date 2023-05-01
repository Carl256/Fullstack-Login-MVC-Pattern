// Define the interface of the object
interface FormData {
    email: string;
    password: string;
    confirmPassword?: string;
  }

interface ResponseErrors {
    message: string;
    status?: number;
  }

// create a response message interface
interface ResponseMessage {
    message: string;
}

export type { FormData, ResponseErrors, ResponseMessage };