import { Link } from "react-router-dom";
import JobListing from "./JobListing";

const JobListings = ({ jobs }) => {

  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id}>
            <JobListing key={job.id} job={job} />
            <Link to={`/jobs/${job.id}`}>
              View Details
            </Link>
          </div>
        ))
      ) : (
        <h2>No Jobs Listed</h2>
      )}
    </div>
  );

};

export default JobListings;