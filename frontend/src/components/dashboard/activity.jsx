import {
  
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";

import { activity } from "../../data/activity";

import "../../styles/activity.css";


export default function Activity() {

  return (

    <div className="activity-card">


      <div className="activity-header">

        <div>

          <h3>
            Recent Activity
          </h3>

          <p>
            Latest workspace updates
          </p>

        </div>

      </div>



      <div className="activity-list">


        {activity.map((item) => (

          <div
            className="activity-item"
            key={item.id}
          >


            <div className="activity-icon">

              {item.id % 2 === 0 
                ? <FaCode /> 
                : <FaCheckCircle />
              }

            </div>



            <div className="activity-content">


              <h4>
                {item.action}
              </h4>


              <span>
                {item.time}
              </span>


            </div>



          </div>

        ))}


      </div>


    </div>

  );

}