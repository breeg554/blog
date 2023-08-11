import React from 'react';
import { ClassName } from '@components/types';

export const LogoSvg: React.FC<ClassName> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 359 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>frontendcorner logo</title>
      <path
        d="M59.3324 18.0909V23.4602H44.5966V18.0909H59.3324ZM47.669 41V16.9276C47.669 15.1577 48.0021 13.6911 48.6683 12.5277C49.3345 11.3544 50.2592 10.4794 51.4425 9.9027C52.6257 9.31605 53.9929 9.02273 55.544 9.02273C56.5582 9.02273 57.5128 9.10227 58.4077 9.26136C59.3125 9.41051 59.9837 9.54474 60.4212 9.66406L59.2578 15.0036C58.9893 14.9141 58.6612 14.8395 58.2734 14.7798C57.8956 14.7202 57.5376 14.6903 57.1996 14.6903C56.3445 14.6903 55.7578 14.8793 55.4396 15.2571C55.1214 15.6349 54.9624 16.152 54.9624 16.8082V41H47.669ZM62.8411 41V18.0909H69.9256V22.267H70.1642C70.5819 20.7557 71.263 19.6321 72.2076 18.8963C73.1522 18.1506 74.2509 17.7777 75.5037 17.7777C75.8418 17.7777 76.1898 17.8026 76.5478 17.8523C76.9057 17.892 77.2388 17.9567 77.5471 18.0462V24.3849C77.199 24.2656 76.7417 24.1712 76.1749 24.1016C75.6181 24.032 75.1209 23.9972 74.6834 23.9972C73.8184 23.9972 73.0378 24.1911 72.3418 24.5788C71.6557 24.9567 71.1138 25.4886 70.7161 26.1747C70.3283 26.8509 70.1344 27.6463 70.1344 28.5611V41H62.8411ZM90.0233 41.4325C87.617 41.4325 85.5488 40.9403 83.8187 39.956C82.0985 38.9616 80.7711 37.5795 79.8365 35.8097C78.9118 34.0298 78.4494 31.9666 78.4494 29.62C78.4494 27.2635 78.9118 25.2003 79.8365 23.4304C80.7711 21.6506 82.0985 20.2685 83.8187 19.2841C85.5488 18.2898 87.617 17.7926 90.0233 17.7926C92.4295 17.7926 94.4927 18.2898 96.2129 19.2841C97.943 20.2685 99.2704 21.6506 100.195 23.4304C101.13 25.2003 101.597 27.2635 101.597 29.62C101.597 31.9666 101.13 34.0298 100.195 35.8097C99.2704 37.5795 97.943 38.9616 96.2129 39.956C94.4927 40.9403 92.4295 41.4325 90.0233 41.4325ZM90.068 35.929C90.943 35.929 91.6838 35.6605 92.2903 35.1236C92.8968 34.5866 93.3592 33.8409 93.6774 32.8864C94.0055 31.9318 94.1696 30.8281 94.1696 29.5753C94.1696 28.3026 94.0055 27.1889 93.6774 26.2344C93.3592 25.2798 92.8968 24.5341 92.2903 23.9972C91.6838 23.4602 90.943 23.1918 90.068 23.1918C89.1632 23.1918 88.3975 23.4602 87.7711 23.9972C87.1547 24.5341 86.6824 25.2798 86.3542 26.2344C86.036 27.1889 85.877 28.3026 85.877 29.5753C85.877 30.8281 86.036 31.9318 86.3542 32.8864C86.6824 33.8409 87.1547 34.5866 87.7711 35.1236C88.3975 35.6605 89.1632 35.929 90.068 35.929ZM112.627 27.9347V41H105.333V18.0909H112.269V22.2969H112.522C113.029 20.8949 113.894 19.7962 115.117 19.0007C116.34 18.1953 117.797 17.7926 119.487 17.7926C121.098 17.7926 122.495 18.1555 123.678 18.8814C124.872 19.5973 125.796 20.6016 126.453 21.8942C127.119 23.1768 127.447 24.6783 127.437 26.3984V41H120.144V27.8303C120.154 26.5575 119.83 25.5632 119.174 24.8473C118.528 24.1314 117.628 23.7734 116.475 23.7734C115.709 23.7734 115.033 23.9425 114.446 24.2805C113.869 24.6087 113.422 25.081 113.104 25.6974C112.796 26.3139 112.637 27.0597 112.627 27.9347ZM144.884 18.0909V23.4602H130.431V18.0909H144.884ZM133.459 12.6023H140.752V33.7962C140.752 34.2436 140.822 34.6065 140.961 34.8849C141.11 35.1534 141.324 35.3473 141.602 35.4666C141.881 35.576 142.214 35.6307 142.602 35.6307C142.88 35.6307 143.173 35.6058 143.482 35.5561C143.8 35.4964 144.038 35.4467 144.197 35.407L145.301 40.6719C144.953 40.7713 144.461 40.8956 143.825 41.0447C143.198 41.1939 142.447 41.2884 141.572 41.3281C139.862 41.4077 138.396 41.2088 137.173 40.7315C135.96 40.2443 135.03 39.4886 134.384 38.4645C133.747 37.4403 133.439 36.1527 133.459 34.6016V12.6023ZM159.067 41.4325C156.671 41.4325 154.603 40.9602 152.863 40.0156C151.133 39.0611 149.8 37.7038 148.866 35.9439C147.941 34.174 147.479 32.071 147.479 29.6349C147.479 27.2685 147.946 25.2003 148.881 23.4304C149.815 21.6506 151.133 20.2685 152.833 19.2841C154.533 18.2898 156.537 17.7926 158.844 17.7926C160.474 17.7926 161.966 18.0462 163.318 18.5533C164.67 19.0604 165.839 19.8111 166.823 20.8054C167.808 21.7997 168.573 23.0277 169.12 24.4893C169.667 25.9411 169.94 27.6065 169.94 29.4858V31.3054H150.029V27.0696H163.154C163.144 26.294 162.96 25.603 162.602 24.9964C162.244 24.3899 161.752 23.9176 161.126 23.5795C160.509 23.2315 159.798 23.0575 158.993 23.0575C158.178 23.0575 157.447 23.2415 156.8 23.6094C156.154 23.9673 155.642 24.4595 155.264 25.0859C154.886 25.7024 154.688 26.4034 154.668 27.1889V31.4993C154.668 32.4339 154.852 33.2543 155.219 33.9602C155.587 34.6562 156.109 35.1982 156.786 35.5859C157.462 35.9737 158.267 36.1676 159.202 36.1676C159.848 36.1676 160.435 36.0781 160.962 35.8991C161.489 35.7202 161.941 35.4567 162.319 35.1087C162.697 34.7607 162.98 34.3331 163.169 33.826L169.866 34.0199C169.587 35.5213 168.976 36.8288 168.031 37.9425C167.097 39.0462 165.869 39.9062 164.347 40.5227C162.826 41.1293 161.066 41.4325 159.067 41.4325ZM180.959 27.9347V41H173.665V18.0909H180.601V22.2969H180.854C181.361 20.8949 182.226 19.7962 183.449 19.0007C184.672 18.1953 186.129 17.7926 187.819 17.7926C189.43 17.7926 190.827 18.1555 192.01 18.8814C193.204 19.5973 194.128 20.6016 194.785 21.8942C195.451 23.1768 195.779 24.6783 195.769 26.3984V41H188.476V27.8303C188.486 26.5575 188.162 25.5632 187.506 24.8473C186.86 24.1314 185.96 23.7734 184.807 23.7734C184.041 23.7734 183.365 23.9425 182.778 24.2805C182.202 24.6087 181.754 25.081 181.436 25.6974C181.128 26.3139 180.969 27.0597 180.959 27.9347ZM208.652 41.3281C206.961 41.3281 205.425 40.8906 204.043 40.0156C202.661 39.1406 201.557 37.8281 200.732 36.0781C199.907 34.3281 199.494 32.1555 199.494 29.5604C199.494 26.8658 199.922 24.6484 200.777 22.9084C201.632 21.1683 202.75 19.8807 204.132 19.0455C205.525 18.2102 207.021 17.7926 208.622 17.7926C209.825 17.7926 210.854 18.0014 211.709 18.419C212.564 18.8267 213.27 19.3537 213.827 20C214.384 20.6463 214.806 21.3175 215.095 22.0135H215.244V10.4545H222.537V41H215.319V37.2862H215.095C214.787 37.9922 214.349 38.6534 213.782 39.2699C213.216 39.8864 212.505 40.3835 211.65 40.7614C210.804 41.1392 209.805 41.3281 208.652 41.3281ZM211.187 35.6456C212.072 35.6456 212.828 35.397 213.454 34.8999C214.081 34.3928 214.563 33.6818 214.901 32.767C215.239 31.8523 215.408 30.7784 215.408 29.5455C215.408 28.2926 215.239 27.2138 214.901 26.3089C214.573 25.4041 214.091 24.7081 213.454 24.2209C212.828 23.7337 212.072 23.4901 211.187 23.4901C210.282 23.4901 209.517 23.7386 208.89 24.2358C208.264 24.733 207.787 25.4339 207.458 26.3388C207.14 27.2436 206.981 28.3125 206.981 29.5455C206.981 30.7784 207.145 31.8523 207.473 32.767C207.801 33.6818 208.274 34.3928 208.89 34.8999C209.517 35.397 210.282 35.6456 211.187 35.6456ZM237.605 41.4474C235.318 41.4474 233.354 40.9453 231.714 39.9411C230.083 38.9368 228.825 37.5497 227.94 35.7798C227.065 34 226.628 31.9517 226.628 29.6349C226.628 27.3082 227.075 25.255 227.97 23.4751C228.865 21.6854 230.128 20.2933 231.758 19.299C233.399 18.2947 235.338 17.7926 237.575 17.7926C239.434 17.7926 241.08 18.1357 242.512 18.8217C243.954 19.4979 245.102 20.4574 245.957 21.7003C246.812 22.9332 247.3 24.375 247.419 26.0256H242.258C242.05 24.9219 241.552 24.0021 240.767 23.2663C239.991 22.5206 238.952 22.1477 237.65 22.1477C236.546 22.1477 235.577 22.446 234.741 23.0426C233.906 23.6293 233.255 24.4744 232.787 25.5781C232.33 26.6818 232.101 28.0043 232.101 29.5455C232.101 31.1065 232.33 32.4489 232.787 33.5724C233.245 34.6861 233.886 35.5462 234.711 36.1527C235.547 36.7493 236.526 37.0476 237.65 37.0476C238.445 37.0476 239.156 36.8984 239.782 36.6001C240.419 36.2919 240.951 35.8494 241.378 35.2727C241.806 34.696 242.099 33.995 242.258 33.1697H247.419C247.29 34.7905 246.812 36.2273 245.987 37.4801C245.162 38.723 244.038 39.6974 242.616 40.4034C241.194 41.0994 239.524 41.4474 237.605 41.4474ZM261.845 41.4474C259.608 41.4474 257.669 40.9553 256.028 39.9709C254.388 38.9865 253.115 37.6094 252.21 35.8395C251.315 34.0696 250.868 32.0014 250.868 29.6349C250.868 27.2685 251.315 25.1953 252.21 23.4155C253.115 21.6357 254.388 20.2536 256.028 19.2692C257.669 18.2848 259.608 17.7926 261.845 17.7926C264.082 17.7926 266.021 18.2848 267.662 19.2692C269.303 20.2536 270.57 21.6357 271.465 23.4155C272.37 25.1953 272.822 27.2685 272.822 29.6349C272.822 32.0014 272.37 34.0696 271.465 35.8395C270.57 37.6094 269.303 38.9865 267.662 39.9709C266.021 40.9553 264.082 41.4474 261.845 41.4474ZM261.875 37.1222C263.088 37.1222 264.102 36.7891 264.918 36.1229C265.733 35.4467 266.339 34.5419 266.737 33.4084C267.145 32.2749 267.349 31.0121 267.349 29.62C267.349 28.218 267.145 26.9503 266.737 25.8168C266.339 24.6733 265.733 23.7635 264.918 23.0874C264.102 22.4112 263.088 22.0732 261.875 22.0732C260.632 22.0732 259.598 22.4112 258.773 23.0874C257.957 23.7635 257.346 24.6733 256.938 25.8168C256.54 26.9503 256.342 28.218 256.342 29.62C256.342 31.0121 256.54 32.2749 256.938 33.4084C257.346 34.5419 257.957 35.4467 258.773 36.1229C259.598 36.7891 260.632 37.1222 261.875 37.1222ZM277.405 41V18.0909H282.64V21.9091H282.879C283.296 20.5866 284.012 19.5675 285.026 18.8516C286.051 18.1257 287.219 17.7628 288.531 17.7628C288.83 17.7628 289.163 17.7777 289.531 17.8075C289.909 17.8274 290.222 17.8622 290.47 17.9119V22.8786C290.242 22.799 289.879 22.7294 289.382 22.6697C288.894 22.6001 288.422 22.5653 287.965 22.5653C286.98 22.5653 286.095 22.7791 285.31 23.2067C284.534 23.6243 283.923 24.206 283.475 24.9517C283.028 25.6974 282.804 26.5575 282.804 27.532V41H277.405ZM299.456 27.5767V41H294.057V18.0909H299.218V21.9837H299.486C300.013 20.701 300.854 19.6818 302.007 18.9261C303.17 18.1705 304.607 17.7926 306.317 17.7926C307.898 17.7926 309.275 18.1307 310.449 18.8068C311.632 19.483 312.547 20.4624 313.193 21.745C313.849 23.0277 314.172 24.5838 314.162 26.4134V41H308.763V27.2486C308.763 25.7173 308.366 24.5192 307.57 23.6541C306.785 22.7891 305.696 22.3565 304.304 22.3565C303.359 22.3565 302.519 22.5653 301.783 22.983C301.057 23.3906 300.486 23.9822 300.068 24.7578C299.66 25.5334 299.456 26.473 299.456 27.5767ZM329.793 41.4474C327.496 41.4474 325.513 40.9702 323.842 40.0156C322.182 39.0511 320.904 37.6889 320.009 35.929C319.114 34.1591 318.667 32.076 318.667 29.6797C318.667 27.3232 319.114 25.255 320.009 23.4751C320.914 21.6854 322.177 20.2933 323.797 19.299C325.418 18.2947 327.322 17.7926 329.51 17.7926C330.922 17.7926 332.254 18.0213 333.507 18.4787C334.77 18.9261 335.883 19.6222 336.848 20.5668C337.822 21.5114 338.588 22.7145 339.145 24.1761C339.702 25.6278 339.98 27.358 339.98 29.3665V31.022H321.202V27.3828H334.805C334.795 26.3487 334.571 25.429 334.133 24.6236C333.696 23.8082 333.084 23.1669 332.299 22.6996C331.523 22.2322 330.618 21.9986 329.584 21.9986C328.481 21.9986 327.511 22.267 326.676 22.804C325.841 23.331 325.189 24.027 324.722 24.892C324.265 25.7472 324.031 26.6868 324.021 27.7109V30.8878C324.021 32.2202 324.265 33.3636 324.752 34.3182C325.239 35.2628 325.92 35.9886 326.795 36.4957C327.67 36.9929 328.694 37.2415 329.868 37.2415C330.653 37.2415 331.364 37.1321 332.001 36.9134C332.637 36.6847 333.189 36.3516 333.656 35.9141C334.123 35.4766 334.476 34.9347 334.715 34.2884L339.756 34.8551C339.438 36.1875 338.831 37.3509 337.937 38.3452C337.052 39.3295 335.918 40.0952 334.536 40.642C333.154 41.179 331.573 41.4474 329.793 41.4474ZM344.548 41V18.0909H349.783V21.9091H350.021C350.439 20.5866 351.155 19.5675 352.169 18.8516C353.193 18.1257 354.362 17.7628 355.674 17.7628C355.972 17.7628 356.305 17.7777 356.673 17.8075C357.051 17.8274 357.364 17.8622 357.613 17.9119V22.8786C357.384 22.799 357.021 22.7294 356.524 22.6697C356.037 22.6001 355.565 22.5653 355.107 22.5653C354.123 22.5653 353.238 22.7791 352.452 23.2067C351.677 23.6243 351.065 24.206 350.618 24.9517C350.17 25.6974 349.947 26.5575 349.947 27.532V41H344.548Z"
        fill="currentColor"
      />
      <path
        d="M27.81 25.92L5.58 8.01L10.98 2.61L38.88 25.92L10.98 48.24L5.58 42.84L27.81 25.92Z"
        fill="#3B82F6"
      />
    </svg>
  );
};
