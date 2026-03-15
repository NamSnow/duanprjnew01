import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { deleteDataUsers } from "../../../services/apiServices";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
  const { deleteUser, dataDelete } = props;

  const modalDeleteUserSubmit = async () => {
    console.log(dataDelete._id);
    await deleteDataUsers(dataDelete._id);
    props.deleteUserModalButton();
    toast.success("Delete user sucess");
    await props.fetchDataUsers();
  };

  return (
    <>
      <Dialog open={deleteUser} handler={props.deleteUserModalButton}>
        <DialogHeader>Notification.</DialogHeader>
        <DialogBody>
          You delete email: {dataDelete?.email}, name: {dataDelete?.username}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={props.deleteUserModalButton}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={modalDeleteUserSubmit}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalDeleteUser;
