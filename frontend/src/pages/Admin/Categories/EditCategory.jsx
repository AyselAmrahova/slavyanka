import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik'
import { putCategory, getCategoryByID } from '../../../api/Category';
import { Input } from 'antd';
import * as Yup from "yup";
import './categories.scss'

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function EditCategory() {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const navigate = useNavigate();
    const { id } = useParams();
    const [category, setCategory] = useState({});
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        const datas = await getCategoryByID(id);
        setCategory(datas);
        setLoading(false);
        formik.setValues({
            name: datas.name,
        });
    }
    useEffect(() => {
        fetchData();
    }, [id]);

    const handleSubmit = async (values, actions) => {
        putCategory(id, values);
        setCategory(values);
        navigate("/admin/categories");
        actions.resetForm();
    };
    const ServiceSchema = Yup.object().shape({
        name: Yup.string().required()
    });
    const formik = useFormik({
        initialValues: {
            name: category.name
        },
        onSubmit: handleSubmit,
        validationSchema: ServiceSchema,
    });


    return (
        <>
            {loading ? <div style={{ marginTop: "150px", textAlign: "center" }}><span className="loader"></span></div> : (
                <>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='admin-p'>
                            <p>Category add</p>
                        </div>
                        <div style={{
                            width: "40%",
                            margin: "0 auto"
                        }}>
                            <Input
                                style={{
                                    padding: "10px"
                                }}
                                placeholder='name'
                                type="text"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.errors.name && formik.touched.name ? (
                                <span style={{ color: "#bb221a", marginBottom: "10px" }}>{formik.errors.name}</span>
                            ) : <span style={{ visibility: "hidden", marginBottom: "10px" }}>error message</span>}

                            <div className='product-send'>
                                <button
                                    disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
                                    type="submit"
                                    style={{ cursor: "pointer", marginTop: "20px" }}
                                    className='input-div-Button'
                                    variant="contained"
                                    onClick={handleClick}
                                >Göndər</button>

                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                        Əlavə olundu !
                                    </Alert>
                                </Snackbar>
                            </div>
                        </div>
                    </form>
                </>
            )}
        </>
    )
}
