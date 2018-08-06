import React, { Component } from 'react';
import { connect } from 'react-redux';
import signInAction from '../../actions/payment-actions';
import { bindActionCreators } from 'redux';
import { Formik } from 'formik';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class Payment extends Component{
    constructor(props){
        super(props);
        this.state = {
            payment: {
                bank_ifsc_code: '',
                bank_account_number: '',
                amount:'',
                merchant_transaction_ref:'',
                transaction_date:'',
                payment_gateway_merchant_reference:''
            }
        };
    };

    render(){
        return(

            <Formik
            initialValues={{
               bank_ifsc_code: '',
                bank_account_number: '',
                amount:'',
                merchant_transaction_ref:'',
                transaction_date:'',
                payment_gateway_merchant_reference:''
                }}
            onSubmit={(
                values,
                { setSubmitting, setErrors }
                ) => this.props.signInAction({user: values}, this.props.history).then(() =>{
                    setSubmitting(false);
                }
                )
            }
            render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                }) => (
                    <Formik
            enableReinitialize={true}
            validationSchema={
                Yup.object().shape({
                    name: Yup.string()
                      .required("Movie name is required!"),
                    language_id: Yup.string()
                        .required("please pick a language")
                })
            }
            onSubmit={(
                values,
                { setSubmitting, setErrors, setFieldValue}
              ) => {
                debugger
                this.submitForm(values, setSubmitting, setFieldValue)
              }}
            render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                setFieldTouched,
                dirty
              }) => (
                    <Form onSubmit={handleSubmit}>
                        <Header
                            as='h1'
                            content={'Payment'}
                        />
                        <hr />
                        <Form.Group>
                            <Form.Input 
                                label="IFSC"
                                className={'form-control ' + (touched.name && (errors.name ? 'is-invalid' : 'is-valid'))}
                                type="text" 
                                name="bank_ifsc_code"  
                                placeholder="Enter IFSC" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bank_ifsc_code}
                            />
                            { errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                label="Account Number"
                                className={'form-control ' + (touched.name && (errors.name ? 'is-invalid' : 'is-valid'))}
                                type="text" 
                                name="bank_account_number"  
                                placeholder="Enter account number" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bank_account_number}
                            />
                            { errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                label="Amount"
                                className={'form-control ' + (touched.name && (errors.name ? 'is-invalid' : 'is-valid'))}
                                type="text" 
                                name="amount"  
                                placeholder="Enter amount" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.amount}
                            />
                            { errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                label="Merchant Transaction Reference"
                                className={'form-control ' + (touched.name && (errors.name ? 'is-invalid' : 'is-valid'))}
                                type="text" 
                                name="merchant_transaction_ref"  
                                placeholder="Enter details" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            { errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                label="transaction_date"
                                className={'form-control ' + (touched.name && (errors.name ? 'is-invalid' : 'is-valid'))}
                                type="text" 
                                name="transaction_date"  
                                placeholder="Enter date" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.transaction_date}
                            />
                            { errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                label="payment gateway merchant reference"
                                className={'form-control ' + (touched.name && (errors.name ? 'is-invalid' : 'is-valid'))}
                                type="text" 
                                name="payment_gateway_merchant_reference"
                                placeholder="Enter date" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.payment_gateway_merchant_reference}
                            />
                            { errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
                        </Form.Group>
                        <hr />
                        <SubmitButton isSubmitting={isSubmitting}/>                    
                        <div>
                    </div>
                    </Form>
                )}
                />
        )
    }
}

export default Payment