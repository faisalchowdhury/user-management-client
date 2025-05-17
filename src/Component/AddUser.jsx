import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const AddUser = () => {
  const { createNewUser } = useContext(AuthContext);
  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;

    // const email = form.email.value;
    // const password = form.password.value;

    const formData = new FormData(form);
    const { email, password, ...restField } = Object.fromEntries(formData);

    console.log(email, password, restField);

    createNewUser(email, password)
      .then((res) => {
        const lastLoginTime = res.user.metadata.lastSignInTime;
        const userInformation = {
          email,
          ...restField,
          lastLoginTime,
        };

        if (res.user) {
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInformation),
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User Created",
                showConfirmButton: false,
                timer: 1500,
              });
            });
        }
      })
      .catch(console.dir);
  };
  return (
    <div>
      <div className="w-4xl mx-auto space-y-5">
        <form onSubmit={handleAddUser} className="grid grid-cols-2 gap-3">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-lg">Name</legend>
            <input
              type="text"
              className="input input-field w-full "
              placeholder="Write your name"
              name="name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-lg">Phone Number</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Phone Number"
              name="phone"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-lg">Email</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Enter your valid email"
              name="email"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-lg">Password</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Enter a strong password"
              name="password"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-lg">Occupation</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Occupation"
              name="occupation"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-lg">Salary</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Salary"
              name="salary"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 col-span-2">
            <legend className="fieldset-legend text-lg">Photo Url</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Photo URL"
              name="photo_url"
            />
          </fieldset>
          <input
            type="submit"
            className="btn w-full col-span-2 bg-purple-600 border-none text-white"
            value={"Add user"}
          />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
