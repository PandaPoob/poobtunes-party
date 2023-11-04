import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    // Authenticated user; perform actions as needed
  } else {
    // Unauthorized access
    res.status(401).send("Unauthorized");
  }
};
