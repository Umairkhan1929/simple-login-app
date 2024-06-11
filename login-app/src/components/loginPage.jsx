function LoginPage({setIsUserLoggedIn}){
  
    function handleLogIn(){
      setIsUserLoggedIn(true)
    }
  
    return <>
      <h1>Login Form</h1>
      <button style={{backgroundColor:'blue',color:'white'}} onClick={handleLogIn}>LogIn</button>
    </>
  }

export default LoginPage