import { Typography, TextField,Box,Button} from '@mui/material'
import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'





const Form = () => {
    const formik = useFormik({
        initialValues:{
          firstName:"",
          lastName:"",
          phone:"",
          massage:"",
          staus:""

        },
        validationSchema:Yup.object({
          firstName:Yup.string().required("This is required"),
          lastName:Yup.string().required("This is required"),
          phone:Yup.string().required("This is required"),
          massage:Yup.string().required("This is required"),
          staus:Yup.string().required("This is required"),
        }),
        onSubmit:(values)=>{
          console.log("form submitted",values)
        }
      })
      return (
        <>
          <Typography variant='h3' mt={6} mb={6}>
          Form
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit}>
          <TextField label="First Name" type="text" variant="outlined" sx={{width:"300px", m:1}} name="firstName" onChange={formik.handleChange} error={Boolean(formik.errors.firstName)} helperText={formik.errors.firstName}/>
          <TextField label="Last Name" type="text" variant="outlined" sx={{width:"300px", m:1}} name="lastName" onChange={formik.handleChange} error={Boolean(formik.errors.lastName)} helperText={formik.errors.lastName}/>
          <TextField label="Phone Number" type="number" variant="outlined" sx={{width:"300px", m:1}} name="phone" onChange={formik.handleChange} error={Boolean(formik.errors.phone)} helperText={formik.errors.phone}/>

          
          <TextField label="Massage" type="text" variant="outlined" multiline rows={4} fullWidth sx={{ m:1}} name="massage" onChange={formik.handleChange} error={Boolean(formik.errors.massage)} helperText={formik.errors.massage}/>
          <br/>
          <span  >Gender:</span>
          <input type="radio" name='staus' value='male' onChange={formik.handleChange} error={Boolean(formik.errors.phone)} helperText={formik.errors.phone}/><label>Male</label>
          <input type="radio" name='staus' value='female' onChange={formik.handleChange} error={Boolean(formik.errors.phone)} helperText={formik.errors.phone}/><label>Female</label>
          <input type="radio" name='staus' value='other' onChange={formik.handleChange} error={Boolean(formik.errors.phone)} helperText={formik.errors.phone}/><label>Other</label><br/>

          <Button size='large' variant='contained' type='submit' sx={{m:1}}>Submit</Button>
          </Box>

    </>
      )
    }
    

export default Form
