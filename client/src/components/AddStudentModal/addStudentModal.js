import React, { useState, useEffect } from "react";
import useStyles from "./style";
import {
  Modal,
  Button,
  FormControlLabel,
  TextField,
  Box,
  Checkbox,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// send data to redux
import { useDispatch, useSelector } from "react-redux";
import {
  addStudentDetail,
  updateStudentDetail,
} from "../redux/actions/student";

const AddProductModal = ({ currentId, open, handleClose, setReload }) => {
  const classes = useStyles();
  const userdata = JSON.parse(localStorage.getItem("profile"));
  const [subjects, setSubject] = useState({
    SUB_1: false,
    SUB_2: false,
    SUB_3: false,
    SUB_4: false,
    SUB_5: false,
    SUB_6: false,
  });

  const [productData, setProductData] = useState({
    name: "",
    rollno: "",
    subject: [],
    branch: "",
  });

  const handleChangeSubject = (event) => {
    setSubject({ ...subjects, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    if (currentId === null) {
      setProductData({ name: "", rollno: "", subject: [], branch: "" });
      setSubject({
        SUB_1: false,
        SUB_2: false,
        SUB_3: false,
        SUB_4: false,
        SUB_5: false,
        SUB_6: false,
      });
    }
  }, [currentId]);

  const dispatch = useDispatch();

  const product = useSelector((state) =>
    currentId ? state.products.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (product) {
      product.subject.map((itm) => {
        setSubject((subjects[itm] = true));
      });
    }
  }, [currentId]);

  useEffect(() => {
    if (product) setProductData(product);

    if (product) {
      product.subject.map((itm) => {
        setSubject({ ...subjects, [itm]: true });
      });
    }
  }, [product]);

  //  form data
  const handleSubmit = (e) => {
    setReload(true);
    productData["subject"] = [];
    const final_subject = Object.entries(subjects).map((itm) => {
      if (itm[1] === true) {
        productData["subject"].push(itm[0]);
      }
    });

    e.preventDefault();
    if (currentId) {
      dispatch(updateStudentDetail(currentId, productData));
    } else {
      dispatch(addStudentDetail(productData));
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              {" "}
              {currentId === null ? "Add" : "Update"} Product
            </h2>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.txtfield}
                required
                value={productData.name}
                onChange={(e) =>
                  setProductData({ ...productData, name: e.target.value })
                }
                label="Student Name"
              />

              <TextField
                className={classes.txtfield}
                required
                label="Roll No"
                value={productData.rollno}
                onChange={(e) =>
                  setProductData({ ...productData, rollno: e.target.value })
                }
              />

              <Box>
                <p style={{ marginTop: 25, marginBottom: 10, color: "gray" }}>
                  Select subjets
                </p>
                {Object.entries(subjects).map((item, idx) => (
                  <FormControlLabel
                    key={idx}
                    control={
                      <Checkbox
                        checked={item[1]}
                        onChange={handleChangeSubject}
                        name={item[0]}
                        color="primary"
                      />
                    }
                    label={item[0]}
                  />
                ))}
              </Box>

              <TextField
                className={classes.txtfield}
                required
                label="Branch"
                value={productData.branch}
                onChange={(e) =>
                  setProductData({ ...productData, branch: e.target.value })
                }
              />

              <Box style={{ marginTop: 38 }}>
                <Button
                  className={classes.btnstyle}
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  {currentId === null ? "Add" : "Update"}
                </Button>
                <Button
                  style={{ marginLeft: 20 }}
                  className={classes.btnstyle}
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddProductModal;
