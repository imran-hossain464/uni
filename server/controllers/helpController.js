import Help from "../models/helpModel.js";

export const submitHelp = async (req, res) => {
  try {
    const { type, Options, details } = req.body;
    const helpEntry = new Help({ type, Options, details });
    await helpEntry.save();
    res.status(201).json({ message: "Help entry saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while saving help entry." });
  }
};

export const getHelpPosts = async (req, res) => {
  try {
    const posts = await Help.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching help posts:", error);
    res.status(500).json({ message: "Failed to fetch posts", error });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const post = await Help.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch post", error });
  }
};