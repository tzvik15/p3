import axios from "axios";

// const axiosURL = "https://localhost:4001";

export default {

   getCards: function() {
      return axios.get("/api/cards");
   },
   

   getCard: function(id) {
      return axios.get("/api/cards/" + id);
   }

}