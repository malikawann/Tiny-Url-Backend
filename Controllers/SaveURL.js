import { URLs } from "../Models/url.js";

export const SaveURL = async (req, res) => {
  const { longUrl } = req.body;
  try {
    const shortId="345677"
    const newURL = new URLs({ longUrl: longUrl, shortId: shortId });
     await newURL.save();
    const shortURL = `http://localhost:5050/${shortId}`;
    res.status(200).json({
      ok: true,
      shortURL: shortURL,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
    });
  }
};