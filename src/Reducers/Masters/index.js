import { combineReducers } from "redux";
import departments from "./DepartmentReducer";
import academicinfo from "./AcademicinfoReducer";
import feesTransaction from "./FeesTransactionReducer";

export default combineReducers({
  departments,
  academicinfo,
  feesTransaction
});
