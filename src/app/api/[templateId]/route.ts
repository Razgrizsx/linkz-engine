import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: any) {
  const pathName = request.url.split("/");
  const template_id = pathName[pathName.length - 1];
  console.log(template_id);
  const response = await prisma.template.findUnique({
    where: {
      template_id: template_id
    }
  });
  return NextResponse.json(response);
}
