function changeContent(page) {
  let contentDiv = document.getElementById("content");
  switch (page) {
    case "contacto":
      contentDiv.innerHTML = `
            <h2>
            Hay algun fallo o no esta funcionando el api ? o deseas contactarme para trabajar en algun proyecto ? Contactame! <br></br>
            <form>
            <label> Nombre: </label> <br>
            <input type="text" name= "nombre" placeholder= "Tu nombre" required> <br> <br>
            <label> Correo: </label> <br>
            <input type="text" name= "correo" placeholder= "Tu correo" required> <br> <br>
            <label> Mensaje: </label> <br>
            <input type="text" name= "mensaje" placeholder= "Tu mensaje" required> <br> <br>
            <textarea name = "mensaje" rows="5" placeholder ="Escribe tu mensaje aqui" required></textarea>
            <br> <br>
            <button type="submit"> Enviar </button>
            </form>
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
let urlApiUsd = document.getElementById("url_api").innerHTML;

async function copiar_tasa() {
  try {
    await navigator.clipboard.writeText(tasa);
  } catch (err) {
    console.error("error al copiar: ", err);
  }
}

let button_copy = document.getElementById("button_copy");
button_copy.addEventListener("click", () => {
  navigator.clipboard.writeText(urlApiUsd);
  alert("Se ha copiado la url al portapapeles");
});

/**
 * Espera unos segundos antes de hacer el fetch para dar tiempo a que el servidor del API inicie.
 * Utiliza await new Promise(resolve => setTimeout(resolve, ms)) para pausar la ejecución.
 * En este ejemplo, espera 3 segundos (3000 ms) antes de hacer la petición.
 */
async function obtenerTasaYMostrar() {
  try {
    // Esperar 3 segundos antes de hacer el fetch
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
      "https://api-bcv-ekgz.onrender.com/tipos-de-tasas/usdbcv"
    );
    const data = await response.json();
    const tasa = data.valor;
    let h3_tasa = document.getElementById("tasa_actual");
    // Encerramos la tasa en un <span> con clase para poder darle color desde CSS
    h3_tasa.innerHTML = ` tasa de hoy: <span class="tasa-verde">${tasa}</span>`;
    // Ahora puedes usar la variable tasa aquí o llamarla desde otra función
    // Por ejemplo, puedes retornar tasa si lo necesitas en otro lado
    return tasa;
  } catch (error) {
    console.error("Error al obtener la tasa:", error);
  }
}

// Llamar la función para que se ejecute al cargar la página
obtenerTasaYMostrar();
