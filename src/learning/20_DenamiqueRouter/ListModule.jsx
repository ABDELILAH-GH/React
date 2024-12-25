import React from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
// import db from "./data.json";

export default function ListModule() {
//   const [data,setData] = useState()
//   useEffect (() => {
//     const dataValue = JSON.parse(JSON.stringify(db))
//     setData(dataValue)
//   },[])
// console.log(data)
const data = [
  {
    "id": 1,
    "nom": "agile",
    "nh": 100,
    "regional": "oui",
    "dateDebut": "15-09-2024",
    "heure": "8h30min"
  },
  {
    "id": 2,
    "nom": "uml",
    "nh": 100,
    "regional": "non",
    "dateDebut": "18-09-2024",
    "heure": "8h30min"
  },
  {
    "id": 3,
    "nom": "react",
    "nh": 120,
    "regional": "oui",
    "dateDebut": "22-01-2025",
    "heure": "11h30min"
  },
  {
    "id": 4,
    "nom": "laravel",
    "nh": 120,
    "regional": "oui",
    "dateDebut": "22-01-2025",
    "heure": "14h30min"
  },
  {
    "id": 5,
    "nom": "javaScript",
    "nh": 120,
    "regional": "oui",
    "dateDebut": "24-03-2025",
    "heure": "15h30min"
  },
  {
    "id": 6,
    "nom": "php",
    "nh": 100,
    "regional": "oui",
    "dateDebut": "24-03-2025",
    "heure": "8h30min"
  },
  {
    "id": 7,
    "nom": "base de donnes",
    "nh": 120,
    "regional": "non",
    "dateDebut": "08-01-2025",
    "heure": "16h00"
  }
]


  return (
    <div className="container w-75 mt-3">
      <h3 className="d-flex justify-content-start text-danger py-2 mt-2">Listes des modules</h3>
      <hr />   
      <div className="table-responsive">
        <table className="table">
          <thead className="table table-warning">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nom</th>
              <th scope="col">Nh</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>
                  <Link className =' nav-link text-dark'to={`/module/${item.nom}/${item.nh}/${item.regional}/${item.dateDebut}/${item.heure}`}
                  >
                    {item.nom}
                  </Link>
                </td>
                <td>{item.nh}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
