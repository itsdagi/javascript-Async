console.log("Start")

 function loginUser(email, password, callBack){
  setTimeout(()=>{
    callBack({userID:564, status: "success"})
    
  },4000);  
}

function getUserTweets(){}
function getTweetComments(){}
const data = loginUser("xcvkp@example.com", "password",(values) => console.log(values));


console.log("Finish");