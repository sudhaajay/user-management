class Landing{
    dataBase={}
    // database={
    //      "milan@gmail.com":{name:"milan",email:"milan@gmail.com",password:"1234"}
    //     }
    
    registerUser(){
        if(localStorage.getItem('userData')!= null){
            this.getData()
        }
        let firstName = username.value;
        let email = exampleInputEmail1.value
        let password = exampleInputPassword1.value
        if(firstName !=='' && email !=='' && password !==''){
            if(email in this.dataBase){
                console.log(email);
                console.log(this.dataBase);
                alert(`${email} already exist`)
            }
            else{
                this.dataBase[email]={
                    name:firstName,
                    email:email,
                    password:password
                }
                // save data
                this.saveData();
                alert("Registaration Successfully");
                // method to navigate to a new html page
                window.location = "login.html"
            }
      
        }
        else{
            alert("Please enter valid values");
        }
    }
    getData(){
        this.dataBase = JSON.parse(localStorage.getItem('userData'))
    }
saveData(){
        localStorage.setItem("userData",JSON.stringify(this.dataBase))
    }
    login(){
        let loggedEmail=userEmail.value;
        let loggedPassword=userPassword.value;
        this.getData();
        if(loggedEmail==""|| loggedPassword==""){
            alert("please enter values")
        }
        else{
          if(loggedEmail in this.dataBase){
            if(this.dataBase[loggedEmail].password===loggedPassword){
           localStorage.setItem("firstname",this.dataBase[loggedEmail].name)
                window.location='home.html'
            }
            else{
                alert("password mismatch")  
            }

          }
          else{
            lalert(`${loggedEmail} not found`)
          }
        }
    }
}
const obj = new Landing()