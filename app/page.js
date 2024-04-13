import Link from "next/link";

export default function Home() {
  const departments = ["CSE", "CSBS", "ME", "ECE", "EE", "EEE", "MCA"];
  return (
    <div>
      <h1 className="text-red-600 text-5xl pb-10">Home</h1>
      <div>
        {departments.map((department, index) => (
          <div key={index}>
            <Link href={`/department/${department}`}>
              {<p className="text-2xl hover:text-red-600">{department}</p>}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
