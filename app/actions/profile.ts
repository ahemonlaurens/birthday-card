"use server";

import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function updateProfile(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) return;

  const firstName = (formData.get("firstName") as string | null)?.trim();
  const lastName = (formData.get("lastName") as string | null)?.trim();
  const birthDateRaw = formData.get("birthDate") as string | null;

  if (!firstName || !lastName) return;

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      firstName,
      lastName,
      birthDate: birthDateRaw ? new Date(birthDateRaw) : null,
    },
  });

  redirect("/");
}
