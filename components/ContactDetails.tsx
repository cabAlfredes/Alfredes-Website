import { FaInstagram, FaFacebook, FaWhatsapp, FaGoogle } from "react-icons/fa";
import { Link, Paper, Stack } from "@mui/material";

function ContactDetails() {
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
            color="textPrimary"
            underline="hover"
            href="mailto:cab.alfredes@gmail.com"
            title="Envíanos un Email"
          >
            <FaGoogle /> cab.alfredes@gmail.com
          </Link>
          <Link
            color="textPrimary"
            underline="hover"
            href="https://wa.me/+5491162785125"
            title="Contactar por WhatsApp"
          >
            <FaWhatsapp /> (+54) 9 11 6278-5125
          </Link>
          <Link
            color="textPrimary"
            component="a"
            underline="hover"
            href="https://www.facebook.com/isla.alfredes/"
            title="Facebook isla.alfredes"
          >
            <FaFacebook /> isla.alfredes
          </Link>
          <Link
            color="textPrimary"
            component="a"
            underline="hover"
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
