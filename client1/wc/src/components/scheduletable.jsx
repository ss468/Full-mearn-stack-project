import { useState, useEffect } from "react";
import axios from "axios";
import './schedule-table.css';
import Updatebutton from "./updatebutton";
// import PropTypes from 'prop-types';

const Scheduletable = ({ ondelete,handleShow }) => {
  const [showschedules, setShowschedules] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    axios
      .get(`http://localhost:8000/home`)
      .then((response) => {
        setShowschedules(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Error in getting data");
        setLoading(false);
      });
  }, [showschedules]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this schedule?")) {
      ondelete(id);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : showschedules && showschedules.allwc ? (
        <div className="wholetable">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Mode</th>
              <th>Time</th>
              <th>DELETE</th>
              <th>UPDATE</th>
            </tr>
          </thead>
          <tbody>
            {showschedules.allwc.map((schedule, index) => (
              <tr key={index}>
                <td>{formatDate(schedule.day)}</td>
                <td>{schedule.mode}</td>
                <td>{schedule.time}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(schedule._id)}  // Correct usage here
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                </td>
                <td>

                   <button type="button" onClick={()=>handleShow(schedule._id)} className="btn btn-warning">UPDATE</button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

// Scheduletable.propTypes = {
//   ondelete: PropTypes.func.isRequired,
// };

export default Scheduletable;
