import React, { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import TaskTable from "../components/TaskTable";
import FormModal from "../components/FormModal";
import { useSelector } from "react-redux";

const Crud = () => {
  const { isStatus } = useSelector((store) => store.themeReducer);
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className={`vh-100 ${isStatus ? "bg-dark" : "bg-light"}`}>
      <Container>
        <Stack className=" align-items-end pt-5 mb-3">
          <Button onClick={handleOpen}>Yeni Görev Ekle</Button>
        </Stack>
        <FormModal show={show} handleClose={handleClose} />

        <TaskTable />
      </Container>
    </div>
  );
};

export default Crud;
