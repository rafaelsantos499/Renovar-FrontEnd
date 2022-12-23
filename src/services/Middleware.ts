import { Actions } from "@/store/enums/StoreEnums";
import store from "@/store";
import JwtService from "@/core/services/JwtService";
import router from "@/router";

const token = JwtService.getToken();

export default {
  usuarioAutenticado() {
    if (token) {
      store
        .dispatch(Actions.VERIFY_AUTH)
        .then(() => router.push({ name: "dashboard" }))
        .catch(() => store.dispatch(Actions.LOGOUT));
    } else {
      store.dispatch(Actions.LOGOUT);
    }
  },
  usuarionaoAutenticado() {
    // if (token) {
    //   store.dispatch(Actions.VERIFY_AUTH).catch(() => {
    //     store.dispatch(Actions.LOGOUT);
    //     router.push({ name: "sign-in" });
    //   });
    // } else {
    //   store.dispatch(Actions.LOGOUT);
    //   router.push({ name: "sign-in" });
    // }
  },
};
