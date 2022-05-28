import React, { useState } from "react";
import plus from "./icons8-plus-50.png";
import "./Table.css";
import Select from "react-select";

const options = [
  
  { value: "ME Torque (Avg)", label: "ME Torque (Avg)" },
  { value: "ME Speed (Avg)", label: "ME Speed (Avg)" },
  { value: "Rate of turn (Avg)", label: "Rate of turn (Avg)" },
];


const secoptions = [
  { value: "ME Torque (Avg)", label: "ME Torque (Avg)" },
  { value: "ME Speed (Avg)", label: "ME Speed (Avg)" },
  { value: "Rate of turn (Avg)", label: "Rate of turn (Avg)" },
  { value: "ME Shaft Power(Avg)", label: "ME Shaft Power(Avg)" }
];



const Table = () => {
  const [rows, setRows] = useState([
    {
      valueinTorque: " ME Torque (Avg)",
      valueinSpeed: "ME Speed (Avg)",
      frequency:'',
      alert:''
    },
  ]);

  const addMore=()=>{
    setRows([...rows,{
      valueinTorque: " ME Torque (Avg)",
      valueinSpeed: "ME Speed (Avg)",
      frequency:'',
      alert:''
    }])
  }

  return (
    <div className="layout">
      <header className="firstitem">
        <h3>Alert configuration</h3>

        <button className="clear">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            fill="currentColor"
            class="catIcon"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </header>
      <div className="body">
        <div className="header">
          {" "}
          <button className="sto" onClick={addMore}>
            <img src={plus} width={20} height={20} alt="" />
          </button>
          <h3>Alert Name</h3>
          <h3>Independent variable</h3> <h3>Dependent variable</h3>{" "}
          <h3>Frequency</h3> <h3>Save</h3>
        </div>
        <hr />
        <div className="acc">
          <div className="rows one">
            <button className="soto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                fill="currentColor"
                class="catIcon"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>

           
            <input type="text" placeholder="alert" className="space alert" />
            <Select
              closeMenuOnSelect={false}
              defaultValue={[options[0], options[1]]}
              isMulti
              classNamePrefix="select"
              className="space basic-multi-select"
              options={options}
            />

            <Select
              closeMenuOnSelect={false}
              defaultValue={[secoptions[1]]}
              classNamePrefix="select"
              className="space basic-single"
              options={secoptions}
            />
           
            <input type="text" defaultValue={10} placeholder="min" className="space min" />
            <button className="save">Save</button>
          </div>
        
          <div className="rows two">
            <button className="soto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                fill="currentColor"
                class="catIcon"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
            <input type="text" placeholder="alert" className="space alert" />
            <Select
              closeMenuOnSelect={false}
              defaultValue={[options[0], options[1]]}
              isMulti
              classNamePrefix="select"
              className="space basic-multi-select"
              options={options}
            />
            <Select
              closeMenuOnSelect={false}
              defaultValue={[secoptions[3]]}
              classNamePrefix="select"
              className="space basic-single"
              options={secoptions}
            />
            <input type="text" defaultValue={10} placeholder="min" className="space min" />
            <button className="save">Save</button>
          
          </div>
          {
            rows.map((val,i)=>{
              return (
                
                    <div className="rows three" key={i}>
            <button className="soto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                fill="currentColor"
                class="catIcon"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
            <input type="text" placeholder="alert" className="space alert" />
            <Select
              closeMenuOnSelect={false}
              defaultValue='Select..'
              isMulti
              classNamePrefix="select"
              className="space dynamic basic-multi-select"
              options={options}
            />
            <Select
              closeMenuOnSelect={false}
              defaultValue={[secoptions[1]]}
              classNamePrefix="select"
              className="space basic-single"
              options={secoptions}
            />
            <input type="text" placeholder="min" className="space min" />
            <button className="save">Save</button>
          </div>
                
              )
            })
          }



        
          
        </div>
      </div>
    </div>
  );
};

export default Table;
