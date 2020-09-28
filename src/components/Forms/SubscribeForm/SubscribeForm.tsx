import React, { memo, useEffect, useMemo } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { FormValues } from './types';
import Button from 'components/Button';
import ErrorField from '../ErrorField';
import Input from '../Input';
import styles from './SubscribeForm.module.scss'




const SubscribeForm: React.FC = memo(() => {

    const action = (values: FormValues) => {
        console.log('subscribe')
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
                email: ''
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().min(1).required("Name is required"),
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <div className={styles.root}>
                    <Form className={styles.form}>
                        <div className={styles.field}>
                            <Field
                                name='email'
                                component={Input}
                                type='email'
                                placeholder='Ваша почта'
                                className={styles.input}
                            />
                            <ErrorMessage name='email' component={ErrorField} />
                        </div>
                        <Button type='submit' title='ПОДПИСАТЬСЯ' className={styles.btn} disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default SubscribeForm

