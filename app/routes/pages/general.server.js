import db from "../../db.server";

export async function getActive() {
  const active = await db.general.findFirst();

  if (!active) {
    return null;
  }

  return active;
}
