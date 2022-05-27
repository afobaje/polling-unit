import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { TextField } from "@mui/material";
import plus from "./icons8-plus-50.png";
import "./Table.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};




const names = [
  " ME Torque (Avg)",
  "ME Speed (Avg)"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Table = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [sperson,setSperson]=useState([]);
  const [personAvg,setPersonAvg]=useState([]);

  const [speed,setSpeed]=useState([])
  const [secSpeed,setSecSpeed]=useState([])


  const [rows,setRows]=useState([{
  valueinTorque:  " ME Torque (Avg)",
   valueinSpeed: "ME Speed (Avg)"
  }])

  const handleSpeed = (event) => {
    const {
      target: { value },
    } = event;
    setSpeed(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSecSpeed = (event) => {
    const {
      target: { value },
    } = event;
    setSecSpeed(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };



  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleTChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonAvg(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };





  const handleSecChange = (event) => {
    const {
      target: { value },
    } = event;
    setSperson(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };


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
          <button className="sto">
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

            <TextField
              id="demo-helper-text-aligned-no-helper"
              className="mto"
              label="alert"
            />
            <FormControl sx={{ width: 300 }} className="pl mto">
              <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 230 }} className="mto eod">
              <InputLabel id="demo-simple-select-autowidth-label">
                ME Speed (Avg)
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                onChange={handleSecSpeed}
                value={secSpeed}
                autoWidth
                label="ME Speed Avg"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>ME Speed Avg</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="demo-helper-text-aligned-no-helper"
              label="min"
              className="freq mto"
            />

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
            <TextField
              id="demo-helper-text-aligned-no-helper"
              className="mto"
              label="alert"
            />
            <FormControl sx={{ width: 300 }} className="mto">
              <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={sperson}
                onChange={handleSecChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, sperson, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 230 }} className="mto">
              <InputLabel id="demo-simple-select-autowidth-label">
                ME Shaft Power (Avg.)
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                onChange={handleSpeed}
                autoWidth
                label="ME Speed Avg"
                value={speed}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='ME Speed Avg'>ME Speed Avg</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="demo-helper-text-aligned-no-helper"
              sx={{ w: 1 }}
              label="min"
              className="freq mto"
            />
            
            <button className="save">Save</button>
          </div>
          
          {rows.map((val,i)=>{
            return (
              <div className="rows three">
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

            <TextField
              id="demo-helper-text-aligned-no-helper"
              className="mto"
              label="alert"
            />
            <FormControl sx={{ width: 300 }} className="mto">
              <InputLabel id="demo-multiple-chip-label">Select var..</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personAvg}
                onChange={handleTChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personAvg, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 230 }} className="mto">
              <InputLabel id="demo-simple-select-autowidth-label">
                Select
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                onChange={handleChange}
                autoWidth
                label="ME Speed Avg"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='ME Speed Avg'>ME Speed Avg</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="demo-helper-text-aligned-no-helper"
              sx={{ w: 1 }}
              label="min"
              className="freq mto"
            />
            <button className="save">Save</button>
          </div>
            )
          })}
          {/* <div className="rows">
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

            <TextField
              id="demo-helper-text-aligned-no-helper"
              className="mto"
              label="alert"
            />
            <FormControl sx={{ width: 300 }} className="mto">
              <InputLabel id="demo-multiple-chip-label">Select var..</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personAvg}
                onChange={handleTChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personAvg, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 230 }} className="mto">
              <InputLabel id="demo-simple-select-autowidth-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                onChange={handleChange}
                autoWidth
                label="ME Speed Avg"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='ME Speed Avg'>ME Speed Avg</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="demo-helper-text-aligned-no-helper"
              sx={{ w: 1 }}
              label="min"
              className="freq mto"
            />
            <button className="save">Save</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Table;
