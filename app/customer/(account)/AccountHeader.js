import { getServerSession } from "next-auth";

async function AccountHeader() {
  const session = await getServerSession();
  const backgroundImage =
    "https://i.postimg.cc/3RBC5C9Y/photo-1576919228236-a097c32a5cd4.jpg";
  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "180px",
      }}
    >
      <h1 className=" font-bold text-white lg:text-3xl">
        <span>Welcome, </span>
        <span>{session?.user?.name} </span>
      </h1>
    </div>
  );
}

export default AccountHeader;
