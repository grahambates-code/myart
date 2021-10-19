import React, { useState, useContext } from 'react';
import {Box, Button, Fade, TextField} from '@mui/material';
import { Typography } from '@mui/material';
import ResetPasswordForm from './components/reset-password-form/ChangePasswordForm';
import * as Yup from "yup";
import {Formik} from "formik";

const ResetPasswordPage = () => {

    const [email, setEmail] = useState('');

    return (
        <Fade in={true} timeout={750}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box marginTop={5}></Box>
                <Box marginTop={8}>

                    <Typography variant="h2" align="center">
                        Reset Your Password
                    </Typography>

                    {!email && <Formik
                        initialValues={{
                            email : '',
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email(),
                        })}
                        onSubmit={(values) => {
                            setEmail(values.email);
                          //  handleResetPassword(values);
                        }}
                    >
                        {({
                              errors,
                              values,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isValid,
                          }) => (
                            <form onSubmit={handleSubmit}>

                                <Box width="100%" maxWidth="400px" margin="auto">

                                    <Box marginTop={3}>

                                        <TextField
                                            type="text"
                                            variant="outlined"
                                            placeholder="Enter your email"
                                            fullWidth={true}
                                            value={values.email}
                                            onChange={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                        />


                                    </Box>

                                    <Box marginTop={11}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            fullWidth={true}
                                        >
                                            Login
                                        </Button>
                                    </Box>
                                </Box>


                            </form>
                        )}
                    </Formik> }

                </Box>
                {email && <Box marginTop={5} width="100%">
                    <ResetPasswordForm user={email} />
                </Box> }
            </Box>
        </Fade>
    );
};

export default ResetPasswordPage;
