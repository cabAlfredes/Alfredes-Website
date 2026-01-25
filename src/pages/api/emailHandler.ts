import type { APIRoute } from "astro";
import Mailgun from "mailgun-js";

export interface FormProps {
  name: string;
  email: string;
  message: string;
  dateFrom: string;
  dateTo: string;
  phone: string;
}

const DOMAIN = "alfredes.com.ar";

// Handle GET requests (returns 405 Method Not Allowed)
export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.MAILGUN || process.env.MAILGUN;
    if (!apiKey) {
      console.error("MAILGUN API key is not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const mg = Mailgun({ apiKey, domain: DOMAIN });
    const body: FormProps = await request.json();
    console.log("BODY", body);

    const data = {
      from: `${body.name} <${body.email}>`,
      to: "cab.alfredes@gmail.com",
      subject: `Consulta WEB de ${body.name}`,
      text: `Nombre: ${body.name}
        Teléfono: ${body.phone}
        desde: ${body.dateFrom}
        hasta: ${body.dateTo}
        mensaje:${body.message}`,
      html: buildEmail(body),
    };

    return new Promise((resolve) => {
      mg.messages().send(data, function (error: any, body: any) {
        if (error) {
          resolve(
            new Response(JSON.stringify({ error }), {
              status: error.statusCode || 500,
              headers: { "Content-Type": "application/json" },
            })
          );
          return;
        }

        resolve(
          new Response(JSON.stringify({ body }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          })
        );
      });
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

const buildEmail = (data: FormProps) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    style="
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      font-size: 14px;
      margin: 0;
    "
  >
    <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Consulta desde la pagina web</title>

      <style type="text/css">
        img {
          max-width: 100%;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: none;
          width: 100% !important;
          height: 100%;
          line-height: 1.6em;
        }
        body {
          background-color: #f6f6f6;
        }
        @media only screen and (max-width: 640px) {
          body {
            padding: 0 !important;
          }
          h1 {
            font-weight: 800 !important;
            margin: 20px 0 5px !important;
          }
          h2 {
            font-weight: 800 !important;
            margin: 20px 0 5px !important;
          }
          h3 {
            font-weight: 800 !important;
            margin: 20px 0 5px !important;
          }
          h4 {
            font-weight: 800 !important;
            margin: 20px 0 5px !important;
          }
          h1 {
            font-size: 22px !important;
          }
          h2 {
            font-size: 18px !important;
          }
          h3 {
            font-size: 16px !important;
          }
          .container {
            padding: 0 !important;
            width: 100% !important;
          }
          .content {
            padding: 0 !important;
          }
          .content-wrap {
            padding: 10px !important;
          }
          .invoice {
            width: 100% !important;
          }
        }
      </style>
    </head>

    <body
      itemscope
      itemtype="http://schema.org/EmailMessage"
      style="
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: none;
        width: 100% !important;
        height: 100%;
        line-height: 1.6em;
        background-color: #f6f6f6;
        margin: 0;
      "
      bgcolor="#f6f6f6"
    >
      <table
        class="body-wrap"
        style="
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          box-sizing: border-box;
          font-size: 14px;
          width: 100%;
          background-color: #f6f6f6;
          margin: 0;
        "
        bgcolor="#f6f6f6"
      >
        <tr
          style="
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            margin: 0;
          "
        >
          <td
            style="
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              box-sizing: border-box;
              font-size: 14px;
              vertical-align: top;
              margin: 0;
            "
            valign="top"
          ></td>
          <td
            class="container"
            width="600"
            style="
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              box-sizing: border-box;
              font-size: 14px;
              vertical-align: top;
              display: block !important;
              max-width: 600px !important;
              clear: both !important;
              margin: 0 auto;
            "
            valign="top"
          >
            <div
              class="content"
              style="
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                box-sizing: border-box;
                font-size: 14px;
                max-width: 600px;
                display: block;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <table
                class="main"
                width="100%"
                cellpadding="0"
                cellspacing="0"
                itemprop="action"
                itemscope
                itemtype="http://schema.org/ConfirmAction"
                style="
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                  box-sizing: border-box;
                  font-size: 14px;
                  border-radius: 3px;
                  background-color: #fff;
                  margin: 0;
                  border: 1px solid #e9e9e9;
                "
                bgcolor="#fff"
              >
                <tr
                  style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin: 0;
                  "
                >
                  <td
                    class="content-wrap"
                    style="
                      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                      box-sizing: border-box;
                      font-size: 14px;
                      vertical-align: top;
                      margin: 0;
                      padding: 20px;
                    "
                    valign="top"
                  >
                    <meta
                      itemprop="name"
                      content="Confirm Email"
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    />
                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <tr
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          margin: 0;
                        "
                      >
                        <td
                          class="content-block"
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                              sans-serif;
                            box-sizing: border-box;
                            font-size: 24px;
                            vertical-align: top;
                            margin: 0;
                            padding: 0 0 20px;
                          "
                          valign="top"
                        >
                          Consulta WEB de ${data.name}
                        </td>
                      </tr>
                      <tr
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        "
                        valign="top"
                      >
                      Teléfono: ${data.phone}
                      <br/>
                      desde: ${data.dateFrom}
                      <br/>
                      hasta: ${data.dateTo}
                      </td>
                    </tr>
                      <tr
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          margin: 0;
                        "
                      >
                        <td
                          class="content-block"
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                              sans-serif;
                            box-sizing: border-box;
                            font-size: 14px;
                            vertical-align: top;
                            margin: 0;
                            padding: 0 0 20px;
                          "
                          valign="top"
                        >
                          ${data.message}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
    </body>
  </html>`;
};
