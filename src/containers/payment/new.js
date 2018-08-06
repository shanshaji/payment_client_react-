import React, { Component } from '../../../../../../.cache/typescript/2.9/node_modules/@types/react';
import { connect } from '../../../../../../.cache/typescript/2.9/node_modules/@types/react-redux';
import signInAction from '../../actions/payment-actions';
import { bindActionCreators } from '../../../../../../.cache/typescript/2.9/node_modules/redux';
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
            // validate={values => {
            //     // same as above, but feel free to move this into a class method now.
            //     let errors = {};
            //     if (!values.email) {
            //         errors.email = 'Enter email address';
            //     } else if (
            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            //     ) {
            //         errors.email = 'Invalid email address';
            //     }
            //     if (!values.password) {
            //         errors.password = 'Enter password';
            //     }
            //     return errors;
            //     }}
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
            initialValues={{name: (this.props.movie ? this.props.movie.name : ''),
                            language_id: (this.props.movie ? this.props.movie.language.id : ''),
                            format_id: (this.props.movie && this.props.movie.format && this.props.movie.format.id ? this.props.movie.format.id : ''),
                            certificate_id: (this.props.movie && this.props.movie.certificate && this.props.movie.certificate.id? this.props.movie.certificate.id : ''),
                            index_image:  (this.props.movie && this.props.movie.index_image ? this.props.movie.index_image : ''),
            }}
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
                                name="name"  
                                placeholder="Enter IFSC" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            { errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
                            {/* <Dropzone onDrop={this.onDrop.bind(this)} 
                            accept=".jpeg,.png,.jpg"
                            className='dropzone dropzone-style'
                            activeClassName='active-dropzone'
                            acceptClassName='active-dropzone'
                            multiple={false}
                                >
                                <figure>
                                    <img className="img image-style" src={this.state.files[0]? this.state.files[0].preview : this.state.data.image ? this.state.data.image : "https://s3.ap-south-1.amazonaws.com/distributer-app/avatar.png" } />
                                    <figcaption>
                                    <div>
                                        click to select image
                                    </div>
                                    </figcaption>
                                </figure>
                            </Dropzone> */}
                        </Form.Group>
                        <Form.Group>
                            <InputSelect
                                label="Language"
                                value={values.language_id}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                options={this.state.languages}
                                name='language_id'
                                placeholder='Select language'
                            />
                            { errors.language_id && touched.language_id &&  <div style={{ color: 'red', marginTop: '.5rem' }}>
                                {errors.language_id}
                            </div>}
                            <InputSelect
                                label="Format"
                                value={values.format_id}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.format_id}
                                touched={touched.format_id}
                                options={this.state.formats}
                                name='format_id'
                                placeholder='Select format'
                            />
                            <InputSelect
                                label="Certificate"
                                value={values.certificate_id}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.certificate_id}
                                touched={touched.certificate_id}
                                options={this.state.certificates}
                                name='certificate_id'
                                placeholder='Select certificates'
                            />
                        </Form.Group>  
                        <hr />
                        <SubmitButton isSubmitting={isSubmitting}/>                    
                        <div>
                    </div>
                    </Form>
                )}
                />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signInAction }, dispatch);
}

function mapStateToProps(state){
    return {errorMessage: state.auth.error}
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);