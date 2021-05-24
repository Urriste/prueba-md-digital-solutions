import React from "react";
import "./style/r2.css";

const R2 = () => {
  return (
    <div>
      <table>
        <thead>
          {/*  Aca iniciamos con el patron "stripped". Basicamente , por medio de las clases, vamos cambiando los estilos de las filas. Esto se puede repetir cuantas veces se quiera */}
          <tr>
            <th className="white">Lorem, ipsum dolor.</th>
            <th className="white">Lorem, ipsum dolor.</th>
            <th className="white">Lorem, ipsum dolor.</th>
            <th className="white">Lorem, ipsum dolor.</th>
            <th className="white">Lorem, ipsum dolor.</th>
            <th className="white">Lorem, ipsum dolor.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
          </tr>
          <tr>
            <td className="white">Lorem, ipsum.</td>
            <td className="white">Lorem, ipsum.</td>
            <td className="white">Lorem, ipsum.</td>
            <td className="white">Lorem, ipsum.</td>
            <td className="white">Lorem, ipsum.</td>
            <td className="white">Lorem, ipsum.</td>
          </tr>
          <tr>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
          </tr>
          <tr>
            <td className="white">Lorem, ipsum.</td>
            <td className="white">Lorem, ipsum.</td>
            <td className="white">Lorem, ipsum.</td>
            <td className="white">Lorem, ipsum.</td>
            <td className="white">Lorem, ipsum.</td>
            <td className="white">Lorem, ipsum.</td>
          </tr>
          <tr>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
            <td className="grey">Lorem, ipsum.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default R2;
