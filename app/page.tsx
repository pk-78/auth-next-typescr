"use client";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



export default function Home() {

const router= useRouter();
const logoutHandler = async()=>{
  
  try {
    const res = await axios.get("/api/users/logout");
    router.push("/login");
    toast.success("logout successfully")
  } catch (error:any) {
    toast.error(error.response.data.message)
  }
}
  return (
    <div className="bg-blue-500">
      hey its pk78 here
      <button onClick={logoutHandler} className="bg-zinc-800 mx-5 px-6 py-1 rounded-md text-white"> logout</button>
    </div>
  );
}
