"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { LANGS, type Lang } from "@/lib/i18n";

export async function updateLanguage(lang: Lang) {
  if (!LANGS.includes(lang)) return;

  const session = await auth();
  if (!session?.user?.id) return;

  await prisma.user.update({
    where: { id: session.user.id },
    data: { language: lang },
  });
}
