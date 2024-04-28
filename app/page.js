import Map from "@/components/Map";
import Link from "next/link";

export default function Home() {
  const departments = ["CSE", "CSBS", "ME", "ECE", "EE", "EEE", "MCA"];
  return (
    <div className="bg-primary">
      <h1 className="text-tertiary text-5xl pb-10">Home</h1>
      <div>
        {departments.map((department, index) => (
          <div key={index}>
            <Link href={`/department/${department}`}>
              {<p className="text-2xl hover:text-3xl">{department}</p>}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
