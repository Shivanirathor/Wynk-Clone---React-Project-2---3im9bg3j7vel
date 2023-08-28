// import React, { useState } from "react";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import "../styles/SubscriptionModal.css";
// import { Link, useNavigate } from "react-router-dom";

// const SubscriptionModal = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     navigate("/payment")
//   };

//   return (
//     <div>
//       <Button variant="" onClick={handleOpen}>
//         $ Manage Subscription
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-slide-title"
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle id="alert-dialog-slide-title">{"WYNKMUSIC"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             Unlock premium features and enjoy:
//             <div class="benefits-table">
//   <div class="benefits-row">
//     <div class="benefits-cell">Benefits</div>
//     <div class="benefits-cell">Now</div>
//     <div class="benefits-cell">Premium</div>
//   </div>
//   <div class="benefits-row">
//     <div class="benefits-cell">Unlimited Streaming</div>
//     <div class="benefits-cell tick-mark">✓</div>
//     <div class="benefits-cell tick-mark">✓</div>
//   </div>
//   <div class="benefits-row">
//     <div class="benefits-cell">Unlimited Downloads</div>
//     <div class="benefits-cell tick-mark">✓</div>
//     <div class="benefits-cell tick-mark">✓</div>
//   </div>
//   <div class="benefits-row">
//     <div class="benefits-cell">Ad-free Music</div>
//     <div class="benefits-cell tick-mark">✓</div>
//     <div class="benefits-cell tick-mark">✓</div>
//   </div>
// </div>

//           </DialogContentText>
//           <div className="subscription-cards">
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">Yearly Subscription</Typography>
//                 <Typography color="textSecondary">Save 20%</Typography>
//                 <Typography variant="h4">$99.99</Typography>
//                 <Button onClick={handleClose} color="primary">
//                   Get Premium
//                 </Button>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">3-Month Subscription</Typography>
//                 <Typography color="textSecondary">Save 10%</Typography>
//                 <Typography variant="h4">$29.99</Typography>
//                 <Button onClick={handleClose} color="primary">
//                   Get Premium
//                 </Button>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">Monthly Subscription</Typography>
//                 <Typography variant="h4">$12.99</Typography>
//                 <Button onClick={handleClose} color="primary">
//                   Get Premium
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </DialogContent>
//         <DialogContent className="modal-footer">
//           <DialogContentText>
//             All amounts include GST.
//             <br />
//             By proceeding, you agree to our Terms and Privacy Policy.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <h2>Amount to be paid RS.399</h2>
//           <Button onClick={handleClose} color="primary">
//             Continue
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default SubscriptionModal;

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
import Logo from "../assets/logo.jpeg";
const SubscriptionModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/payment");
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
                <div className="plan">
                  <Typography variant="h6">Yearly</Typography>
                  <Typography>₹999</Typography>
                  <Typography>₹399</Typography>
                  <Typography>Save 60%</Typography>
                  
                </div>
                <div className="plan">
                  <Typography variant="h6">3 Months</Typography>
                  <Typography>₹289</Typography>
                  <Typography>₹129</Typography>
                  <Typography>Save 55%</Typography>
                  
                </div>
                <div className="plan">
                  <Typography variant="h6">Monthly</Typography>
                  <Typography>₹99</Typography>
                  <Typography>₹49</Typography>
                  <Typography>Save 50%</Typography>
                  
                </div>
              </div>
              <Typography className="valid-till">
                <hr/>
                Current plan valid till 26 Sep 2023
                <hr/>
              </Typography>
              <Typography className="gst-message">
              <li> All amounts are inclusive of 18% GST</li> 
              </Typography>
              <Typography className="terms-policy">
              <li> By clicking on Continue button, you agree to Wynk’s Terms of
                service and Privacy policy.</li> 
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
