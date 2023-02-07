const APIURL = process.env.REACT_APP_API_URL;

export const ApiServices = {
    getProductos : async () => {
        let response = {} ;
        await fetch(APIURL+"producto/ifndex").
                                
        then( (res) => response = res.json())
        .catch( error => console.error(error))
        
        
      /*   const data = await response.json();
        console.log(data); */
    }
    ,
}