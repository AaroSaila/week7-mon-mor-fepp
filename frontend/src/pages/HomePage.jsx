import { useEffect, useState } from "react";
import JobListings from "../components/JobListings";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);


  return (
    <div className="home">
      <JobListings jobs={jobs} />
    </div>
  );
};

export default Home;
