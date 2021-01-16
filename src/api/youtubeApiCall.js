import axios from "axios";
import mock from "./mock.json";
/*AIzaSyBim8xQtVa1paCRELE98qW9xCCKml1NjTM
 */

export const getYoutube = async query => {
  try {
    const { data } = await axios.get(
      `https://content.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=10&type=video&key=AIzaSyBD7jBT9SQik4EUky399mzp3BdVtlHCvJo
      `
    );
    return data;
  } catch (error) {
    console.log(error);
    return mock;
  }
};
