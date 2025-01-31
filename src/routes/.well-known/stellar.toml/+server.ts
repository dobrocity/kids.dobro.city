import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {
  const content = `# DOBROCITY

NETWORK_PASSPHRASE="Public Global Stellar Network ; September 2015"

SIGNING_KEY="GCMEI2TOKB2OM6XCOZGR4VLGXWCPQNVHSTI4MQCYHERDCXA265KBKIDS"

ACCOUNTS=[
"GCMEI2TOKB2OM6XCOZGR4VLGXWCPQNVHSTI4MQCYHERDCXA265KBKIDS",
]

VERSION="2.5.0"

[[PRINCIPALS]]
name="Rinat Enikeev"
email="rinat@dobro.city"
keybase="programyzer"
telegram="programyzer"

[DOCUMENTATION]
ORG_NAME="Adventure Playground @DoBro Popup City"
ORG_DBA="Adventure Playground @DoBro Popup City"
ORG_URL="https://kids.dobro.city"
ORG_LOGO="https://kids.dobro.city/favicon.png"
ORG_DESCRIPTION="The Adventure Playground @DoBro Popup City is a place where kids can play and learn about the world."
ORG_GITHUB="dobrocity"
ORG_OFFICIAL_EMAIL="contact@dobro.city"
ORG_SUPPORT_EMAIL="contact@dobro.city"

[[CURRENCIES]]
code="KIDS"
issuer="GCMEI2TOKB2OM6XCOZGR4VLGXWCPQNVHSTI4MQCYHERDCXA265KBKIDS"
status="live"
display_decimals=0
is_asset_anchored=false
name="KIDS"
desc="KIDS is a donation token for the Adventure Playground @DoBro Popup City"
image="https://kids.dobro.city/favicon.png"
`

  return new Response(content, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/toml",
    },
  })
}
