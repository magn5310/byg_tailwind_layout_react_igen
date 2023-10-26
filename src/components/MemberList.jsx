import MemberCard from "./MemberCard";

export default function MemberList() {
  return (
    <div>
      <MemberCard
        img="Rectangle_5.jpg"
        name="Thomas Tog"
        title="Dank engine operator"
      ></MemberCard>
      <div className=" w-full border-b-2"></div>
      <MemberCard
        img="Rectangle_6.jpg"
        name="Peter Plys"
        title="Fede bjørn der fiser rundt og æder noget honning"
      ></MemberCard>
      <div className=" w-full border-b-2"></div>
      <MemberCard
        img="Rectangle_7.jpg"
        name="Hanne"
        title="Kommunalt ansat"
      ></MemberCard>
      <div className=" w-full border-b-2"></div>
    </div>
  );
}
