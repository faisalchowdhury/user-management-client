import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const { email } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/update/${email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const formField = Object.fromEntries(formData);

    fetch(`http://localhost:3000/update/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formField),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Profile Update Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (data.modifiedCount === 0) {
          alert("You havent Change any data");
        }
        console.log(data);
      });
  };
  return (
    <div>
      <div className="w-4xl mx-auto space-y-5">
        <form onSubmit={handleUpdateUser} className="grid grid-cols-2 gap-3">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-lg">Name</legend>
            <input
              type="text"
              className="input input-field w-full "
              placeholder="Write your name"
              name="name"
              defaultValue={userData.name}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-lg">Phone Number</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Phone Number"
              name="phone"
              defaultValue={userData.phone}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-lg">Occupation</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Occupation"
              name="occupation"
              defaultValue={userData.occupation}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-lg">Salary</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Salary"
              name="salary"
              defaultValue={userData.salary}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 col-span-2">
            <legend className="fieldset-legend text-lg">Photo Url</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Photo URL"
              name="photo_url"
              defaultValue={userData.photo_url}
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

export default UpdateUser;
