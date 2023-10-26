import PrimaryButton from "./PrimaryButton";
import "../styles/signup.css";
export default function SignupForm() {
  return (
    <div className="flex w-full place-items-center justify-between">
      <label htmlFor="email"> </label>
      <input
        type="email"
        className="mr-4  box-border w-full rounded border-2 border-solid border-slate-300 px-2 py-2"
        placeholder="Enter an email"
      />

      <PrimaryButton text="Send invite"></PrimaryButton>
    </div>
  );
}
