import React, { memo, useEffect, useMemo } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import styles from './LoginForm.module.scss'
import { FormValues } from './types';
import Button from 'components/Button';
import ErrorField from '../ErrorField';
import Input from '../Input';




const LoginForm: React.FC = memo(() => {

    const action = (values: FormValues) => {
        console.log('login')
    }

    const mountState = useMemo(
        () => ({
            mounted: false,
        }),
        []
    )

    const submit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await action(values)
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
            }
        }
    }

    useEffect(
        () => {
            mountState.mounted = true;
            return () => {
                mountState.mounted = false;
            }
        },
        [mountState]
    )

    return <div>
        <Formik
            initialValues={{
                name: '', email: '', password: ''
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().min(1).required("Name is required"),
                email: Yup.string().email("Email not valid").required("Email is required"),
                password: Yup.string().min(3).max(20).required("Password is required"),
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <div className={styles.root}>
                    <Form className={styles.form}>
                        <div className={styles.field}>
                            <Field
                                name='name'
                                component={Input}
                                label="Имя"
                                type='text'
                            />
                            <ErrorMessage name='name' component={ErrorField} />
                        </div>
                        <div className={styles.field}>
                            <Field
                                name='email'
                                component={Input}
                                label="Email"
                                type='email'
                            />
                            <ErrorMessage name='email' component={ErrorField} />
                        </div>
                        <div className={styles.field}>
                            <Field
                                name='password'
                                component={Input}
                                label="Password"
                                type='password'
                            />
                            <ErrorMessage name='password' component={ErrorField} />
                        </div>

                        <Button type='submit' title='Create' disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default LoginForm

