import axios from "axios";
import env from "react-dotenv";

export default async function analizeImage(url) {
    const data = await axios.post(`https://${env.VISION_ENDPOINT}/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=caption`, url, { headers: { "Content-Type": "application/json", "Ocp-Apim-Subscription-Key": env.VISION_KEY } })
        .then(res => res.data)
        .catch(err => console.log(err))
    return data;
}

