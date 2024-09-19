import { styled } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";

export function CrownIcon() {
  const CrownIcon = styled(SvgIcon)(({ theme }) => ({
    fontSize: "1em",
    width: "2em",
    transformOrigin: "center",
    transform: "scale(2) translateY(10%)",
    stroke: "currentcolor",
    padding: `0 ${theme.spacing(1)}`,
  }));
  return (
    <CrownIcon>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.99564 18.998H22.0044"
          stroke-width="1.57137"
          stroke-miterlimit="10"
        />
        <path
          d="M2.00612 5.00293L3.99652 12.0007V18.9986H20.0035V12.0007L22.0044 5.00293"
          stroke-width="1.57137"
          stroke-miterlimit="10"
        />
        <path
          d="M22.0044 5.00283L16.0017 7.9989L12 3.00195"
          stroke-width="1.57137"
          stroke-miterlimit="10"
        />
        <path
          d="M12 3.00195L7.99826 7.9989L2.00612 5.00283"
          stroke-width="1.57137"
          stroke-miterlimit="10"
        />
        <path
          d="M12 15.9921C13.1051 15.9921 14.0009 14.6508 14.0009 12.9961C14.0009 11.3414 13.1051 10 12 10C10.895 10 9.99913 11.3414 9.99913 12.9961C9.99913 14.6508 10.895 15.9921 12 15.9921Z"
          stroke-width="1.57137"
          stroke-miterlimit="10"
        />
        <path
          d="M16.0018 12.9961H20.0035"
          stroke-width="1.57137"
          stroke-miterlimit="10"
        />
        <path
          d="M7.99827 12.9961H3.99652"
          stroke-width="1.57137"
          stroke-miterlimit="10"
        />
        <path
          d="M12 2.99137C12.5496 2.99137 12.9952 2.54581 12.9952 1.99618C12.9952 1.44654 12.5496 1.00098 12 1.00098C11.4504 1.00098 11.0048 1.44654 11.0048 1.99618C11.0048 2.54581 11.4504 2.99137 12 2.99137Z"
          stroke-width="1.57137"
          stroke-miterlimit="10"
        />
        <path
          d="M1.99564 4.99235C2.54527 4.99235 2.99084 4.54678 2.99084 3.99715C2.99084 3.44752 2.54527 3.00195 1.99564 3.00195C1.44601 3.00195 1.00044 3.44752 1.00044 3.99715C1.00044 4.54678 1.44601 4.99235 1.99564 4.99235Z"
          stroke-width="1.57137"
          stroke-miterlimit="10"
        />
        <path
          d="M22.0044 4.99235C22.554 4.99235 22.9996 4.54678 22.9996 3.99715C22.9996 3.44752 22.554 3.00195 22.0044 3.00195C21.4547 3.00195 21.0092 3.44752 21.0092 3.99715C21.0092 4.54678 21.4547 4.99235 22.0044 4.99235Z"
          stroke-width="1.57137"
          stroke-miterlimit="10"
        />
      </svg>
    </CrownIcon>
  );
}
