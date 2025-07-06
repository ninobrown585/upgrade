import arcjet, {tokenBucket, shield, detectBot} from "@arcjet/node";
import "dotenv/config";

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        // shield protects from attacks e.g. sql injection
        shield({mode:"LIVE"}),
        detectBot({
            mode: "LIVE",
            //blocks bots exccept search engine
            allow: [
                "CATEGORY:SEARCH_ENGINE"
                //see the full list at https://arcjet.com/bot-list
            ]
        }),
        //rate limiting
        tokenBucket({
            mode: "LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10,
        })
    ]
})