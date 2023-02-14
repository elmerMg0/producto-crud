const APIURL = process.env.REACT_APP_API_URL;
let token = null;

export const ApiServices = {
  deleteProduct: async (id) => {
    try {
      const response = await fetch(`${APIURL}producto/delete?id=${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
        //body: JSON.stringify(id)
      });
      const data = await response.json();
      data.status = response.status;
      return data;
    } catch (error) {
      return error;
    }
  },
};

export const userServices = {
  setToken: (tokenkey) => {
    token = `Bearer ${tokenkey}`;
  },

  userLogin: async (username, password) => {
    try {
      const response = await fetch(`${APIURL}user/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      data.status = response.status;
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};

export const genericRequest = {
  get: async (url, params = "") => {
    //let response = {} ;
    try {
      const response = await fetch(`${APIURL}${url}${params}`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      data.status = response.status;
      return data;
    } catch (error) {
      console.error("Se produjo un error", error);
    }
  },
  post: async (url, params = "", databody) => {
    //let response = {} ;
    try {
      const response = await fetch(`${APIURL}${url}${params}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },  
        body: JSON.stringify(databody)
      });
      const data = await response.json();
      data.status = response.status;
      return data;
    } catch (error) {
      console.error("Se produjo un error", error);
    }
  },
};
