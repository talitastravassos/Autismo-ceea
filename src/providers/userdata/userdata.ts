import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2'

let config_key_name = "config";

@Injectable()
export class UserdataProvider {

  private config = {
    userAuth: false,
    username: ""
  }

  constructor(private firebase: FirebaseApp) {
    //console.log('Hello UserdataProvider Provider');
  }

  /**
   * getCurrentUser
   */
  public getCurrentUser(): any {
    let user = this.firebase.auth().currentUser;

    localStorage.setItem("usuarioAtual", JSON.stringify(user));
    return JSON.parse(localStorage.getItem("usuarioAtual"));
  }
  
  getConfigData(): any{
    
    return localStorage.getItem(config_key_name);

  }

  setConfigData(userAuth?: false, username?: string){
    let config = {
      userAuth: false,
      username: ""
    }

    if(userAuth){
      config.userAuth = userAuth;
    }

    if(username){
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));

  }

  /**
   * resetConfigData
   */
  public resetConfigData() {
    localStorage.removeItem(config_key_name)
  }

}
