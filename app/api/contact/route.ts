import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("POST contact data:", body);

        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("contacts");

        

        
        await collection.insertOne({
           userName : body.username,
           userEmail : body.useremail,
           userMessage : body.usermessage
        });

        return Response.json({
            success: true,
            error: false,
            message: "We usually respond within 24–48 hours.",
        }, { status: 201 }); 

    } catch (err) {
        console.error("Error in POST /api/contact:", err);

        return Response.json({
            success: false,
            error: true,
            message: "Internal Server Error",
        }, { status: 500 });
    }
}  