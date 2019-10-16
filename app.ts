import "source-map-support/register";
import awsServerlessExpressMiddleware from "aws-serverless-express/middleware";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(awsServerlessExpressMiddleware.eventContext());

router.get("/hello", () => {
  return "world";
});

app.use("/", router);
