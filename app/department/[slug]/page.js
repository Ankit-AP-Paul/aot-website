export default function Department({ params }) {
  const departments = ["CSE", "CSBS", "ME", "ECE", "EE", "EEE", "MCA"];
  if (!departments.includes(params.slug)) {
    return {
      notFound: true,
    };
  }
  return <div className="text-red-600 text-5xl">{params.slug} Department</div>;
}
