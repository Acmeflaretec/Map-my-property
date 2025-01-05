import React from "react";

type IconProps = React.SVGAttributes<SVGSVGElement>;

export const Icons = {
  rightArrow: (props: IconProps) => (
    <svg
      {...props}
      className={`h-4 w-4 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  ),
  leftArrow: (props: IconProps) => (
    <svg
      {...props}
      className={`h-4 w-4 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 1 1 5l4 4"
      />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      {...props}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M5 7h14M5 12h14M5 17h14"
      />
    </svg>
  ),
  upload: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-5 ${props.className || ""}`}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.43555 3.45017H6.73457V9.39685C6.73457 9.4742 6.79785 9.53748 6.8752 9.53748H7.92988C8.00723 9.53748 8.07051 9.4742 8.07051 9.39685V3.45017H9.37305C9.49082 3.45017 9.55586 3.31482 9.48379 3.22341L7.51504 0.730836C7.50188 0.714028 7.48508 0.700435 7.46589 0.691086C7.4467 0.681738 7.42564 0.67688 7.4043 0.67688C7.38295 0.67688 7.36189 0.681738 7.3427 0.691086C7.32352 0.700435 7.30671 0.714028 7.29355 0.730836L5.3248 3.22166C5.25273 3.31482 5.31777 3.45017 5.43555 3.45017ZM13.8379 8.86951H12.7832C12.7059 8.86951 12.6426 8.93279 12.6426 9.01013V11.7172H2.16602V9.01013C2.16602 8.93279 2.10273 8.86951 2.02539 8.86951H0.970703C0.893359 8.86951 0.830078 8.93279 0.830078 9.01013V12.4906C0.830078 12.8017 1.08145 13.0531 1.39258 13.0531H13.416C13.7271 13.0531 13.9785 12.8017 13.9785 12.4906V9.01013C13.9785 8.93279 13.9152 8.86951 13.8379 8.86951Z"
        fill="#016CC1"
      />
    </svg>
  ),
  phone: (props: IconProps) => (
    <svg
      {...props}
      className={`h-4 w-4 ${props.className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
    </svg>
  ),
  email: (props: IconProps) => (
    <svg
      {...props}
      className={`h-4 w-4 ${props.className || ""}`}
      width="26"
      height="19"
      viewBox="0 0 26 19"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24.25 0.0410156H1.75C1.50136 0.0410156 1.2629 0.139788 1.08709 0.315603C0.911272 0.491419 0.8125 0.729875 0.8125 0.978516V16.916C0.8125 17.4133 1.01004 17.8902 1.36167 18.2418C1.71331 18.5935 2.19022 18.791 2.6875 18.791H23.3125C23.8098 18.791 24.2867 18.5935 24.6383 18.2418C24.99 17.8902 25.1875 17.4133 25.1875 16.916V0.978516C25.1875 0.729875 25.0887 0.491419 24.9129 0.315603C24.7371 0.139788 24.4986 0.0410156 24.25 0.0410156ZM13 10.0195L4.16055 1.91602H21.8395L13 10.0195ZM9.56758 9.41602L2.6875 15.7219V3.11016L9.56758 9.41602ZM10.9551 10.6875L12.3613 11.9824C12.5343 12.1412 12.7605 12.2293 12.9953 12.2293C13.2301 12.2293 13.4563 12.1412 13.6293 11.9824L15.0355 10.6875L21.8324 16.916H4.16055L10.9551 10.6875ZM16.4324 9.41602L23.3125 3.10898V15.723L16.4324 9.41602Z" />
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 ${props.className || ""}`}
      xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg
      {...props}
      className={`h-5 w-5 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  linkedIn: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
        clipRule="evenodd"
      />
      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  search: (props: IconProps) => (
    <svg
      {...props}
      className={`h-5 w-5 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
  ),
  home: (props: IconProps) => (
    <svg
      {...props}
      className={`h-5 w-5 ${props.className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"></path>
    </svg>
  ),
  close: (props: IconProps) => (
    <svg
      {...props}
      className={`h-3 w-3 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  ),
  filter: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
      />
    </svg>
  ),
  bed: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 17v2M12 5.5V10m-6 7v2m15-2v-4c0-1.6569-1.3431-3-3-3H6c-1.65685 0-3 1.3431-3 3v4h18Zm-2-7V8c0-1.65685-1.3431-3-3-3H8C6.34315 5 5 6.34315 5 8v2h14Z"
      />
    </svg>
  ),
  building: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
      />
    </svg>
  ),
  area: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z"
      />
    </svg>
  ),
  priceTag: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"
      />
    </svg>
  ),
  location: (props: IconProps) => (
    <svg
      {...props}
      className={`h-5 w-5 ${props.className || ""}`}
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.96289 6.98037C3.96289 5.30281 5.32283 3.94287 7.00039 3.94287C8.67796 3.94287 10.0379 5.30281 10.0379 6.98037C10.0379 8.65794 8.67796 10.0179 7.00039 10.0179C5.32283 10.0179 3.96289 8.65794 3.96289 6.98037ZM9.02539 6.98037C9.02539 5.86199 8.11877 4.95537 7.00039 4.95537C5.88201 4.95537 4.97539 5.86199 4.97539 6.98037C4.97539 8.09875 5.88201 9.00537 7.00039 9.00537C8.11877 9.00537 9.02539 8.09875 9.02539 6.98037Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.925781 6.98027C0.925781 3.59688 3.63261 0.905273 7.00078 0.905273C10.369 0.905273 13.0758 3.59688 13.0758 6.98027C13.0758 8.0551 12.7483 9.12405 12.1541 10.1773C11.672 11.032 11.0262 11.8559 10.2575 12.6455C9.66897 13.2501 9.04157 13.8011 8.41391 14.2899C8.19371 14.4614 7.98854 14.6133 7.80326 14.7445L7.78368 14.7583C7.72559 14.7992 7.67309 14.8356 7.62663 14.8671L7.58751 14.8935L7.55529 14.9149C7.21848 15.1354 6.78308 15.1354 6.44628 14.9149C6.43426 14.9071 6.41602 14.8949 6.39189 14.8786L6.32647 14.834C6.28724 14.807 6.24445 14.7771 6.19831 14.7445L6.13914 14.7024C5.96967 14.5811 5.78468 14.4433 5.58765 14.2899C4.96 13.8011 4.33259 13.2501 3.74402 12.6455C2.97537 11.8559 2.32961 11.032 1.84743 10.1773C1.25331 9.12405 0.925781 8.0551 0.925781 6.98027ZM12.0633 6.98027C12.0633 4.14312 9.79672 1.91777 7.00078 1.91777C4.20484 1.91777 1.93828 4.14312 1.93828 6.98027C1.93828 10.6409 6.70158 13.8685 6.98738 14.0589L7.00078 14.0678C7.00078 14.0678 12.0633 10.7541 12.0633 6.98027Z"
      />
    </svg>
  ),
  share: (props: IconProps) => (
    <svg
      {...props}
      className={`h-5 w-5 ${props.className || ""}`}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.625 13.5625C13.957 13.5625 13.3406 13.7969 12.8578 14.1883L8.00156 10.675C8.08288 10.2287 8.08288 9.77133 8.00156 9.325L12.8578 5.81172C13.3406 6.20312 13.957 6.4375 14.625 6.4375C16.1766 6.4375 17.4375 5.17656 17.4375 3.625C17.4375 2.07344 16.1766 0.8125 14.625 0.8125C13.0734 0.8125 11.8125 2.07344 11.8125 3.625C11.8125 3.89687 11.85 4.15703 11.9227 4.40547L7.31016 7.74531C6.62578 6.83828 5.53828 6.25 4.3125 6.25C2.24062 6.25 0.5625 7.92812 0.5625 10C0.5625 12.0719 2.24062 13.75 4.3125 13.75C5.53828 13.75 6.62578 13.1617 7.31016 12.2547L11.9227 15.5945C11.85 15.843 11.8125 16.1055 11.8125 16.375C11.8125 17.9266 13.0734 19.1875 14.625 19.1875C16.1766 19.1875 17.4375 17.9266 17.4375 16.375C17.4375 14.8234 16.1766 13.5625 14.625 13.5625ZM14.625 2.40625C15.2977 2.40625 15.8438 2.95234 15.8438 3.625C15.8438 4.29766 15.2977 4.84375 14.625 4.84375C13.9523 4.84375 13.4062 4.29766 13.4062 3.625C13.4062 2.95234 13.9523 2.40625 14.625 2.40625ZM4.3125 12.0625C3.17578 12.0625 2.25 11.1367 2.25 10C2.25 8.86328 3.17578 7.9375 4.3125 7.9375C5.44922 7.9375 6.375 8.86328 6.375 10C6.375 11.1367 5.44922 12.0625 4.3125 12.0625ZM14.625 17.5938C13.9523 17.5938 13.4062 17.0477 13.4062 16.375C13.4062 15.7023 13.9523 15.1562 14.625 15.1562C15.2977 15.1562 15.8438 15.7023 15.8438 16.375C15.8438 17.0477 15.2977 17.5938 14.625 17.5938Z"
        fill="#161616"
      />
    </svg>
  ),
  copy: (props: IconProps) => (
    <svg
      {...props}
      className={`h-5 w-5 ${props.className || ""}`}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4523 12.595C10.4171 12.5601 10.3695 12.5406 10.3199 12.5406C10.2703 12.5406 10.2227 12.5601 10.1875 12.595L7.46406 15.3185C6.20313 16.5794 4.075 16.713 2.68281 15.3185C1.28828 13.9239 1.42188 11.7981 2.68281 10.5372L5.40625 7.81377C5.47891 7.74111 5.47891 7.62158 5.40625 7.54893L4.47344 6.61611C4.4382 6.58122 4.39061 6.56165 4.34102 6.56165C4.29142 6.56165 4.24383 6.58122 4.20859 6.61611L1.48516 9.33955C-0.497656 11.3224 -0.497656 14.531 1.48516 16.5114C3.46797 18.4919 6.67656 18.4942 8.65703 16.5114L11.3805 13.788C11.4531 13.7153 11.4531 13.5958 11.3805 13.5231L10.4523 12.595ZM16.5133 1.48564C14.5305 -0.497168 11.3219 -0.497168 9.34141 1.48564L6.61563 4.20908C6.58073 4.24432 6.56116 4.29191 6.56116 4.3415C6.56116 4.3911 6.58073 4.43869 6.61563 4.47393L7.54609 5.4044C7.61875 5.47705 7.73828 5.47705 7.81094 5.4044L10.5344 2.68096C11.7953 1.42002 13.9234 1.28643 15.3156 2.68096C16.7102 4.07549 16.5766 6.20127 15.3156 7.46221L12.5922 10.1856C12.5573 10.2209 12.5377 10.2685 12.5377 10.3181C12.5377 10.3677 12.5573 10.4152 12.5922 10.4505L13.525 11.3833C13.5977 11.456 13.7172 11.456 13.7898 11.3833L16.5133 8.65986C18.4937 6.67705 18.4937 3.46846 16.5133 1.48564ZM11.2984 5.72549C11.2632 5.69059 11.2156 5.67102 11.166 5.67102C11.1164 5.67102 11.0688 5.69059 11.0336 5.72549L5.725 11.0317C5.69011 11.067 5.67053 11.1146 5.67053 11.1642C5.67053 11.2138 5.69011 11.2613 5.725 11.2966L6.65313 12.2247C6.72578 12.2974 6.84531 12.2974 6.91797 12.2247L12.2242 6.91846C12.2969 6.8458 12.2969 6.72627 12.2242 6.65361L11.2984 5.72549Z"
        fill="#161616"
      />
    </svg>
  ),
  date: (props: IconProps) => (
    <svg
      {...props}
      className={`h-5 w-5 ${props.className || ""}`}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="currentColor"
    >
      <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
      <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
      <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
      <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
      <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
      <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
      <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
      <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
      <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
    </svg>
  ),
  breifcase: (props: IconProps) => (
    <svg
      {...props}
      className={`h-5 w-5 ${props.className || ""}`}
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3516 2.88974C15.3516 2.35197 14.9143 1.91602 14.3749 1.91602H1.63292C1.09352 1.91602 0.65625 2.35197 0.65625 2.88974V10.997C0.65625 11.5347 1.09352 11.9707 1.63292 11.9707H14.3749C14.9143 11.9707 15.3516 11.5347 15.3516 10.997V2.88974ZM1.57031 2.9707H14.2969V11.0566H1.57031V2.9707Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7109 2.75977V0.0527344H5.22656V2.75977H10.7109ZM6.14062 0.985254H9.65625V1.79209H6.14062V0.985254Z"
      />
    </svg>
  ),
  handshake: (props: IconProps) => (
    <svg
      {...props}
      className={`h-5 w-5 ${props.className || ""}`}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.63796 5.73572C2.79481 5.86625 2.98394 5.9521 3.18546 5.98424C3.38698 6.01637 3.59343 5.99361 3.78311 5.91835C3.97278 5.84308 4.13867 5.71809 4.26332 5.55652C4.38797 5.39496 4.46678 5.20278 4.49146 5.00022H18.0005C18.3983 5.00022 18.7798 4.84218 19.0611 4.56088C19.3424 4.27957 19.5005 3.89804 19.5005 3.50022V2.50022C19.5005 2.10239 19.3424 1.72086 19.0611 1.43956C18.7798 1.15825 18.3983 1.00022 18.0005 1.00022H4.49146C4.4668 0.7977 4.38804 0.605565 4.26345 0.444014C4.13886 0.282462 3.97304 0.15746 3.78344 0.0821501C3.59384 0.00684031 3.38744 -0.0159958 3.18596 0.0160426C2.98448 0.048081 2.79535 0.13381 2.63846 0.264218L0.404457 2.12472C0.277286 2.233 0.175229 2.36768 0.105382 2.5194C0.0355351 2.67112 -0.000424487 2.83624 3.78089e-06 3.00326C0.000432049 3.17029 0.0372379 3.33521 0.107862 3.48657C0.178486 3.63793 0.281232 3.77209 0.408957 3.87972L2.63796 5.73572ZM1.05046 2.88922L3.27896 1.03222C3.30215 1.01205 3.33172 1.00072 3.36246 1.00022C3.38296 1.00022 3.40346 1.00522 3.42196 1.01372C3.47096 1.03422 3.50196 1.08322 3.50046 1.13622V1.50022C3.50046 1.63283 3.55313 1.76 3.6469 1.85377C3.74067 1.94754 3.86785 2.00022 4.00046 2.00022H18.0005C18.1331 2.00022 18.2602 2.0529 18.354 2.14666C18.4478 2.24043 18.5005 2.36761 18.5005 2.50022V3.50022C18.5005 3.63283 18.4478 3.76 18.354 3.85377C18.2602 3.94754 18.1331 4.00022 18.0005 4.00022H4.00046C3.86785 4.00022 3.74067 4.0529 3.6469 4.14667C3.55313 4.24043 3.50046 4.36761 3.50046 4.50022V4.86422C3.50144 4.89008 3.49455 4.91563 3.48072 4.9375C3.46688 4.95937 3.44674 4.97653 3.42296 4.98672C3.3998 4.99794 3.37386 5.00212 3.34836 4.99874C3.32285 4.99536 3.29889 4.98458 3.27946 4.96772L1.05396 3.11472C1.03724 3.10068 1.0238 3.08315 1.01456 3.06338C1.00532 3.0436 1.00051 3.02205 1.00046 3.00022C1.00046 2.95772 1.01846 2.91722 1.05046 2.88922ZM27.363 5.26472C27.2061 5.13419 27.017 5.04834 26.8155 5.0162C26.6139 4.98406 26.4075 5.00682 26.2178 5.08209C26.0281 5.15736 25.8622 5.28235 25.7376 5.44391C25.6129 5.60548 25.5341 5.79765 25.5095 6.00022H12.0005C11.6026 6.00022 11.2211 6.15825 10.9398 6.43956C10.6585 6.72086 10.5005 7.10239 10.5005 7.50022V8.50022C10.5005 8.89804 10.6585 9.27958 10.9398 9.56088C11.2211 9.84218 11.6026 10.0002 12.0005 10.0002H25.5095C25.5333 10.2032 25.6116 10.3959 25.7361 10.5579C25.8606 10.72 26.0265 10.8454 26.2165 10.9208C26.4064 10.9963 26.6131 11.0189 26.8149 10.9864C27.0166 10.9539 27.2058 10.8675 27.3625 10.7362L29.5965 8.87572C29.7236 8.76744 29.8257 8.63275 29.8955 8.48103C29.9654 8.32931 30.0013 8.1642 30.0009 7.99718C30.0005 7.83015 29.9637 7.66522 29.893 7.51387C29.8224 7.36251 29.7197 7.22835 29.592 7.12072L27.363 5.26472ZM28.9505 8.11122L26.721 9.96822C26.7013 9.98459 26.6773 9.995 26.6519 9.99823C26.6265 10.0015 26.6007 9.99738 26.5776 9.98646C26.5544 9.97553 26.5349 9.95823 26.5212 9.93658C26.5075 9.91492 26.5003 9.88982 26.5005 9.86422V9.50022C26.5005 9.36761 26.4478 9.24043 26.354 9.14667C26.2602 9.0529 26.1331 9.00022 26.0005 9.00022H12.0005C11.8678 9.00022 11.7407 8.94754 11.6469 8.85377C11.5531 8.76 11.5005 8.63283 11.5005 8.50022V7.50022C11.5005 7.36761 11.5531 7.24043 11.6469 7.14667C11.7407 7.0529 11.8678 7.00022 12.0005 7.00022H26.0005C26.1331 7.00022 26.2602 6.94754 26.354 6.85377C26.4478 6.76 26.5005 6.63283 26.5005 6.50022V6.13622C26.4995 6.11036 26.5064 6.08481 26.5202 6.06294C26.534 6.04107 26.5542 6.02391 26.578 6.01372C26.601 6.00224 26.627 5.99791 26.6526 6.0013C26.6782 6.00468 26.7021 6.01562 26.7215 6.03272L28.946 7.88572C28.9628 7.89967 28.9765 7.91714 28.9859 7.93693C28.9953 7.95671 29.0003 7.97831 29.0005 8.00022C29.0006 8.02123 28.9962 8.04202 28.9876 8.06118C28.9789 8.08034 28.9663 8.0974 28.9505 8.11122ZM29.0005 13.5002L26.393 13.5042C26.0925 13.5033 25.7998 13.5999 25.5589 13.7795C25.318 13.9591 25.1419 14.212 25.057 14.5002H23.4705C23.2392 14.5011 23.011 14.4473 22.8045 14.3432L20.116 12.9962C19.4577 12.6706 18.7331 12.5012 17.9987 12.5012C17.2643 12.5012 16.5398 12.6706 15.8815 12.9962L15.75 13.0622L15.616 12.9942C14.9576 12.6689 14.2331 12.4996 13.4987 12.4996C12.7643 12.4996 12.0398 12.6689 11.3815 12.9942L8.69396 14.3407C8.48846 14.4457 8.26096 14.5002 8.03046 14.5002H4.94396C4.85907 14.2122 4.68308 13.9594 4.44238 13.7798C4.20169 13.6002 3.90926 13.5035 3.60896 13.5042L1.00046 13.5002C0.73524 13.5002 0.480886 13.6056 0.29335 13.7931C0.105813 13.9806 0.000456616 14.235 0.000456616 14.5002V22.5002C0.000456616 22.7654 0.105813 23.0198 0.29335 23.2073C0.480886 23.3949 0.73524 23.5002 1.00046 23.5002L3.50996 23.5042L5.00996 24.1292C4.9986 24.4509 5.07311 24.7699 5.22584 25.0533C5.37856 25.3367 5.60399 25.5743 5.87896 25.7417C6.08143 25.8629 6.30603 25.9426 6.53962 25.9759C6.77322 26.0093 7.01114 25.9958 7.23946 25.9362C7.25246 25.9327 7.26446 25.9262 7.27746 25.9222C7.38496 26.4022 7.68396 26.8172 8.10496 27.0722C8.30748 27.1931 8.53208 27.2723 8.76561 27.3053C8.99913 27.3382 9.23689 27.3243 9.46496 27.2642C9.47796 27.2607 9.48946 27.2542 9.50246 27.2507C9.55621 27.4886 9.65755 27.7131 9.80037 27.9107C9.94318 28.1083 10.1245 28.275 10.3335 28.4007C10.741 28.6457 11.2305 28.7162 11.6905 28.5952C11.702 28.5922 11.7125 28.5862 11.724 28.5832C11.7762 28.8173 11.8753 29.0385 12.0154 29.2332C12.1555 29.4279 12.3336 29.5922 12.539 29.7162L12.546 29.7202L12.56 29.7292C12.7618 29.8508 12.986 29.9307 13.2192 29.9642C13.4525 29.9976 13.69 29.9841 13.918 29.9242C14.2473 29.8389 14.545 29.66 14.775 29.4092L15.0665 29.6357C15.2507 29.7781 15.4615 29.8822 15.6866 29.9421C15.9116 30.0019 16.1463 30.0162 16.377 29.9842C16.6072 29.9541 16.8291 29.8781 17.0296 29.7608C17.23 29.6435 17.4049 29.4872 17.544 29.3012C17.833 28.9187 17.9555 28.4362 17.884 27.9622L17.906 27.9597C18.1357 27.9306 18.3573 27.8557 18.5577 27.7395C18.758 27.6233 18.9331 27.4682 19.0725 27.2832C19.3105 26.9746 19.4399 26.596 19.4405 26.2062C19.554 26.2132 19.668 26.2087 19.7805 26.1937C20.0098 26.1644 20.2309 26.0895 20.4308 25.9734C20.6307 25.8573 20.8054 25.7024 20.9445 25.5177C21.185 25.2077 21.3155 24.8267 21.3155 24.4342C21.3155 24.2342 21.283 24.0357 21.2185 23.8467C21.4644 23.7832 21.6928 23.6647 21.8865 23.5002L26.3865 23.5042H26.3895L29.0005 23.5002C29.2657 23.5002 29.52 23.3949 29.7076 23.2073C29.8951 23.0198 30.0005 22.7654 30.0005 22.5002V14.5002C30.0005 14.235 29.8951 13.9806 29.7076 13.7931C29.52 13.6056 29.2657 13.5002 29.0005 13.5002ZM19.672 13.8922L22.3545 15.2362C22.7007 15.4102 23.0829 15.5006 23.4705 15.5002H25.0535L25.832 22.5032L22.4615 22.5002C22.497 22.3386 22.5102 22.1729 22.5005 22.0077C22.4722 21.7135 22.3819 21.4286 22.2353 21.1719C22.0888 20.9153 21.8895 20.6926 21.6505 20.5187L16.6005 16.9867C16.2927 16.7663 15.9129 16.6708 15.5375 16.7196C15.1621 16.7683 14.8192 16.9576 14.578 17.2492L12.256 20.0262C12.0488 20.2722 11.7536 20.4274 11.4336 20.4587C11.1135 20.49 10.7939 20.3949 10.543 20.1937C10.4432 20.1144 10.378 19.9997 10.3608 19.8735C10.3437 19.7472 10.376 19.6192 10.451 19.5162L12.7565 16.2217C13.1384 15.6764 13.6501 15.2348 14.2455 14.9367L16.327 13.8937C16.8469 13.6366 17.419 13.5028 17.999 13.5025C18.579 13.5022 19.1518 13.6356 19.672 13.8922ZM1.00046 14.5002L3.60896 14.5042C3.6648 14.5042 3.72001 14.516 3.77099 14.5388C3.82196 14.5616 3.86756 14.5949 3.90479 14.6365C3.94202 14.6782 3.97005 14.7272 3.98705 14.7803C4.00406 14.8335 4.00965 14.8897 4.00346 14.9452L3.16296 22.5037L1.00046 22.5002V14.5002ZM6.39246 24.8837C6.2096 24.7719 6.0777 24.593 6.02492 24.3852C5.97214 24.1774 6.00266 23.9573 6.10996 23.7717L6.33096 23.3942C6.39968 23.2745 6.49879 23.175 6.61828 23.1058C6.73776 23.0366 6.87339 23.0002 7.01146 23.0002C7.15246 23.0002 7.29046 23.0392 7.41146 23.1117C7.65646 23.2592 7.80446 23.5257 7.80096 23.8117C7.80146 23.9557 7.76446 24.0967 7.69296 24.2217L7.47196 24.5987C7.36696 24.7822 7.19296 24.9157 6.98846 24.9692C6.88842 24.9953 6.78418 25.0012 6.68184 24.9865C6.5795 24.9719 6.48112 24.9369 6.39246 24.8837ZM8.61846 26.2142C8.43568 26.1023 8.30389 25.9233 8.2512 25.7156C8.19852 25.5078 8.22911 25.2877 8.33646 25.1022L8.55796 24.7237C8.62668 24.6041 8.72572 24.5047 8.8451 24.4355C8.96448 24.3663 9.09998 24.3298 9.23796 24.3297C9.37896 24.3297 9.51696 24.3687 9.63796 24.4412C10.0105 24.6717 10.1365 25.1537 9.92546 25.5372V25.5402L9.69896 25.9302L9.69596 25.9362C9.64392 26.0254 9.57473 26.1035 9.49238 26.1658C9.41003 26.2281 9.31614 26.2735 9.21615 26.2994C9.11615 26.3252 9.01203 26.331 8.90978 26.3164C8.80754 26.3018 8.70921 26.267 8.62046 26.2142H8.61846ZM10.8505 27.5422C10.6677 27.4324 10.5351 27.2554 10.4811 27.0491C10.4271 26.8428 10.4559 26.6235 10.5615 26.4382L10.5655 26.4327L10.7865 26.0542C10.79 26.0487 10.7925 26.0422 10.7955 26.0362C10.8476 25.9483 10.9165 25.8716 10.9984 25.8105C11.0802 25.7493 11.1733 25.7049 11.2723 25.6797C11.3713 25.6546 11.4744 25.6493 11.5755 25.664C11.6766 25.6788 11.7737 25.7133 11.8615 25.7657C12.2435 25.9957 12.3715 26.4887 12.1485 26.8747L11.9215 27.2647C11.8698 27.3537 11.801 27.4316 11.719 27.4939C11.6371 27.5561 11.5436 27.6014 11.4439 27.6272C11.3443 27.653 11.2405 27.6588 11.1387 27.6442C11.0368 27.6296 10.9388 27.595 10.8505 27.5422ZM13.67 28.9557C13.469 29.0092 13.255 28.9782 13.0765 28.8707L13.0695 28.8662C12.8879 28.7571 12.7565 28.5811 12.7033 28.3761C12.6501 28.1711 12.6794 27.9534 12.785 27.7697L12.9255 27.5277L13.015 27.3737C13.0672 27.2843 13.1367 27.2062 13.2195 27.144C13.3022 27.0817 13.3965 27.0365 13.4969 27.0111C13.5973 26.9856 13.7017 26.9804 13.8041 26.9957C13.9066 27.011 14.0049 27.0465 14.0935 27.1002C14.2755 27.2097 14.4073 27.3864 14.4604 27.5921C14.5136 27.7979 14.4838 28.0162 14.3775 28.2002L14.1465 28.5972C14.0415 28.7762 13.869 28.9057 13.6675 28.9557H13.67ZM20.233 22.7197C20.1284 22.6381 19.9957 22.6014 19.864 22.6176C19.7324 22.6338 19.6126 22.7017 19.531 22.8062C19.4493 22.9108 19.4126 23.0435 19.4288 23.1751C19.445 23.3068 19.5129 23.4266 19.6175 23.5082L20.0135 23.8182C20.0945 23.8806 20.1623 23.9584 20.2131 24.0471C20.2639 24.1358 20.2966 24.2337 20.3094 24.3352C20.3221 24.4366 20.3146 24.5396 20.2873 24.6381C20.2601 24.7366 20.2135 24.8288 20.1505 24.9092C20.0906 24.9891 20.0154 25.0563 19.9293 25.1067C19.8431 25.1572 19.7478 25.1899 19.6488 25.2031C19.5499 25.2162 19.4493 25.2094 19.353 25.1832C19.2567 25.157 19.1666 25.1117 19.088 25.0502L18.7595 24.7942C18.7083 24.7531 18.6495 24.7224 18.5865 24.704C18.5234 24.6856 18.4574 24.6798 18.3921 24.6869C18.3268 24.694 18.2636 24.7139 18.206 24.7454C18.1484 24.777 18.0976 24.8195 18.0565 24.8707C18.0153 24.9219 17.9847 24.9807 17.9662 25.0437C17.9478 25.1067 17.942 25.1728 17.9491 25.2381C17.9562 25.3033 17.9761 25.3666 18.0076 25.4242C18.0392 25.4818 18.0818 25.5326 18.133 25.5737L18.1415 25.5802C18.4795 25.8472 18.54 26.3362 18.277 26.6772C18.2169 26.7563 18.1418 26.8227 18.0559 26.8725C17.97 26.9223 17.875 26.9546 17.7765 26.9674C17.6781 26.9803 17.578 26.9734 17.4822 26.9473C17.3864 26.9212 17.2968 26.8763 17.2185 26.8152C17.1661 26.7749 17.1064 26.7453 17.0426 26.7281C16.9788 26.7108 16.9123 26.7064 16.8468 26.7149C16.7812 26.7234 16.718 26.7447 16.6608 26.7776C16.6035 26.8105 16.5533 26.8544 16.513 26.9067C16.4726 26.9591 16.443 27.0188 16.4258 27.0826C16.4086 27.1464 16.4041 27.2129 16.4126 27.2784C16.4211 27.3439 16.4424 27.4071 16.4753 27.4644C16.5082 27.5217 16.5521 27.5719 16.6045 27.6122C16.9295 27.8722 16.9975 28.3402 16.7595 28.6817L16.7415 28.7042C16.6808 28.7834 16.6051 28.8499 16.5188 28.8999C16.4324 28.9498 16.3371 28.9823 16.2382 28.9953C16.1393 29.0084 16.0388 29.0019 15.9424 28.9762C15.846 28.9504 15.7556 28.9059 15.6765 28.8452L15.305 28.5567C15.4956 28.1513 15.5291 27.6896 15.399 27.261C15.2688 26.8323 14.9843 26.4672 14.6005 26.2362C14.3989 26.1145 14.175 26.0346 13.942 26.0011C13.709 25.9676 13.4716 25.9812 13.244 26.0412C13.2305 26.0447 13.219 26.0517 13.2055 26.0552C13.1518 25.8174 13.0504 25.5928 12.9076 25.3952C12.7648 25.1976 12.5834 25.0309 12.3745 24.9052C12.1728 24.7838 11.9489 24.7041 11.7159 24.6707C11.4829 24.6373 11.2456 24.6509 11.018 24.7107C11.005 24.7142 10.9935 24.7207 10.981 24.7242C10.9287 24.4905 10.83 24.2698 10.6907 24.075C10.5514 23.8803 10.3743 23.7155 10.17 23.5906C9.96576 23.4657 9.73844 23.3831 9.50161 23.3478C9.26478 23.3126 9.02327 23.3253 8.79146 23.3852C8.77846 23.3887 8.76696 23.3957 8.75396 23.3992C8.70056 23.1617 8.59974 22.9374 8.45754 22.7398C8.31535 22.5422 8.13471 22.3753 7.92646 22.2492C7.72364 22.1281 7.49875 22.0485 7.26489 22.0151C7.03103 21.9816 6.79286 21.9951 6.56423 22.0545C6.33559 22.114 6.12107 22.2183 5.93312 22.3614C5.74518 22.5046 5.58757 22.6836 5.46946 22.8882L5.30696 23.1662L4.15046 22.6872L4.94746 15.5002H8.03046C8.41717 15.5007 8.79866 15.4108 9.14446 15.2377L11.826 13.8937C12.6757 13.4762 13.6512 13.3928 14.5595 13.6602L13.797 14.0427C13.0525 14.4153 12.4128 14.9678 11.936 15.6502L9.63346 18.9407C9.41136 19.2519 9.31702 19.6364 9.36985 20.0151C9.42268 20.3937 9.61866 20.7377 9.91746 20.9762C10.3732 21.3403 10.9532 21.5117 11.5336 21.454C12.114 21.3962 12.6489 21.1139 13.024 20.6672L15.344 17.8927C15.4249 17.7943 15.5403 17.7305 15.6667 17.7143C15.7931 17.6982 15.9209 17.7309 16.024 17.8057L21.058 21.3242C21.3065 21.5042 21.467 21.7802 21.5005 22.0852C21.522 22.3052 21.448 22.5232 21.298 22.6852C21.1551 22.8197 20.9681 22.8974 20.772 22.9037C20.5759 22.9101 20.3842 22.8447 20.233 22.7197ZM29.0005 22.5002L26.8385 22.5037L26.0005 14.9452C25.9943 14.8896 25.9999 14.8334 26.0169 14.7801C26.034 14.7268 26.0621 14.6778 26.0995 14.6362C26.1368 14.5945 26.1825 14.5612 26.2336 14.5385C26.2847 14.5158 26.34 14.5041 26.396 14.5042L29.0005 14.5002V22.5002Z"
        fill="black"
      />
    </svg>
  ),
  wallet: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
      />
    </svg>
  ),
  loading: (props: IconProps) => (
    <svg
      {...props}
      className={`h-6 w-6 inline text-gray-600 animate-spin fill-gray-300${props.className || ""
        }`}
      aria-hidden="true"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  ),
};
