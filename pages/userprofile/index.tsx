import CustomeNavbar from "@/components/ui/CustomeNavbar";
import Footer from "@/components/ui/Footer";
import Label from "@/components/ui/Label";
import PageDetails from "@/components/ui/PageDetails";
import React, { useEffect, useState } from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import profile from "@/public/profile.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { updateUser } from "@/slice/auth";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  avatar: string | null;
}

const Index = () => {
  const { userData } = useSelector((state: any) => state.user);
  const [formdata, setFormdata] = useState<any>({
    name: "",
    email: "",
    avatar: null,
  });

  useEffect(() => {
    if (userData) {
      setFormdata({
        name: userData?.name,
        email: userData?.email,
        avatar: userData?.avatar?.url || null,
      });
    }
  }, [userData]);

  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: any) => state.user);

  const handleUpdate = () => {
    let profileimg = formdata.avatar;

    if (formdata.avatar && formdata.avatar.includes("https")) {
      profileimg = userData.avatar.url;
    }

    const payload = {
      name: formdata.name,
      email: formdata.email,
      avatar: profileimg,
    };

    dispatch(updateUser(payload))
      .unwrap()
      .then(() => toast.success("Profile updated!!"))
      .catch((error) => toast.error(error.message));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormdata((prevState: any) => ({
          ...prevState,
          avatar: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <CustomeNavbar />
      <PageDetails title={"My Account"} tag={"Home / My Account"} />
      <div className="w-4/5 sm:w-2/3 mx-auto p-6 flex flex-col gap-4">
        {userData && (
          <div className="m-2 relative w-fit">
            <Image
              src={formdata.avatar || profile}
              className="rounded-full"
              alt="Profile Picture"
              width={180}
              height={180}
            />
            <div className="absolute bottom-0 flex items-center border-4 border-white right-0 p-2 bg-[#1C5356] rounded-full">
              <label
                htmlFor="avatar-upload"
                className="text-white cursor-pointer"
              >
                <ModeEditOutlineIcon />
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleAvatarChange}
              />
            </div>
          </div>
        )}
        <div className="flex gap-3 justify-between">
          <div className="w-full flex flex-col gap-2">
            <span className="text-[#4d4d4d] font-semibold text-lg sm:text-xl">
              Name*
            </span>
            <input
              className="rounded-lg p-3 text-base font-semibold text-black focus:outline-none border border-[#C9C9C9]"
              placeholder="First name"
              name="name"
              value={formdata.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="text-[#4d4d4d] font-semibold text-lg sm:text-xl">
            Email*
          </span>
          <input
            className="rounded-lg p-3 text-base font-semibold text-black focus:outline-none border border-[#C9C9C9]"
            placeholder="Enter your email"
            name="email"
            value={formdata.email}
            onChange={handleInputChange}
          />
        </div>

        <button
          onClick={handleUpdate}
          className="text-lg font-semibold p-4 w-fit px-6 text-white rounded-full bg-[#1C5356]"
        >
          {loading ? <span>Updating</span> : <span>Update Changes</span>}
        </button>
      </div>
      <Label />
      <Footer />
    </div>
  );
};

export default Index;
