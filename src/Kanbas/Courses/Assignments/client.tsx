import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};


// details client - - -- - - ---------------------------------------------

export const addDetails = async (assignmentId: string, submission: any) => {
    const response = await axios.post(`${ASSIGNMENTS_API}/${assignmentId}/submissions`, submission);
    return response.data;
}

export const findDetails = async (assignmentId: string) => {
    const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}/submissions`);
    return response.data;
}
export const deleteDetails = async (submissionId: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/submissions/${submissionId}`);
    return response.data;
}
export const updateDetails = async (submission: any) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/submissions/${submission._id}`, submission);
    return response.data;
}