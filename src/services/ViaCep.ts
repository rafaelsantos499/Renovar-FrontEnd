import axios from "axios";

const ViaCep = {
  get(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  },
};

export default ViaCep;
