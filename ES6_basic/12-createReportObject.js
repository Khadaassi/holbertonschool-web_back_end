export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const department of employeesList.departments) {
    allEmployees[department] = employeesList[department].employees;
  }

  const getNumberOfDepartments = () => employeesList.departments.length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
