const APIURL = process.env.REACT_APP_API_URL;

export const ApiServices = {
    getProductos : async ( pageNumber) => {
        //let response = {} ;
        try {
          const response = await fetch(APIURL+"producto/index?page="+pageNumber)
          const data = await response.json();
          return data;
          
        } catch (error) {
            console.error("Se produjo un error", error);
        }
                                
      /*  then( (res) => response = res.json())
         .catch( error => console.error(error)) */
    },
    updateProduct : async ( product, id ) => {
      try {
        const response = await fetch(APIURL+"producto/update?id="+id,{
            method: "PUT",
            headers: {
              'content-type': "application/json"
            },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        return data;
        
      } catch (error) {
          console.error("Se produjo un error", error);
      }
    }
    ,
}