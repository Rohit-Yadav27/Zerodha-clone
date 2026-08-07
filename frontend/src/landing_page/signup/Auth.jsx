import { useState } from "react";
import { toast } from "react-toastify";
import { Link,} from "react-router-dom";
import axios from "axios";

export default function Auth() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
const { email, password, username } = inputValue;
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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        " https://zerodha-clone-9188.onrender.com/signup",
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

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="username"
            name="username"
            placeholder="enter your username"
            value={username}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
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
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
}
