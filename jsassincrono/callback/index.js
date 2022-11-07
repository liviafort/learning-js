function nãoEsperaSetTimeOut(){
  const loginUser = (email, password) =>{
    setTimeout(() =>{
      console.log("user logged!");
      return { email };
    }, 1500);
    console.log("after seTimeout");
  };
  const user = loginUser("livia4fort@outlook.com", "123456");
  console.log({user});
}

function esperaSTOComCallback(){
  const loginUser = (email, password, callback) =>{
    setTimeout(() =>{
      console.log("user logged!");
      callback({ email });
    }, 1500);
    console.log("after seTimeout");
  };
  const user = loginUser("livia4fort@outlook.com", "123456", () =>{
    console.log({user});
  });
}

function sucessAndError(){
  const loginUser = (email, password, onSuccess, onError) =>{
    setTimeout(() =>{
      const error = true; //mude pra false pra notar a saída
      if(error){
        return onError(new Error("error in login"));
      }
      console.log("user logged!");
      onSuccess({email});
    }, 1500);
    console.log("after setTimeout");
  }
  const user = loginUser("livia@gmail.com", "94823", (user) =>{
    console.log({user});
  },(error) =>{
    console.log({error});
  });
}

function maisCallback(){
  const loginUser = (email, password, onSuccess, onError) =>{
    setTimeout(() =>{
      const error = false;
      if(error){
        return onError(new Error("error in login"));
      }
      console.log("user logged!");
      onSuccess({email});
    }, 1500);
  }
  const getUserVideos = (email, callback) =>{
    setTimeout(() => {
      callback(["v1", "v2", "v3"]);
    }, 2000);
  }
  const getUserVideosDetails = (video, callback) =>{
    setTimeout(() => {
      callback({title: "Casimiro comida"});
    }, 2500);
  }
  const user = loginUser("livia@gmail.com", "94823", (user) =>{
    getUserVideos(user.email, (videos) =>{
      console.log({videos});
    }, getUserVideosDetails(video[0], (details) =>{
      console.log(details);
    }))
    }, (error) =>{
      console.log({error});
  });
}
//main
{
  maisCallback();
}