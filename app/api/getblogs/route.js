import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(request) {
    const data = await fs.promises.readdir("BlogData");
    let allBlogs = [];
    if (!data) {
        return NextResponse.json({ status: false, msg: "Internal Server Error" }, { status: 500 });
    }
    await Promise.all(
        data.map(async (item) => {
            const blog = await fs.promises.readFile(`BlogData/${item}`, "utf-8");
            allBlogs.push(JSON.parse(blog));
        })
    );
    return NextResponse.json(allBlogs);
}

