function MainPage({setIsUserLoggedIn}){
  
    function handleLogOut(){
      setIsUserLoggedIn(false)
    }
  
    return <>
    <h1>Main Page</h1>
    <button style={{backgroundColor:'crimson',color:'white'}} onClick={handleLogOut}>LogOut</button>
    </>
  }

export default MainPage