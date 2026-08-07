import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        " https://zerodha-clone-9188.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://zerodha-clone-f7l4-2nb022p1q-rohit-aadc.vercel.app/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };
  useEffect(() => {
  axios.get(" https://zerodha-clone-9188.onrender.com/verify", {
    withCredentials: true,
  })
  .then((res) => {
    if (res.data.status) {
      window.location.href = "https://zerodha-clone-f7l4-2nb022p1q-rohit-aadc.vercel.app/";
    }
  });
}, []);
  return (
    <div className="d-flex justify-content-center mt-5">
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="enter your Email"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
    </div>
  );
}
