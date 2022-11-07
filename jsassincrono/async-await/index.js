function promiseAsyncAwait(){
  const loginUser = (email, password) =>{
    return new Promise((resolve, reject) =>{
      const error = false;
      if(error){
        reject(new Error("error in login"));
      }
      console.log("user logged!");
      resolve({email});
    });
  }
  const userGetVideo = (email) =>{
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        console.log("userGetVideo");
        resolve(["v1", "v2", "v3"]);
      }, 2000)
    });
  }
  const getVideoDetails = (video) =>{
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        console.log("getVideoDetails");
        resolve({title: "Reagindo comidas"});
      }, 2500);
    })}

  //consumir promise
  const displayUser = async () =>{
    try {
      const user = await loginUser("livia@gmail.com", "12345"); //retorna o resolve
      const videos = await userGetVideo(user.email);
      const videosDetails = await getVideoDetails(videos[0]);
      console.log({videosDetails});
    }catch(error){
      console.log({error});
    }
  }  
  return displayUser();
}

//main
{
  promiseAsyncAwait();
}