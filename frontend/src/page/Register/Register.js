import { useState, useEffect } from "react";
import registerImg from "../../img/register.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbars from "../../components/Nanbar/Navbars";
import Footer from "../../components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import { redirect } from "react-router-dom";


export default function Register() {
  const [userName, setUserNanme] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState();

  const register = async () => {
    if (userName && email && password && confirm) {
      setLoading(true);
      const data = await axios.post("http://localhost:5000/user/register", {
        username: userName,
        email: email,
        password: password,
        confirmPassword: confirm,
      });
      setLoading(false)
      toast.success('ثبت نام شما با موفقیت انجام شد')
      setUserNanme('')
      setEmail('')
      setPassword('')
      setConfirm('')
    }else{
      toast.error('لطفا تمام فیلد ها را پر کنید')
    }
  };
  
  useEffect(() => {
    if (userName && email && password && confirm) {
      register()
    }
  }, []);
  
  return (
    <>
    <Navbars/>
      <div class="grid h-screen items-center  justify-center">
        <div class="w-auto shadow-sm h-auto rounded-md bg-white">
          <div className="p-3">
            <div className="grid lg:grid-rows-1 lg:grid-cols-2 md:grid-rows-1 md:grid-cols-2 grid-rows-1 grid-cols-1 place-items-center w-auto justify-center items-center ">
              <div className="row-end-1">
                <h1 className="text-center text-lg font-bold">ثبت نام</h1>
                <div className="grid grid-rows-1 grid-cols-1 justify-center">
                  <label className="text-xs opacity-60 mb-1 text-right font-light">
                    نام کاربری
                  </label>
                  <input
                  value={userName}
                    onChange={(e) => setUserNanme(e.target.value)}
                    type="text"
                    className="border-b-2 border-[#9E9E9E] font-light py-1 w-full lg:w-96 placeholder:text-sm focus:outline-none focus:border-b-[#616161]  duration-150 transition mb-2 focus:duration-150 "
                    placeholder="amirhossein"
                  />
                  <label className="text-xs mb-1 opacity-60 text-right font-light">
                    ایمیل
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                  value={email}
                    type="email"
                    className="border-b-2 border-[#9E9E9E] py-1 w-full lg:w-96 font-light placeholder:text-sm focus:outline-none focus:border-b-[#616161] text-lg duration-150 transition mb-2 focus:duration-150 "
                    placeholder="amirhossein@gmail.com"
                  />
                  <label className="text-xs opacity-60 mb-1 text-right font-light">
                    پسورد
                  </label>
                  <input
                  value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="border-b-2 border-[#9E9E9E] py-1 w-full lg:w-96 font-light placeholder:text-sm focus:outline-none focus:border-b-[#616161] text-lg duration-150 transition mb-2 focus:duration-150 "
                    placeholder="******"
                  />
                  <label className="text-xs opacity-60 mb-1 text-right font-light">
                    تکرار پسورد
                  </label>
                  <input
                  value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    type="password"
                    className={`border-b-2 border-[#9E9E9E] py-1 mb-8 font-light placeholder:text-sm focus:outline-none focus:border-b-[#616161] text-lg duration-150 transition focus:duration-150 `}
                    placeholder="******"
                  />
                </div>
                {loading ? (
                  <button
                  onClick={register}
                  disabled
                  className={
                    "font-light py-1 bg-[#ffa000] text-gray-500 text-sm mt-2 opacity-60 cursor-progress w-full  rounded-md"
                  }
                  >
                    <div class="text-center">
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="inline w-4 ml-2 h-4 mr-2 text-[#FFF] animate-spin dark: fill-[#ffa000]"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={register}
                    className={
                      " text-sm mt-2 font-light py-2 border-[#FFA000] bg-[#FFA000] hover:bg-yellow-500 hover:border-yellow-500 text-[#FFF] w-full hover:duration-500 duration-500  rounded-md"
                    }
                  >
                    ثبت نام
                  </button>
                )}

                <Link to={"/login"} className="no-underline  hover:underline">
                  <p className="font-light text-[12px] mt-3 opacity-80 text-center hover:opacity-100">
                    ورود به حساب کاربری
                  </p>
                </Link>
              </div>
              <img
                src={registerImg}
                className="w-96 h-96 row-span-3 lg:w-[450px] lg:h-[450px] md:w-full md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      <ToastContainer />
    </>
  );
}
