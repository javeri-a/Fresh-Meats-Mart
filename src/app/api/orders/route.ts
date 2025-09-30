// app/api/orders/route.ts
import { NextResponse } from "next/server";
import { connect } from "@/lib/db"; // apna DB connection function import karo
import Order from "../../model/Order";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { items, total, createdAt } = body;

    await connect();

    const order = await Order.create({
      items,
      total,
      createdAt,
    });

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error("Order API Error:", error);
    return NextResponse.json(
      { success: false, message: "Error saving order" },
      { status: 500 }
    );
  }
}
