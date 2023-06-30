import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { postImg } from "../../../api/requests";
import { useFormik } from "formik";
import { ImageSchema } from "../../../validations/image";
import './addImage.scss'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddImage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const [selectedImage, setSelectedImage] = useState(null);
  const buttonRef = useRef();
  function handleSubmit(values, actions) {
    console.log(selectedImage);
    const formData = new FormData();
    formData.append("profileImg", selectedImage);
    setOpen(true);

    postImg(formData);
    buttonRef.current.style.background = '#1976D2';
    buttonRef.current.textContent = 'Upload File';
    setSelectedImage(null);
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      profileImg: ''
    },
    validationSchema: ImageSchema,
    onSubmit: handleSubmit
  })

  return (
    <>
      <div className="multer-div">
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data" method="POST">
          <div className="multer-upload-file-div">
            <Button
              className="multer-upload-file"
              ref={buttonRef}
              variant="contained"
              component="label">
              Upload File
              <input value={formik.values.profileImg}
                onChange={(e) => {
                  buttonRef.current.style.background = 'white';
                  buttonRef.current.textContent = e.target.files[0].name;
                  formik.handleChange(e);
                  setSelectedImage(e.target.files[0])
                }}
                onBlur={formik.handleBlur}
                name="profileImg"
                type="file"
                accept="image/*"
                hidden />
            </Button>
            {formik.errors.profileImg && formik.touched.profileImg ? (
              <span style={{ color: "#bb221a", marginTop: "20px" }}>{formik.errors.profileImg}</span>
            ) : <span style={{ visibility: "hidden", marginTop: "20px" }}>error message</span>}
          </div>
          <div className="multer-add-div">
            <button
              disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true :false }
              onClick={handleClick}
              className="multer-add-btn"
              type="submit" >Add image</button>
          </div>

          {/* success message (toasted) */}
          <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Göndərildi !
            </Alert>
          </Snackbar>
        </form>
      </div>
    </>
  );
};

export default AddImage;