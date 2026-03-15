import axios from "axios";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import ModalCreateUser from "../modal/users/ModalCreateUser";
import { getDataUsers } from "../../services/apiServices";
import { postDataUser } from "../../services/apiServices";
import ModalDeleteUser from "../modal/users/ModalDeleteUser";
import ModalUpdateUser from "../modal/users/ModalUpdateUser";

const HomeAdmin = (props) => {
  const [users, setUsers] = useState([]);
  const [addUser, setAddUser] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [dataDelete, setDataDelete] = useState([]);
  const [updateModalUser, setUpdateModalUser] = useState(false);
  const [dataUpdateUser, setDataUpdateUser] = useState([]);

  const handleUserModalButton = () => {
    setAddUser(!addUser);
  };

  const deleteUserModalButton = (user) => {
    setDeleteUser(!deleteUser);
    setDataDelete(user);
  };

  const updateUserModalButton = (user) => {
    setUpdateModalUser(!updateModalUser);
    setDataUpdateUser(user);
    console.log(user);
  };

  const TABLE_HEAD = ["Image", "Email", "Username", "Role", ""];

  // const TABLE_ROWS = users.map((user) => ({
  //   img: user.image,
  //   name: user.name,
  //   email: user.email,
  //   username: user.username,
  //   role: user.role,
  // }));

  useEffect(() => {
    fetchDataUsers();
  }, []);

  const fetchDataUsers = async () => {
    let data = await getDataUsers();
    setUsers(data);
  };

  // const data = {
  //   image: image,
  //   email: email,
  //   username: username,
  //   role: role,
  // };

  return (
    <div>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                TABLE USERS
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />
                Download
              </Button>
              <Button
                variant="gradient"
                className="flex items-center gap-3"
                size="sm"
                onClick={() => handleUserModalButton()}
              >
                <PlusCircleIcon strokeWidth={2} className="h-4 w-4" /> Add
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={user.id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={user.image}
                          alt={user.username}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user.email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user.username}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user.role}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton
                          variant="text"
                          onClick={() => updateUserModalButton(user)}
                        >
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete User">
                        <IconButton
                          variant="text"
                          onClick={() => deleteUserModalButton(user)}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>

      <ModalCreateUser
        addUser={addUser}
        handleUserModalButton={handleUserModalButton}
        fetchDataUsers={fetchDataUsers}
      />

      <ModalDeleteUser
        deleteUser={deleteUser}
        fetchDataUsers={fetchDataUsers}
        deleteUserModalButton={deleteUserModalButton}
        dataDelete={dataDelete}
      />

      <ModalUpdateUser
        updateModalUser={updateModalUser}
        dataUpdateUser={dataUpdateUser}
        updateUserModalButton={updateUserModalButton}
        fetchDataUsers={fetchDataUsers}
      />
    </div>
  );
};

export default HomeAdmin;
