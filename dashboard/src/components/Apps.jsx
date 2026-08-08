import axios from "axios";

export default function Apps() {
  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        " https://zerodha-clone-9188.onrender.com/logout",
        {},
        { withCredentials: true },
      );

      if (data.success) {
        window.location.href = "https://zerodha-clone-delta-puce.vercel.app/login";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="home_page">
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </>
  );
}
