"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import authbg2 from "@/public/authbg2.svg";
import logo from "@/public/logo.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import google from "@/public/google.svg";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "@/slice/auth";
import { AppDispatch } from "@/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const router = useRouter();
  const [pvisible, setPVisible] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null,
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { success, loading, error }: any = useSelector(
    (state: any) => state.user
  );

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "avatar" && files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormdata((prev: any) => ({
          ...prev,
          avatar: reader.result as string,
        }));
        setSelectedImage(reader.result as string);
      };
    } else {
      setFormdata((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormdata((prev: any) => ({
          ...prev,
          avatar: reader.result as string,
        }));
        setSelectedImage(reader.result as string);
      };
    }
  };

  const handleSignup = () => {
    if (
      !formdata.name ||
      !formdata.email ||
      !formdata.password ||
      !formdata.avatar
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    const formDataWithFile = new FormData();
    formDataWithFile.append("name", formdata.name);
    formDataWithFile.append("email", formdata.email);
    formDataWithFile.append("password", formdata.password);
    formDataWithFile.append("avatar", formdata.avatar);

    dispatch(RegisterUser(formDataWithFile))
      .unwrap()
      .then(() => {
        router.push("/");
        toast.success("User registered successfully!!");
      })
      .catch((error) => {
        setFormdata({
          name: "",
          email: "",
          password: "",
          avatar: null,
        });
        toast.error(error.message);
      });
  };

  return (
    <div className="flex gap-4 justify-between p-6">
      <div className="hidden sm:flex w-1/2 max-h-screen overflow-y-auto">
        <Image
          src={authbg2}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full sm:w-1/2 flex justify-center max-h-screen overflow-y-auto hide-horizontal-scrollbar">
        <div className="flex flex-col gap-4 w-4/5 py-6">
          <Image src={logo} alt="" className="w-1/2" />
          <div className="flex flex-col gap-2">
            <span className="text-black text-base sm:text-lg font-medium">
              Sign Up
            </span>
            <span className="text-sm sm:text-base text-[#4D4D4D] font-medium">
              Fill your information below
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Name*
            </label>
            <input
              className="border w-full p-2 border-[#C9C9C9] rounded-lg text-black text-base focus:outline-none font-medium"
              placeholder="Enter Your fullname"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Email*
            </label>
            <input
              className="border w-full p-2 border-[#C9C9C9] rounded-lg text-black text-base focus:outline-none font-medium"
              placeholder="Enter Email Address"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Create Password*
            </label>
            <div className="border items-center flex justify-between border-[#C9C9C9] rounded-lg">
              <input
                className="w-full p-2 rounded-lg text-black text-base focus:outline-none font-medium"
                placeholder="Enter password"
                name="password"
                type={pvisible ? "text" : "password"}
                onChange={handleInputChange}
              />
              <div
                className="px-2 cursor-pointer text-[#C9C9C9]"
                onClick={() => setPVisible(!pvisible)}
              >
                {pvisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Avatar*
            </label>
            <div
              className="border w-full p-2 border-[#C9C9C9] rounded-lg text-black text-base focus:outline-none font-medium"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Avatar Preview"
                  className="w-full h-32 object-cover rounded-lg"
                />
              ) : (
                <div className="upload-text">
                  <input
                    type="file"
                    accept="image/*"
                    name="avatar"
                    onChange={handleInputChange}
                    id="fileInput"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="fileInput">
                    Drag & Drop or Click to Upload
                  </label>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleSignup}
            className="bg-[#1C5356] rounded-lg flex items-center justify-center text-white font-semibold text-base p-2"
          >
            {loading ? <span>Signing up...</span> : <span>Sign Up</span>}
          </button>
          <div className="cursor-pointer border border-[#C9C9C9] rounded-lg p-2 flex justify-center items-center gap-2">
            <Image src={google} alt="" className="" width={20} />
            <span className="text-black font-medium text-base">
              Sign up With Google
            </span>
          </div>
          <span
            onClick={() => router.push("/login")}
            className="text-base w-full justify-center flex gap-2"
          >
            Already have an account?
            <span className="text-[#1C5356] underline font-semibold cursor-pointer">
              Sign in
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
