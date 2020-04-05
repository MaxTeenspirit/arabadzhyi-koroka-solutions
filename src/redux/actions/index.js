export function makeRegistration(username, email, phone){
  return {
    type: 'REGISTRATE',
    payload: {
      username,
      email,
      phone
    }
  };
}

export function makeSignIn(username, password){
  return {
    type: 'SIGNIN',
    payload: {
      username,
      password
    }
  };
}
