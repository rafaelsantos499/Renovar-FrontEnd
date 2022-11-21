import { Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";
import { ApiAuth } from "@/services/ApiAuth";
import store from "@/store";
import router from ".";
import { Mutation } from "vuex-module-decorators";

export default {
  redirecionarUsuarioLogado(to, from) {
    const token = JwtService.getToken();
    if (token) {
      store
        .dispatch(Actions.VERIFY_AUTH)
        .then(() => router.push({ name: "dashboard" }))
        .catch(() => store.dispatch(Actions.LOGOUT));
    }
  },
  redirecionarUsuarioNaoAutenticado(to, from) {
    const token = JwtService.getToken();
    if (token) {
      store.dispatch(Actions.VERIFY_AUTH).catch(() => {
        store.dispatch(Actions.LOGOUT);
        router.push({ name: "sign-in" });
      });
      return;
    } else router.push({ name: "sign-in" });
  },
};