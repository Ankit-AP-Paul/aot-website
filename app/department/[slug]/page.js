import NavbarDept from "@/components/NavbarDept";

export default function Department({ params }) {
  const departments = ["CSE", "CSBS", "ME", "ECE", "EE", "EEE", "MCA"];
  if (!departments.includes(params.slug)) {
    return {
      notFound: true,
    };
  }
  return (
    <>
      <div className="text-tertiary text-5xl">{params.slug}</div>
      <div className="relative w-full flex flex-col items-center justify-center h-screen">
        <NavbarDept className="top-2" />
      </div>
    </>
  );
}
