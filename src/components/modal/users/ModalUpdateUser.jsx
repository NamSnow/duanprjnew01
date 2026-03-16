import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { putDataUser } from "../../../services/apiServices";
import { toast } from "react-toastify";

const ModalUpdateUser = (props) => {
  const { updateModalUser, updateUserModalButton, dataUpdateUser } = props;
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (updateModalUser && dataUpdateUser) {
      setPassword(dataUpdateUser?.password || "");
      setEmail(dataUpdateUser?.email || "");
      setUsername(dataUpdateUser?.username || "");
      setRole(dataUpdateUser?.role || "");
      setPreviewImage(dataUpdateUser?.image || "");
    }
  }, [updateModalUser, dataUpdateUser]);

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
    updateUserModalButton();
  };

  const handleSubmitUpdateUser = async () => {
    if (!email && !password) {
      toast.error("Loi email va password");
      return;
    } else if (!password) {
      toast.error("Loi password");
      return;
    }

    await putDataUser(dataUpdateUser._id, username, image, role);
    updateUserModalButton();
    toast.success("Update user sucess");
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
      <Dialog size="sm" open={updateModalUser} className="p-4 max-h-[90vh]">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Edit Users
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
                disabled
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
                disabled
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
          <Button className="ml-auto" onClick={handleSubmitUpdateUser}>
            Update Product
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalUpdateUser;
