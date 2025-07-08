// src/api/api.js
export const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  };
  
  export const fetchComments = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    console.log(response)
    if (!response.ok) throw new Error('Failed to fetch comments');
    
    return response.json();
  };
  