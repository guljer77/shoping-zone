import React from "react";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div className="py-10">
      <Container>
        <div className="pb-5">
          <h4 className="text-[24px] font-semibold">Total 5 Items</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-[18px] font-semibold">Sl</th>
                <th className="text-[18px] font-semibold">Image</th>
                <th className="text-[18px] font-semibold">Product Name</th>
                <th className="text-[18px] font-semibold">Price</th>
                <th className="text-[18px] font-semibold">Quantity</th>
                <th className="text-[18px] font-semibold">Total Price</th>
                <th className="text-[18px] font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>1</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            </tbody>
            {/* foot */}
          </table>
        </div>
        <div className="mt-10 lg:flex justify-end">
          <div className="lg:w-2/4 w-full bg-red-100 p-5 rounded-md">
            <div className="w-full">
              <h4 className="text-[18px] font-semibold pb-5">Total 5 Items</h4>
              <div className="flex items-center justify-between">
                <h4 className="text-[16px] font-semibold">SubTotal:</h4>
                <h4>$ 45.00</h4>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-[16px] font-semibold">Shipping Cost:</h4>
                <h4>$ 05.00</h4>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-[16px] font-semibold">Vat:</h4>
                <h4>$ 00.00</h4>
              </div>
              <hr className="border border-black my-3" />
              <div className="flex items-center justify-between">
                <h4 className="text-[16px] font-semibold">Total Price</h4>
                <h4>$ 50.00</h4>
              </div>
              <div className="mt-5">
                <Link className="w-full py-2 rounded-md text-white bg-rose-600 block text-center">Payment Now</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartPage;
