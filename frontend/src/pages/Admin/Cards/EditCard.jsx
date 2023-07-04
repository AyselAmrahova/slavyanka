import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik'
import { putCard, getCardByID } from '../../../api/Cards';
import { Input } from 'antd';
import * as Yup from "yup";
import './card.scss'
import TextArea from 'antd/es/input/TextArea';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function EditCard() {
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
    const [card, setCard] = useState({});
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        const datas = await getCardByID(id);
        setCard(datas);
        setLoading(false);
        formik.setValues({
            title: datas.title,
            desc: datas.desc,
            imageURL: datas.imageURL,
        });
    }
    useEffect(() => {
        fetchData();
    }, [id]);

    const handleSubmit = async (values, actions) => {
        putCard(id, values);
        setCard(values);
        navigate("/admin/cards");
        actions.resetForm();
    };
    const ServiceSchema = Yup.object().shape({
        title: Yup.string().required(),
        desc: Yup.string().required(),
        imageURL: Yup.string().required()
    });
    const formik = useFormik({
        initialValues: {
            title: card.title,
            desc: card.desc,
            imageURL: card.imageURL
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
                            <p>Kart redaktə et</p>
                        </div>
                        <div style={{ width: "90%", margin: "0 auto" }}>
                            <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Input
                                    style={{ padding: "10px" }}
                                    placeholder='Kart başlığı'
                                    type="text"
                                    name="title"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.title}
                                />
                                {formik.errors.title && formik.touched.title ? (
                                    <span style={{ color: "#bb221a", marginTop: "15px", marginBottom: "15px" }}>{formik.errors.title}</span>
                                ) : <span style={{ visibility: "hidden", marginTop: "15px", marginBottom: "15px" }}>error message</span>}
                            </div>
                            <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Input
                                    style={{ padding: "10px" }}
                                    placeholder='Kart şəkil url'
                                    type="text"
                                    name="imageURL"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.imageURL}
                                />
                                {formik.errors.imageURL && formik.touched.imageURL ? (
                                    <span style={{ color: "#bb221a", marginTop: "15px", marginBottom: "15px" }}>{formik.errors.imageURL}</span>
                                ) : <span style={{ visibility: "hidden", marginTop: "15px", marginBottom: "15px" }}>error message</span>}
                            </div>
                            <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <TextArea
                                    style={{ padding: "10px" }}
                                    placeholder='Kart təsviri'
                                    type="text"
                                    name="desc"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.desc}
                                    rows={4}
                                />
                                {formik.errors.desc && formik.touched.desc ? (
                                    <span style={{ color: "#bb221a", marginTop: "15px", marginBottom: "15px" }}>{formik.errors.desc}</span>
                                ) : <span style={{ visibility: "hidden", marginTop: "15px", marginBottom: "15px" }}>error message</span>}
                            </div>
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
