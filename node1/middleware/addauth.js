import Jwt from "jsonwebtoken";
const vertoken = (req, res, next) => {
     try{
    const token = req.headers.authorization.split(" ")[1];
        console.log(req.headers.authorization, "as middleware");
        if (!token) {
            return res.status(401).send("Token is required");
        }
        const decoded = Jwt.decode(token, '$2b$10$3ppubiq16Xlv6jIBHv/XPu');
        console.log(decoded, "as decode data");
        console.log(req.body,"as body");
        if (req.body.username === decoded.username) {
            next();
        } else {
            console.log("else")
            return res.status(401).send("Token does not match the user");
        }}
        catch(error){
            return res.status(401).send("Token does not match the user");
        }
};

export default vertoken;
