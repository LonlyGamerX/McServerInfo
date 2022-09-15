import axios from "axios";

const options = {
  apexUrl: "https://public-api.tracker.gg/v2/apex/standard/profile/",
  csgoUrl: "https://public-api.tracker.gg/v2/csgo/standard/profile/",
  splitegate: "https://public-api.tracker.gg/v2/splitgate/standard/profile/",
};

export const GetApexStats = async (playform, username) => {
  const response = await axios
    .get(`${options.apexUrl}/${playform}/${username}`, {
      headers: {
        "content-type": "application/json",
        "TRN-Api-Key": "26da1e6e-9ed6-49b7-9532-5d938715c51a",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("Error", error);
      return null;
    });
  return response;
};
