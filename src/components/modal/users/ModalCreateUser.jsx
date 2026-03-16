import axios from "axios";
import React, { useState } from "react";
import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { postDataUser } from "../../../services/apiServices";
import { toast } from "react-toastify";

const ModalCreateUser = (props) => {
  const { addUser, handleUserModalButton } = props;
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");

  const handleResetInput = () => {
    setImage("");
    setEmail("");
    setUsername("");
    setPassword("");
    setRole("");
    setPreviewImage("");
  };

  const handleCloseModal = () => {
    handleResetInput();
    handleUserModalButton();
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const handleSubmitCreateUser = async () => {
    const isValidateEmail = validateEmail(email);

    if (!isValidateEmail) {
      toast.error("Error email");
      return;
    }

    if (!password) {
      toast.error("Error password");
      return;
    }

    await postDataUser(username, email, password, image, role);
    handleUserModalButton();
    toast.success("Add user sucess");
    await props.fetchDataUsers();
    // handleResetInput();
    handleResetInput();
  };

  const handleImagePreview = (event) => {
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  };

  return (
    <>
      <Dialog size="sm" open={addUser} className="p-4 max-h-[90vh]">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add Users
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleCloseModal}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6 max-h-[65vh]">
          <div className="flex gap-4">
            <div className="relative flex w-full">
              <Input
                type="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>

            <div className="w-full">
              <Input
                type="text"
                label="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Input
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>

            <div className="w-full">
              <Select
                label="Role"
                value={role}
                onChange={(e) => setRole(e)}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              >
                <Option value="ADMIN">Admin</Option>
                <Option value="USER">User</Option>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="inputField">
                <Button
                  type="button"
                  variant="gradient"
                  className="inline-flex items-center gap-3 w-fit"
                  size="sm"
                >
                  <PhotoIcon strokeWidth={2} className="h-4 w-4" />
                  Add New Image
                </Button>
              </label>

              <input
                type="file"
                id="inputField"
                onChange={(event) => handleImagePreview(event)}
              />
            </div>

            <div className="w-full h-20 text-center">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt=""
                  className="object-contain w-full h-full"
                />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleSubmitCreateUser}>
            Add Product
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalCreateUser;
