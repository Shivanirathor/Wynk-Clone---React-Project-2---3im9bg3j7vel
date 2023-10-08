import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import "../styles/SubscriptionModal.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import { useSelector } from "react-redux";

const SubscriptionModal = () => {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.login);
  const [open, setOpen] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null)
  const plans = [
    {
      duration: "Yearly",
      originalPrice: "₹999",
      discountedPrice: "₹399",
      savings: "Save 60%",
    },
    {
      duration: "3 Months",
      originalPrice: "₹289",
      discountedPrice: "₹129",
      savings: "Save 55%",
    },
    {
      duration: "Monthly",
      originalPrice: "₹99",
      discountedPrice: "₹49",
      savings: "Save 50%",
    },
  ];
  const handlePlanSelect = (index) => {
    setSelectedPlanIndex(index);
  };

  const handleOpen = () => {
    if (isLogin) {
      setOpen(true);
    } else {
      navigate("/login");
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/payment");
  };

  return (
    <div>
      <Button variant="" onClick={handleOpen} className="subscription-text" style={{textDecoration:"lowerCase"}}>
      <LocalAtmIcon sx={{marginRight:"5px"}}/>
        Manage Subscription
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          style={{ textAlign: "center" }}
          id="alert-dialog-slide-title"
        >
          {"WYNKMUSIC"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="crown-logo">
              <img src={Logo} alt="Crown Logo" />
            </div>
            <div className="premium-offer">
              <Typography variant="h6">
                Get the best of music & podcasts
              </Typography>
              <div class="benefits-row">
                <div class="benefits-cell">Benefits</div>
                <div class="benefits-cell">Now</div>
                <div class="benefits-cell">Premium</div>
              </div>
              <div class="benefits-row">
                <div class="benefits-cell">Unlimited Streaming</div>
                <div class="benefits-cell tick-mark">✓</div>
                <div class="benefits-cell tick-mark">✓</div>
              </div>
              <div class="benefits-row">
                <div class="benefits-cell">Unlimited Downloads</div>
                <div class="benefits-cell tick-mark">✓</div>
                <div class="benefits-cell tick-mark">✓</div>
              </div>
              <div class="benefits-row">
                <div class="benefits-cell">Ad-free Music</div>
                <div class="benefits-cell tick-mark">✓</div>
                <div class="benefits-cell tick-mark">✓</div>
              </div>

              <div className="subscription-plans">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`plan ${
                      selectedPlanIndex === index ? "selected" : ""
                    }`}
                    style={{
                      border:
                        selectedPlanIndex === index
                          ? "3px solid green"
                          : "1px solid #ccc",
                    }}
                    onClick={() => handlePlanSelect(index)}
                  >
                    <h2>{plan.duration}</h2>
                    <p>{plan.originalPrice}</p>
                    <p>{plan.discountedPrice}</p>
                    <p>{plan.savings}</p>
                    <button
                      onClick={() => handlePlanSelect(index)}
                      disabled={selectedPlanIndex === index}
                    >
                      {selectedPlanIndex === index ? "Selected" : "Select"}
                    </button>
                  </div>
                ))}
              </div>
              <Typography className="valid-till">
                <hr />
                Current plan valid till 26 Sep 2023
                <hr />
              </Typography>
              <Typography className="gst-message">
                <li> All amounts are inclusive of 18% GST</li>
              </Typography>
              <Typography className="terms-policy">
                <li>
                  {" "}
                  By clicking on Continue button, you agree to Wynk’s Terms of
                  service and Privacy policy.
                </li>
              </Typography>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogContent className="modal-footer">
          <div className="amount-to-be-paid">
            <Typography>Amount to be paid</Typography>
            <Typography>₹399</Typography>
          </div>
          <Button onClick={handleClose} variant="contained" color="primary">
            Continue
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubscriptionModal;
