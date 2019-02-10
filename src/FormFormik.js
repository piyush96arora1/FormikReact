import React, { Component } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup'
const styles = (theme) => ({

    root: { marginLeft: 20, borderWidth: 2, borderColor: 'black', borderStyle: 'solid' }
})
export class FormFormik extends Component {
    state = { name: '' }

    onChangeHandler = (e) => {
        if (e.target.name === 'name') {
            this.setState({ name: e.target.value })
        }
    }
    render() {
        const { classes } = this.props
        const { values } = this.props
        const { errors } = this.props
        return (
            <div><Form><Grid container className={classes.root} direction='column' >

                <TextField fullWidth={false} label="User Name" name='name'></TextField>
                <TextField id="email" name="email" label="Email" onChange={values.handleChange} value={values.email}></TextField>
                {errors.email && <p>Error exists{errors.email}</p>}
                <Field component={TextField}  name="number" type="number" onChange={values.handleChange} label="Number" ></Field>
                <Button onClick={this.props.handleSubmit} color="primary" type="submit">Submit</Button>

            </Grid> </Form></div>

        )
    }

}
const FormFormikReact = withFormik({
    mapPropsToValues() {
        return {
            email: 'defaultemail@gmail.com',
            handleChange: () => { console.log("changing") }
        }
    },
    handleSubmit(values ) {
        console.log("form submited" + values.email)
        
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required("email is required")
    }),



})(withStyles(styles)(FormFormik))
export default FormFormikReact;