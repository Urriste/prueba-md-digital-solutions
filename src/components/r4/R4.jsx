import React, { useState, useEffect, Fragment } from "react";
import "./style/r4.css";

const R4 = () => {
  //Creamos un estado donde guardaremos, y luego renderizaremos, los datos que provienen de la api
  const [news, setNews] = useState([{}]);

  //como buena practica guardamos el url en una constante
  const url =
    "http://api.mediastack.com/v1/news?access_key=a92b7ca5cede5503f88007a16e092368&countries=us";

  //creamos la funcion que traera los datos desde la API
  const getApi = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setNews(data);
  };

  //utilizando este hook, nos aprovechamos del ciclo de vida, y una vez que la pagina carga, se ejecuta la funcion que esta dentro
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {" "}
            <th>Country</th>
            <th>Author</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {/* Aca vamos a utilizar el metodo de los array "map" para recorrer todo nuestro array de objetos , que proviene del fetch de la api */}
          {news.data?.map((item, index) => {
            //como buena practica aplicamos object destructuring para extrer los datos que nos sirven. Esto ayuda a la legibilidad del codigo
            const { country, author, title, description } = item;
            return (
              //esta etiqueta "Fragment" es para agrupar etiquetas html sin agregar nodos extras al DOM
              <Fragment>
                {/* Es imprescindible otorgarle una key unica a cada elemento que será renderizado, por ende le damos la que nos proporciona el parametro del metodo "map" */}
                <tr key={index}>
                  <td>{country}</td>

                  {/* Como encontré que muchos autores tienen null como valor, decidi mostrar ese mensaje para no dejar el campo vacio, asi arruinando la vista de la web */}
                  <td>{author ? author : "No Author Found"}</td>
                  <td>{title}</td>
                  <td>{description}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default R4;
