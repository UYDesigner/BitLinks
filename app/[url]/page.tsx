import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"
export default async function Page({ params }: { params: Promise<{ url: string }> }) {
    const { url } = await params
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({shorturl : url})
    console.log(doc)
    if(doc)
    {
        redirect(doc.url)
    }
    else
    {
        redirect(`${process.env.NEXT_PUBLIC_LOCAL_HOST}`)
    }
    return <div>My Post: {url}</div>
}