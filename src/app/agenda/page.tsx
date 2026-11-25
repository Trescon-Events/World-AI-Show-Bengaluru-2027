import type { Metadata } from "next";
import { AgendaPage } from "./AgendaPage";

export const metadata: Metadata = {
  title: "Executive Programme | World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description:
    "Enterprise security in the age of AI: the decisions ahead. Explore the 2-day executive programme for World AI Show: The Cybersecurity Edition | Bengaluru 2027 (20–21 July 2027)."
};

export default function Page() {
  return <AgendaPage />;
}
