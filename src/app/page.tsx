import { redirect } from "next/dist/server/api-utils";

export default function Home() {
 
  redirect("dashboard/home")
}
