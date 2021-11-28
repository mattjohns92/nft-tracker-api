import axios from "axios";

const fetchCollections = async (req, res, next) => {
  try {
    const collections = await axios.get("https://api.opensea.io/api/v1/collections");

    return res.status(200).json(collections);
  } catch (error) {
    return res.status(error.status || 400).json(error);
  }
};

export default fetchCollections;
