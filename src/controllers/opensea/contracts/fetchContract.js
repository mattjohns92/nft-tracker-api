import axios from "axios";

const fetchContract = async (req, res, next) => {
  try {
    const { data } = await axios.request({
      method: "GET",
      url: `https://api.opensea.io/api/v1/asset_contract/${req.query.wallet}`,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(error.status || 400).json(error);
  }
};

export default fetchContract;
