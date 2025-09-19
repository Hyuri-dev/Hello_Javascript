function changeContent(page) {
  let contentDiv = document.getElementById("content");
  switch (page) {
    case "contacto":
      contentDiv.innerHTML = `
            <h2> 
            Si existe algun fallo con el api hazmelo saber y lo ajustare en cuanto pueda, o si deseas contactarme para trabajar en algun proyecto entonces adelante !
            </h2> 
            `;
      break;
    case "documentacion":
      contentDiv.innerHTML = `  
        <h2>Documentacion del API 📚</h2>
        <h3> 1. Inicio </h3>
        <h3> <a href=#> https://api-bcv-ekgz.onrender.com/inicio <a> </h3>
        <p> Este endpoint es el inicio, solamente te da una bienvenida y sugiere que abras la documentación oficial para que puedas aprender a consumir el api </p>
        <br><br>

        <h3>2. Dolar USD 💲</h3>
        <h3> <a href=#> https://api-bcv-ekgz.onrender.com/tipos-de-tasas/usdbcv <a> </h3>
        <p> Este endpoint permite consultar la tasa en dolares de la pagina </p>
        <img src="assets/images/response-usd.png" alt="Response API USD"> </img>

        
        
    
    `;
  }
}

fetch("https://api-bcv-ekgz.onrender.com/tipos-de-tasas/usdbcv")
  .then((response) => response.json())
  .then((data) => {
    const tasa = data.valor;
    console.log(tasa);
  });
