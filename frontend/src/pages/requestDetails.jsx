import { useParams } from "react-router-dom";

function RequestDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Request Details</h1>
      <p>Request ID: {id}</p>
    </div>
  );
}

export default RequestDetails;