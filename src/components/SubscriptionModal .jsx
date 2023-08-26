import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/SubscriptionModal.css";
import { Link, useNavigate } from "react-router-dom";

const SubscriptionModal = () => {
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="" onClick={handleOpen}>
        $ Manage Subscription
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"WYNKMUSIC"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Unlock premium features and enjoy:
            <ul>
              <li>Unlimited streaming</li>
              <li>Unlimited downloads</li>
              <li>Ad-free music</li>
            </ul>
          </DialogContentText>
          <div className="subscription-cards">
            <Card>
              <CardContent>
                <Typography variant="h6">Yearly Subscription</Typography>
                <Typography color="textSecondary">Save 20%</Typography>
                <Typography variant="h4">$99.99</Typography>
                <Button onClick={handleClose} color="primary">
                  Get Premium
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6">3-Month Subscription</Typography>
                <Typography color="textSecondary">Save 10%</Typography>
                <Typography variant="h4">$29.99</Typography>
                <Button onClick={handleClose} color="primary">
                  Get Premium
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6">Monthly Subscription</Typography>
                <Typography variant="h4">$12.99</Typography>
                <Button onClick={handleClose} color="primary">
                  Get Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
        <DialogContent className="modal-footer">
          <DialogContentText>
            All amounts include GST.
            <br />
            By proceeding, you agree to our Terms and Privacy Policy.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <h2>Amount to be paid RS.399</h2>
          <Link to="/payment">
          <Button onClick={handleClose} color="primary">
            close
          </Button>
            </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubscriptionModal;
