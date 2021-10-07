import { useDispatch,useSelector } from "react-redux";
const MainReduxComponent =()=>{
    let dispatch = useDispatch();
    let depts = useSelector(state=>state.listDepartmentsReducer);
    return(
        <div className="container">
            <h1>The React Redux Application </h1>
        </div>
    );
}
export default MainReduxComponent;