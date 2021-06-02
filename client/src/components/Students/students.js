import React, { useEffect, useState } from "react";
import useStyles from "./style";
import { Box, Card, Button, Grid, CircularProgress } from "@material-ui/core";
import AddProductModal from "../AddStudentModal/addStudentModal";

import {
  getStudentDetail,
  deleteStudentDetail,
} from "../redux/actions/student";

import { useDispatch, useSelector } from "react-redux";

const AddStudent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const deldispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    dispatch(getStudentDetail());
  }, [currentId, reload, open, dispatch]);


  const products = useSelector((state) => state.products);

  //  add product
  const handleOpen = () => {
    setCurrentId(null);
    setOpen(true);
    setReload(false);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentId(null);
  };

  const handleOpenEdit = () => {
    setOpen(true);
    setReload(false);
  };

  const handleEdit = (id) => {
    setCurrentId(id);
  };

  const handleDelete = (id) => {
    if (id) {
      deldispatch(deleteStudentDetail(id));
    }
  };

  return (
    <Box style={{ marginTop: 100 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <Button
              className={classes.btnstyle}
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Add Student
            </Button>
            <AddProductModal
              currentId={currentId}
              open={open}
              handleClose={handleClose}
              setReload={setReload}
            />
          </Box>
        </Grid>
      </Grid>

      <Box>
        {!products.length ? (
          <CircularProgress />
        ) : (
          <Grid container justify="flex-start" spacing={3}>
            {products.map((item) => (
              <Grid key={item._id} item={true} xs={12} sm={4}>
                <Card className={classes.card} style={{ margin: 24 }}>
                  <Box
                    style={{ padding: 20, borderTop: "1px solid lightgray" }}
                  >
                    <p style={{ marginBottom: 10 }}>
                      <b>Student Name: </b>
                      {item.name}
                    </p>
                    <p>
                      <b>Subject: </b>
                    </p>
                    <ul style={{ marginLeft: 38, marginTop: 10 }}>
                      {item.subject.map((itm) => (
                        <li key={itm}>{itm}</li>
                      ))}
                    </ul>

                    <p style={{ marginTop: 10 }}>
                      <b>Branch: </b>
                      {item.branch}
                    </p>
                    <p style={{ marginTop: 10 }}>
                      <b>Roll No: </b>
                      {item.rollno}
                    </p>
                  </Box>

                  <Box style={{ padding: 20, paddingTop: 0 }}>
                    <Button
                      className={classes.btnstyle}
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        handleEdit(item._id);
                        handleOpenEdit();
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      className={classes.btnstyle}
                      style={{ marginLeft: 20 }}
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default AddStudent;
