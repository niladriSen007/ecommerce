import express from "express"
const router = express.Router();
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51M8h5RSGicCfqS5sjDtTogJbVPbj0fog6qtCysn8x7vAxhDVFB8Qmo0gXKTKzSFI2tHVPghsZpDHJfExkQuKHIIZ00GpocZKBK');



router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;