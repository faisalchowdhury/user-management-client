import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UserList = () => {
  return (
    <div>
      <div className="overflow-x-auto my-10">
        <div className="w-9/10 mx-auto">
          <button className="btn btn-sm bg-purple-700 text-white">
            Add User
          </button>
        </div>
        <table className="table w-9/10 mx-auto my-5">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>26000$</td>
              <th>
                <div className="flex gap-2">
                  <button className="btn border-none hover:bg-slate-200 rounded-md">
                    {" "}
                    <FaEdit color="purple" size={16} />
                  </button>
                  <button className="btn border-none hover:bg-slate-200 rounded-md">
                    <MdDelete color="red" size={16} />
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
