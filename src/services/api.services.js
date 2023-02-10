const APIURL = process.env.REACT_APP_API_URL;

export const ApiServices = {
    getProductos : async ( pageNumber, pageSize) => {
        //let response = {} ;
        try {
          const response = await fetch(`${APIURL}producto/index?page=${pageNumber}&pageSize=${pageSize}`)
          const data = await response.json();
          data.status = response.status;
          return data;
          
        } catch (error) {
            console.error("Se produjo un error", error);
        }
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
        data.status = response.status;
        return data;
        
      } catch (error) {
          console.error("Se produjo un error", error);
      }
    },
    createProducto : async ( product ) => {
      try {
        const response = await fetch(`${APIURL}producto/create`,{
          method: "POST",
          headers: {
            'content-type': "application/json"
          },
          body: JSON.stringify(product)
        });
        const data = await response.json();
        data.status = response.status;
        return data;
      } catch (error) {
        return error;
      }
     
    }
    ,
    deleteProduct : async ( id ) => {
      try {
        const response = await fetch(`${APIURL}producto/delete?id=${id}` ,{
          method: "DELETE",
          headers: {
            'content-type': "application/json"
          },
          //body: JSON.stringify(id)
        });
        const data = await response.json();
        data.status = response.status;
        return data;
      } catch (error) {
        return error;
      }
     
    }
}