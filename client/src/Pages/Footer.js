import React from "react";

const Footer = () => {
  return (
    <>
      <section
        className="flex py-10 lg:py-20 justify-around items-center bg-slate-100"
        id="contact"
      >
        <div className="w-32 h-32  lg:h-60 md:w-96 lg:w-96 ">
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.594987416864!2d93.69909872430198!3d24.360597078258934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374eb3a01ca079e1%3A0x5883788dd40e5!2sTuibuang%20Community%20Hall!5e0!3m2!1sen!2sin!4v1689537744464!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="lg:py-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-8 text-gray-900">
            Contact Us
          </h1>
          <div className="flex mb-5">
            <svg
              width="17"
              height="22"
              viewBox="0 0 17 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 0C13.2999 0 17 3.70012 17 8.25C17 13.9686 9.553 21.4816 9.23675 21.7992C9.102 21.9326 8.926 22 8.75 22C8.574 22 8.398 21.9326 8.26325 21.7992C7.947 21.4816 0.5 13.9686 0.5 8.25C0.5 3.70012 4.20012 0 8.75 0ZM8.75 20.3184C10.3917 18.5611 15.625 12.6184 15.625 8.25C15.625 4.45913 12.5409 1.375 8.75 1.375C4.95913 1.375 1.875 4.45913 1.875 8.25C1.875 12.6143 7.10825 18.5611 8.75 20.3184Z"
                fill="#9E3040"
              />
              <path
                d="M8.75 4.125C11.0243 4.125 12.875 5.97575 12.875 8.25C12.875 10.5243 11.0243 12.375 8.75 12.375C6.47575 12.375 4.625 10.5243 4.625 8.25C4.625 5.97575 6.47575 4.125 8.75 4.125ZM8.75 11C10.2666 11 11.5 9.76662 11.5 8.25C11.5 6.73337 10.2666 5.5 8.75 5.5C7.23338 5.5 6 6.73337 6 8.25C6 9.76662 7.23338 11 8.75 11Z"
                fill="#9E3040"
              />
            </svg>
            <p className="mx-5">
              Tuibuong traffic point <br />
              Near Cowboy Cafe
            </p>
          </div>
          <div className="flex mb-5">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3709 13.6282C16.9205 13.1592 16.3773 12.9084 15.8015 12.9084C15.2304 12.9084 14.6825 13.1545 14.2135 13.6235L12.7463 15.0861C12.6255 15.0211 12.5048 14.9608 12.3887 14.9004C12.2216 14.8168 12.0637 14.7379 11.929 14.6543C10.5546 13.7814 9.30561 12.6438 8.10765 11.1719C7.52724 10.4382 7.13721 9.82069 6.85397 9.19385C7.23472 8.8456 7.5876 8.48343 7.93121 8.13518C8.06122 8.00517 8.19123 7.87052 8.32124 7.74051C9.29632 6.76543 9.29632 5.50246 8.32124 4.52738L7.05363 3.25977C6.90969 3.11583 6.76111 2.96725 6.62181 2.81866C6.34321 2.53078 6.05069 2.23361 5.74888 1.95502C5.29848 1.50927 4.75987 1.27246 4.19339 1.27246C3.62691 1.27246 3.07901 1.50927 2.61468 1.95502C2.61004 1.95966 2.61004 1.95966 2.6054 1.96431L1.02669 3.55694C0.432356 4.15128 0.0933983 4.87562 0.0191063 5.71605C-0.0923317 7.07188 0.306988 8.33485 0.613442 9.16134C1.36565 11.1904 2.48932 13.071 4.16553 15.0861C6.19927 17.5146 8.64627 19.4322 11.4415 20.7834C12.5094 21.2895 13.9349 21.8885 15.5276 21.9906C15.6251 21.9953 15.7272 21.9999 15.8201 21.9999C16.8927 21.9999 17.7935 21.6145 18.4992 20.8484C18.5039 20.8391 18.5132 20.8345 18.5178 20.8252C18.7593 20.5327 19.0379 20.268 19.3304 19.9848C19.53 19.7944 19.7343 19.5947 19.934 19.3858C20.3937 18.9075 20.6351 18.3503 20.6351 17.7792C20.6351 17.2035 20.389 16.6509 19.9201 16.1866L17.3709 13.6282ZM19.0332 18.5175C19.0286 18.5175 19.0286 18.5221 19.0332 18.5175C18.8521 18.7125 18.6664 18.889 18.4667 19.084C18.1649 19.3719 17.8585 19.6737 17.5706 20.0126C17.1016 20.5141 16.5491 20.7509 15.8247 20.7509C15.7551 20.7509 15.6808 20.7509 15.6111 20.7463C14.2321 20.658 12.9506 20.1194 11.9894 19.6597C9.36133 18.3875 7.05363 16.5813 5.13597 14.2921C3.55262 12.3838 2.49396 10.6193 1.79283 8.72488C1.36101 7.56871 1.20314 6.66792 1.27278 5.8182C1.31922 5.27494 1.52816 4.82455 1.91355 4.43916L3.4969 2.85581C3.72442 2.64222 3.96587 2.52614 4.20268 2.52614C4.4952 2.52614 4.73201 2.70258 4.88059 2.85117C4.88523 2.85581 4.88988 2.86045 4.89452 2.8651C5.17776 3.12976 5.44707 3.40371 5.7303 3.69624C5.87425 3.84482 6.02283 3.99341 6.17141 4.14663L7.43902 5.41424C7.93121 5.90643 7.93121 6.36146 7.43902 6.85365C7.30437 6.9883 7.17436 7.12296 7.0397 7.25297C6.64967 7.65229 6.27821 8.02375 5.87425 8.38592C5.86496 8.39521 5.85567 8.39985 5.85103 8.40914C5.45171 8.80846 5.526 9.19849 5.60958 9.46315C5.61422 9.47708 5.61887 9.49101 5.62351 9.50494C5.95318 10.3036 6.41751 11.0558 7.12328 11.9519L7.12792 11.9566C8.40946 13.5353 9.76065 14.7657 11.2511 15.7083C11.4415 15.8291 11.6365 15.9266 11.8222 16.0194C11.9894 16.103 12.1473 16.1819 12.2819 16.2655C12.3005 16.2748 12.3191 16.2887 12.3377 16.298C12.4955 16.377 12.6441 16.4141 12.7973 16.4141C13.1827 16.4141 13.4242 16.1727 13.5031 16.0937L15.0911 14.5057C15.249 14.3479 15.4997 14.1575 15.7922 14.1575C16.0801 14.1575 16.3169 14.3386 16.4609 14.4964C16.4655 14.5011 16.4655 14.5011 16.4701 14.5057L19.0286 17.0642C19.5068 17.5378 19.5068 18.0253 19.0332 18.5175Z"
                fill="#9E3040"
              />
              <path
                d="M11.8734 5.23324C13.0899 5.43755 14.195 6.01331 15.0772 6.89553C15.9595 7.77774 16.5306 8.88284 16.7395 10.0994C16.7906 10.4058 17.0553 10.6194 17.3571 10.6194C17.3942 10.6194 17.4267 10.6148 17.4639 10.6101C17.8075 10.5544 18.035 10.2294 17.9793 9.88578C17.7285 8.41387 17.032 7.07197 15.9687 6.00867C14.9054 4.94536 13.5635 4.24887 12.0916 3.99814C11.748 3.94242 11.4276 4.16994 11.3673 4.5089C11.3069 4.84785 11.5298 5.17752 11.8734 5.23324Z"
                fill="#9E3040"
              />
              <path
                d="M21.9586 9.70466C21.5454 7.28089 20.4031 5.07534 18.648 3.32019C16.8928 1.56505 14.6873 0.422806 12.2635 0.0095565C11.9245 -0.0508058 11.6041 0.181357 11.5438 0.520314C11.4881 0.863915 11.7156 1.1843 12.0592 1.24466C14.2229 1.61148 16.1963 2.63764 17.7657 4.20241C19.3352 5.77183 20.3567 7.74521 20.7235 9.90897C20.7746 10.2154 21.0392 10.429 21.341 10.429C21.3782 10.429 21.4107 10.4244 21.4478 10.4197C21.7868 10.3686 22.019 10.0436 21.9586 9.70466Z"
                fill="#9E3040"
              />
            </svg>

            <p className="mx-5"> Tuibuong, Lamka</p>
          </div>
          <div className="flex">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7651 0H2.89233C1.2969 0 0 1.2969 0 2.89233V15.1077C0 16.7031 1.2969 18 2.89233 18H20.7602C22.3556 18 23.6525 16.7031 23.6525 15.1077V2.89723C23.6574 1.30179 22.3605 0 20.7651 0ZM22.3361 15.1077C22.3361 15.9739 21.6313 16.6786 20.7651 16.6786H2.89233C2.0261 16.6786 1.32137 15.9739 1.32137 15.1077V2.89723C1.32137 2.03099 2.0261 1.32626 2.89233 1.32626H20.7602C21.6264 1.32626 22.3312 2.03099 22.3312 2.89723V15.1077H22.3361Z"
                fill="#9E3040"
              />
              <path
                d="M14.9168 8.84833L20.7015 3.66072C20.9706 3.41603 20.9951 3.00004 20.7504 2.72598C20.5057 2.45681 20.0897 2.43234 19.8157 2.67704L11.8385 9.83691L10.2822 8.44702C10.2773 8.44213 10.2724 8.43723 10.2724 8.43234C10.2382 8.39808 10.2039 8.36872 10.1648 8.33935L3.83199 2.67214C3.55793 2.42745 3.14194 2.45191 2.89724 2.72598C2.65254 3.00004 2.67701 3.41603 2.95107 3.66072L8.80426 8.89237L2.97554 14.3491C2.71127 14.5987 2.69659 15.0147 2.94618 15.2839C3.07832 15.4209 3.2545 15.4943 3.43068 15.4943C3.59218 15.4943 3.75368 15.4356 3.88093 15.3181L9.79773 9.78307L11.403 11.217C11.5302 11.3296 11.6868 11.3834 11.8434 11.3834C12 11.3834 12.1615 11.3247 12.2839 11.2121L13.9331 9.73413L19.8157 15.323C19.9429 15.4454 20.1093 15.5041 20.2708 15.5041C20.447 15.5041 20.6183 15.4356 20.7504 15.2986C21 15.0343 20.9902 14.6134 20.726 14.3638L14.9168 8.84833Z"
                fill="#9E3040"
              />
            </svg>

            <p className="mx-5">support@orion.com</p>
          </div>
        </div>
      </section>
      <section className="bg-up-nav-color text-white">
        <p className="text-center">
          copyright &copy; 2023 Orion Academy of Arts and Science
        </p>
      </section>
    </>
  );
};

export default Footer;
