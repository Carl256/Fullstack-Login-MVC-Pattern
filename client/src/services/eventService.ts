 async function getAllUsers() {
    const response = await fetch('/api/users');
    return await response.json();
}

 async function createUser(data: any) {
    const response = await fetch("http://localhost:3000/signup", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

 async function loginUser(data: any) {
    const response = await fetch(`/api/user/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

export default {
  getAllUsers,
  createUser,
  loginUser,
};