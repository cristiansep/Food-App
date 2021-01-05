import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nFOh4TlmRsO4ksoVHqxVCZXVUM-udAYLKvewO5Inj3HLhdZUeRKuDHgJlyxUGECk7bMUunUK3_cedUxh2EVJukiwOM-GdUT3uEfyr7ckxP_cH97YGsMrkc22rzPuX3Yx'
    }

});