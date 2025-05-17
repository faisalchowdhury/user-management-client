import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const UserList = () => {
  const data = useLoaderData();
  const [users, setUsers] = useState(data);
  const { deleteFromFirebase, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeleteUser = (email) => {
    if (user != null && email === user.email) {
      Swal.fire({
        title: "Are you sure you want to delete ?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Delete",
        denyButtonText: `Don't Delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          deleteFromFirebase(email)
            ?.then(() => {
              alert("user deleted");

              fetch(`http://localhost:3000/delete-user/${user.email}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  const newUsers = users.filter((user) => user.email != email);
                  setUsers(newUsers);

                  console.log(data);
                });
            })
            ?.catch((err) => console.log(err));
          Swal.fire("Deleted!");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You cant Delete Others profile",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  /////////////////////////

  const handleUserUpdate = (email) => {
    if (!user) {
      alert("You must need to login");
    }

    if (email != user.email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You only can edit Your Profile",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      navigate(`/update/${email}`);
    }
  };
  return (
    <div>
      <div className="overflow-x-auto my-10">
        <div className="w-9/10 mx-auto">
          <Link
            to={"/add-user"}
            className="btn btn-sm bg-purple-700 text-white">
            Add User
          </Link>
        </div>
        <table className="table w-9/10 mx-auto my-5">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {users.map((user, id) => {
              return (
                <tr key={user._id}>
                  <th>{id + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photo_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">
                          Last Login : {user.lastLoginTime}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.occupation}</td>
                  <td>{user.salary}$</td>
                  <th>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleUserUpdate(user.email)}
                        className="btn border-none hover:bg-slate-200 rounded-md">
                        {" "}
                        <FaEdit color="purple" size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.email)}
                        className="btn border-none hover:bg-slate-200 rounded-md">
                        <MdDelete color="red" size={16} />
                      </button>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
