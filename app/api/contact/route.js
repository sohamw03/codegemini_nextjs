import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(req, res) {
  const data = await req.json();
  let contacts = JSON.parse(await fs.promises.readFile("ContactData/Contacts.json"));
  contacts.push(data);
  fs.promises.writeFile("ContactData/Contacts.json", JSON.stringify(contacts));
  return NextResponse.json({ status: true, message: data });
}
