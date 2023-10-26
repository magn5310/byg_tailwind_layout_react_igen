import PrimaryButton from "./PrimaryButton";
import "../styles/signup.css";
export default function SignupForm() {
  return (
    <div className="flex w-full place-items-center justify-between">
      <label htmlFor="email" className="">
        <input
          type="email"
          className="box-border w-[200%] [&:not(:focus)]:outline-slate-500"
          placeholder="Enter an email"
        />
      </label>
      <PrimaryButton text="Send invite"></PrimaryButton>
    </div>
  );
}
