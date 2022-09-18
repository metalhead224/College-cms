import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table';
import './attendance.scss';


import { Button, Checkbox, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { GridSaveAltIcon } from '@mui/x-data-grid';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { MdSave } from 'react-icons/md';
import { green, pink, red } from '@mui/material/colors';
import { Link } from 'react-router-dom';


const stdList=[
    {roll:'01',name:"Anish Manandhar",percentage:'90%',attendance:'present'},
    {roll:'02',name:"Avash Babu Shrestha",percentage:'90%',attendance:'present'},
    {roll:'03',name:"Bekin Joshi",percentage:'90%',attendance:'absent'},
];

const AttendanceTable = () => {
    const [filteredData,setFilteredData]=useState(stdList)
    const [status,setStatus]=useState('all')
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());
    const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
    const controlProps = (item: string) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });
  
        const columns=[
         {title:'Roll no', field:'roll'},
         {title:'Name',field:'name'},
         {title:'Percentage', field:'percentage'},
         {title:'Attendance',field:'attendance', render: rowData =><>
            <RadioGroup
       row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
          <FormControlLabel value="present" 
          control={<Radio  sx={{
           color: green[800],
           '&.Mui-checked': {
            color: green[800],
           },
         }}/>} label="Pre" />
        <FormControlLabel value="absent" control={<Radio 
        sx={{
          color: red[800],
          '&.Mui-checked': {
           color: red[800],
          },
        }}
        />} label="Abs" />
        
       </RadioGroup>
       </>},
         // eslint-disable-next-line jsx-a11y/alt-text
         {title:'report', field:'report',render: rowData => <MdSave/>}
        ]
        useEffect(()=>{
           setFilteredData(status==='all'?stdList:stdList.filter(dt=>dt.attendance===status))

        },[status])
      
  return (
    <div className='attendance-table'>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disableFuture
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider> */}
       
        <MaterialTable columns={columns} data={filteredData} title=""
        style={{ width: 1000 }}
        options={{sorting:true,
        search:true,
        searchFieldAlignment:'left',
        searchFieldVariant:'outlined',
        // filtering:true,
        selection:true,
        showTextRowsSelected:false,
        // tableLayout:'fixed',
        actionsColumnIndex: -1

}}
actions={[
  
  {
    icon:()=> <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      disableFuture
      openTo="year"
      views={['year', 'month', 'day']}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
    </LocalizationProvider>,
    isFreeAction:true,
    onClick:(event)=>console.log("clicked")
  },
  {
    icon: ()=><Select
    labelId='demo-simple-select-label'
    id='demo-simple-select'
    value={status}
    style={{width:200}}
    onChange={(e)=>setStatus(e.target.value)}
    > 
    <MenuItem value={'all'} >Filter Attendance</MenuItem>
    <MenuItem value={'present'}>Present</MenuItem>
    <MenuItem value={'absent'}>Absent</MenuItem>
</Select>,
    tooltip: 'filter attendance',
    isFreeAction: true,
    onClick: (event) => console.log("filtered")
  },
  {
    icon: ()=><Link to='attendancechart'> <Button variant="contained">View Report</Button> </Link>,
    isFreeAction:true,
    onClick:(e)=>console.log("done")
  }
  
]}
// components={{
//   Action: props => (
//     <Button
//       onClick={(event) => props.action.onClick(event, props.data)}
//       color="primary"
//       variant="contained"
//       style={{textTransform: 'none'}}
//       size="small"
//     >
//       My Button
//     </Button>
//   ),
// }}
        />
<Button style={{marginTop:10}} variant="outlined">Submit</Button>
    </div>
  )
}

export default AttendanceTable





