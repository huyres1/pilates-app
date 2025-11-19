import React from 'react';

export default function Login(){
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input placeholder="email"/>
        <input placeholder="password" type="password"/>
        <button>Login</button>
      </form>
    </div>
  );
}
