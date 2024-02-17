import React from "react";

function AdminUser() {
  return (
    <div className="z-30">
      <div className="pb-10">
        <h4 className="text-[26px] font-bold">Users</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[18px]">Sl</th>
              <th className="text-[18px]">Name</th>
              <th className="text-[18px]">Email</th>
              <th className="text-[18px]">Role</th>
              <th className="text-[18px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td
                  onClick={() => makeAdmin(item?._id)}
                  className="cursor-pointer"
                >
                  {item?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <FaUsers className="text-[22px]" />
                  )}
                </td>
                <td
                  onClick={() => deleteUser(item?._id)}
                  className="text-[15px] w-[65px] h-[40px] flex items-center justify-center text-white bg-primary rounded-md cursor-pointer"
                >
                  Delete
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUser;
