import Link from "next/link";

export default function NotFound() {
  return (
    <div className="">
      <h2 className="h2">Not Found</h2>
      <p className="p">Could not find requested resource</p>
      <Link className="" href="/">Return Home</Link>
    </div>
  );
}
