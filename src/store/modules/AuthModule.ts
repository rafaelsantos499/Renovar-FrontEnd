import ApiService from "@/core/services/ApiService";
import ApiServicee from "@/services/ApiServicee";
import JwtService from "@/core/services/JwtService";
import { ApiAuth } from "@/services/ApiAuth";
import { Api } from "@/services/ApiServiceAxios";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

import { UserData } from "@/models/User";
import router from "@/router";

export interface User {
  token: string;
  usuario: UserData;

import ApiAuth from "@/services/ApiAuth";
import type { UserData } from "@/models/User";

export interface User {
  token: string;
  user: UserData;

}

export interface UserAuthInfo {
  errors: Array<string>;
  user: UserData;
  isAuthenticated: boolean;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
  errors = [];
  user = {} as UserData;
  isAuthenticated = !!JwtService.getToken();

  /**
   * Get current user object
   * @returns User
   */
  get currentUser(): UserData {
    return this.user;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get authentification errors
   * @returns array
   */
  get getErrors(): Array<string> {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = error;
  }



  [Mutations.SET_AUTH](user: UserData) {
    // console.log(user);
    this.isAuthenticated = true;
    this.user = user;
    this.errors = [];
  }

  @Mutation
  [Mutations.SET_USER](user) {
    this.user = user;
  }

  @Mutation
  [Mutations.SET_PASSWORD](password) {
    // this.user.password = password;
  }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.user = {} as UserData;
    this.errors = [];
    JwtService.destroyToken();
  }

  @Action
  [Actions.LOGIN](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiAuth.login(credentials).then(({ data }) => {




        if (data.error) {
          this.context.commit(Mutations.SET_ERROR, data.message);
          reject();
          return;
        }
        this.context.commit(Mutations.SET_AUTH, data.data.usuario);
        JwtService.saveToken(data.data.token);
        resolve(data);
      });
    });
  }

  @Action
  [Actions.LOGOUT]() {
    this.context.commit(Mutations.PURGE_AUTH);
  }

  @Action
  [Actions.REGISTER](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("registration", credentials)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);

          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.FORGOT_PASSWORD](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("forgot_password", payload)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          resolve();
        })
        .catch(({ response }) => {
          console.log(response.data.errors);
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.VERIFY_AUTH]() {
    const token = JwtService.getToken();
    return new Promise<void>((resolve, reject) => {
      ApiAuth.validateToken(token)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data.data.usuario);
          resolve();
        })
        .catch(() => reject());  

    });
  }

  @Action
  [Actions.UPDATE_USER](payload) {
    ApiService.setHeader();
    return new Promise<void>((resolve, reject) => {
      ApiService.post("update_user", payload)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_USER, data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }
}
