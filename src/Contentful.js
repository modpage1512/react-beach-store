import { createClient } from "contentful";

export default createClient({
    space: process.env.REACT_APP_USER_TOKEN,
    accessToken: process.env.REACT_APP_CONTENT_TOKEN
})