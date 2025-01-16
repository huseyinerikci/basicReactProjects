import { useState } from "react";
import { Button, Form, Modal, Stack } from "react-bootstrap";
import { inputs } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/slices/crudSlice";

const FormModal = ({ show, handleClose, task }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //formdata class ından örnek almak
    const formData = new FormData(e.target);

    //.entries() => diziye çevirir
    //Object.fromEntries() => diziyi objeye çevirir

    //inputlardaki verilerden nesne oluşturma
    const taskData = Object.fromEntries(formData.entries());

    if (task) {
      dispatch(updateTask({ id: task.id, ...taskData }));
    } else {
      dispatch(addTask(taskData));
    }

    handleClose();
  };
  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="text-black"
    >
      <Modal.Header closeButton>
        <Modal.Title>{task ? "Görevi Düzenle" : "Görev Ekle"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {inputs.map((i) => (
            <Form.Group className="mb-3" controlId={i.name}>
              <Form.Label>{i.label}</Form.Label>
              <Form.Control
                name={i.name}
                type={i.type}
                defaultValue={task && task[i.name]}
              />
            </Form.Group>
          ))}

          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Vazgeç
            </Button>
            <Button type="submit" variant="primary">
              {task ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
