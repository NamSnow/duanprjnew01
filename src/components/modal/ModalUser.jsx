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

const ModalUser = (props) => {
  const { addUser, addUserButton, closeUserButton } = props;

  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <>
      <Dialog
        size="sm"
        open={addUser}
        handler={addUserButton}
        className="p-4 max-h-[90vh]"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add Users
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={closeUserButton}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6 max-h-[65vh]">
          <div className="flex gap-4">
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
              <Button
                size="sm"
                color={email ? "gray" : "blue-gray"}
                disabled={!email}
                className="!absolute right-1 top-1 rounded"
              >
                Invite
              </Button>
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
                onChange={(e) => setRole(e.target.value)}
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
            <Button
              variant="gradient"
              className="inline-flex items-center gap-3 w-fit"
              size="sm"
            >
              <PhotoIcon strokeWidth={2} className="h-4 w-4" /> Add New Image
            </Button>

            <div className="w-full h-20">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E0BAQFEAKvQAZ8Zmg/company-logo_200_200/B4EZsOHFSBJ0AQ-/0/1765468296836/img_logo?e=2147483647&v=beta&t=shYVYg3atXalYcBkQoeU4p0Ih2_wf5HwRFWiLTemLt8"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={addUserButton}>
            Add Product
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalUser;
