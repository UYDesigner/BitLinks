import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("POST data:", body);

        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        // Check if shorturl already exists
        const existing = await collection.findOne({ shorturl: body.shorturl });

        if (existing) {
            return Response.json({
                success: false,
                error: true,
                message: "Short URL already exists",
            }, { status: 409 }); // Conflict status
        }

        // Insert new URL document
        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
        });

        return Response.json({
            success: true,
            error: false,
            message: "Short URL submitted successfully",
        }, { status: 201 }); 

    } catch (err) {
        console.error("Error in POST /api/shorten:", err);

        return Response.json({
            success: false,
            error: true,
            message: "Internal Server Error",
        }, { status: 500 });
    }
}
