// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const WeatherAlerts = () => {
//   const [alerts, setAlerts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/alerts/")
//       .then((response) => {
//         setAlerts(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Failed to load alerts");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading alerts...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div>
//       <h2>Weather Alerts</h2>
//       {alerts.length === 0 ? (
//         <p>No alerts available.</p>
//       ) : (
//         <ul>
//           {alerts.map((alert) => (
//             <li key={alert.id}>
//               <strong>{alert.title}</strong> - {alert.description}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default WeatherAlerts;
import { useEffect, useState } from "react";
import API from "../api";

function WeatherAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    API.get("alerts/")
      .then((response) => {
        console.log(response.data);
        setAlerts(response.data);
      })
      .catch((error) => console.error("Error fetching alerts:", error));
  }, []);

  return (
    <div style={styles.container}>
    <h2 style={styles.heading}>Weather Alerts</h2>
    {alerts.length > 0 ? (
      alerts.map((alert, index) => (
        <div key={index} style={styles.alertCard}>
          <h3>Location: {alert.location}</h3>
          <p>Alert Level: {alert.alert_level}</p>
          <small>Issued At: {new Date(alert.issued_at).toLocaleString()}</small>
        </div>
      ))
    ) : (
      <p>No alerts available</p>
    )}
  </div>
  );
}

const styles = {
    container: {
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
    },
    heading: {
        textAlign: "center",
        color: "#333",
    },
    alertCard: {
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
        backgroundColor: "rgb(116,116,116)",
        border: "1px solidrgb(100, 100, 100)",
    },
};
  
export default WeatherAlerts;
