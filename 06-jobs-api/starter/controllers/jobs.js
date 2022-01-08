const getAllJobs = async (req, res) => {
  res.send('get all jobs');
};
const getJob = async (req, res) => {
  res.send('get all jobs');
};
const createJob = async (req, res) => {
  console.log(req)
  res.json(req.user);
};
const updateJob = async (req, res) => {
  res.send('get all jobs');
};
const deleteJob = async (req, res) => {
  res.send('get all jobs');
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
