export   SIGNUP_USER = `
mutation {
    userRegister ($displayName : String , $email : String , $username : String , $password : String , $confirmPassword : String){
        userRegister(
      displayName: $displayName
      email: $email
      username: $username
      password: $password
      confirmPassword: $confirmPassword
    ) {
      success
      msg
    }
  }
  
`