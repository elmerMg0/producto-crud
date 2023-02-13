const APIURL = process.env.REACT_APP_API_URL;
let token = null


export const ApiServices = {
    getProductos : async ( pageNumber, pageSize) => {
        //let response = {} ;
        try {
          const response = await fetch(`${APIURL}producto/index?page=${pageNumber}&pageSize=${pageSize}`,{
            method: "GET",
            headers: {
              //'Authorization': `'Bearer ${token}'`
              'Authorization': token
            }
          })
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
              'content-type': "application/json",
              'Authorization': token
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
            'content-type': "application/json",
            'Authorization': token
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
            'content-type': "application/json",
            'Authorization': token
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
    getCategories : async ( ) => {
      //let response = {} ;
      try {
        const response = await fetch(`${APIURL}categoria/index`)
        const data = await response.json();
        data.status = response.status;
        return data;
        
      } catch (error) {
          console.error("Se produjo un error", error);
      }
     },

     getCategoriesBelongProduct : async ( id ) => {
      //let response = {} ;GetCategoriesBelongProduct
      try {
        const response = await fetch(`${APIURL}producto/get-categories-belong-product?producto_id=${id}`,{
          method: "GET",
          headers:  {
            'Authorization': token
          }
        })
        const data = await response.json();
        data.status = response.status;
        return data;
        
      } catch (error) {
          console.error("Se produjo un error", error);
      }
     },

     assignCategoryProduct : async ( productId, categoryId ) => {
      //let response = {} ;
      try {
        const response = await fetch(`${APIURL}producto/assign-category?producto_id=${productId}&categoria_id=${categoryId}`,{
          method:"GET",
          header: {
            'Authorization': token
          }
        });
        const data = await response.json();
        data.status = response.status;
        return data;
        
      } catch (error) {
          console.error("Se produjo un error", error);
      }
     },

     unssignCategoryProduct : async ( productId, categoryId ) => {
      //let response = {} ;
      try {
        const response = await fetch(`${APIURL}producto/unssign-category?producto_id=${productId}&categoria_id=${categoryId}`,{
          method:"GET",
          headers:{
            'Authorization': token
          }
        });
        const data = await response.json();
        data.status = response.status;
        return data;
        
      } catch (error) {
          console.error("Se produjo un error", error);
      }
     },



}

export const userServices = {
    setToken : ( tokenkey ) => {
      token = `Bearer ${tokenkey}`
    },

    userLogin: async ( username, password ) => {
        try{const response = await fetch(`${APIURL}user/login` , {
          method: "POST",
          headers: {
            'content-type': "application/json"
          },
          body: JSON.stringify( { username, password} )
        })
        const data = await response.json();
        data.status = response.status;
        return data;
      }catch(error){
        console.error(error)
      }
    }
}