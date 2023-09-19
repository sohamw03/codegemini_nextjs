import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get("slug");
    const data = await fs.promises.readFile(`BlogData/${slug}.json`, "utf-8");
    if (!data) {
        return NextResponse.json({ status: false, msg: "Internal Server Error" }, { status: 500 });
    }
    return NextResponse.json(JSON.parse(data));
}

