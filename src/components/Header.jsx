import SignupForm from "./SignupForm";
import "../styles/header.css";
import { HiOutlineUserGroup } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="mb-3 flex flex-col place-items-center text-center">
      <HiOutlineUserGroup className="h-12 w-12 text-gray-400"></HiOutlineUserGroup>
      <h2 className="font-roboto mb-3 text-xl  font-bold">Add team members</h2>
      <p className="mb-3 text-slate-500">
        You haven't added any team members to you project yet. As the owner of
        this project, you can manage team member permissions.
      </p>
      <SignupForm></SignupForm>
    </div>
  );
}
