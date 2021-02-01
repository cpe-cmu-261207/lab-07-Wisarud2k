import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState } from "react";
import {context} from "../grade_cal";

const CourseForm = () => {
  const [input,setInput] = useState({ID:"",grade:"4",credit:"1"})
  const {dispatch} = useContext(context);
  
  const addform = (e) => {
    e.preventDefault();
    if(input.ID !== ""){
      dispatch({
        type:"ADD_FORM",
        payload: {
          ID:input.ID,
          grade:input.grade,
          credit:input.credit,
        },
      });
      //clear input
      setInput({ID:"",grade:"4",credit:"1"});
      document.getElementById('num').value='';
      document.querySelector('#g').value='';
      document.querySelector('#c').value='';

    }else{
      dispatch({
        type:"ERROR"
      })
    }
  }

  return (
    <>
      <form onSubmit = {addform}>
        <div>
          <input id="num" type = "number" 
          placeholder="CourseID" 
          onChange = {(e) => setInput({...input,ID: e.currentTarget.value})}></input>
          <select id="g" onChange ={(e) => setInput({...input,grade: e.currentTarget.value})} >
            {GRADES.map((item) => {
              return <option value ={item.value} >{item.name}</option>
            })}
          </select>
          <select id="c" onChange ={(e) => setInput({...input,credit: e.currentTarget.value})}>
            {CREDITS.map((item) => {
              return <option value = {item}> {item}</option>
            })}
          </select>
          <button id="add_button" type="submit">
            ADD
          </button>
        </div>
      </form>

    </>
  );
};

export default CourseForm;
