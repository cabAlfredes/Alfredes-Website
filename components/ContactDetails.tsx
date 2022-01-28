import { FaInstagram, FaFacebook, FaWhatsapp, FaGoogle } from "react-icons/fa";
import { Link, Paper, Stack } from "@mui/material";

function ContactDetails(props) {
  return (
    <div>
      <Paper
        elevation={5}
        sx={{
          padding: 5,
        }}
      >
        <Stack spacing={2}>
          <Link
            underline="none"
            color="textPrimary"
            href="mailto:cab.alfredes@gmail.com"
            title="Envianos un Email"
          >
            <FaGoogle /> cab.alfredes@gmail.com
          </Link>
          <Link
            underline="none"
            color="textPrimary"
            href="https://wa.me/+5491162785125"
            title="Contactar por WhatsApp"
          >
            <FaWhatsapp /> (+54) 9 11 6278-5125
          </Link>
          <Link
            component="a"
            underline="none"
            color="textPrimary"
            href="https://www.facebook.com/isla.alfredes/"
            title="Facebook isla.alfredes"
          >
            <FaFacebook /> isla.alfredes
          </Link>
          <Link
            component="a"
            underline="none"
            color="textPrimary"
            href="https://www.instagram.com/cab.alfredes/"
            title="Instagram cab.alfredes"
          >
            <FaInstagram /> cab.alfredes
          </Link>
        </Stack>
      </Paper>
    </div>
  );
}

export default ContactDetails;
