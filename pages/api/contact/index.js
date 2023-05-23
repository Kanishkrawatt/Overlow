import db from "../../../firebase/firestore";

export default async (req, res) => {
  try {
    const { slug } = req.body;
    const contact = await db.collection("contact").get();
    const contactData = contact.docs.map((entry) => entry.data());

    if (contactData.some((entry) => entry.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection("contact").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
};
