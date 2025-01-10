"use client"
import { FC, SVGProps } from "react";
import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";

export const LogoText: FC<SVGProps<SVGSVGElement>> = (svgProps) => (
  <button onClick={() => redirect(routes.home)} className="w-36 h-20">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 2190 945"
      {...svgProps}
    >
      <path
        d="M0 0h2189.27v944.349H0z"
        style={{
          fill: "none",
        }}
      />
      <path
        d="M296.114 165.102a102.84 102.84 0 0 1 28.946-25.162l15.246-8.892a102.309 102.309 0 0 1 27.229-11.004l10.3-2.517a101.913 101.913 0 0 1 23.242-2.916l12.471-.125c8.141-.079 16.266.816 24.195 2.671l12.013 2.804a102.2 102.2 0 0 1 21.087 7.437l10.121 4.871a102.693 102.693 0 0 1 18.879 11.767c40.488 9.962 103.371 31.387 156.892 45.991 17.775 4.855 34.4 8.913 48.479 11.25 7.946 1.317 14.367 2.959 18.621 1.925 29.975-7.283 48.992-13.166 65.008-17.854l3.946-2.15c.213-.087 4.234-1.237 12.109-2.921-.913.025-1.513.038-1.513.038s8.271-1.421 19.846-3.6a45.343 45.343 0 0 1 3.671-.533c.1-.017.158-.025.162-.025 2.025-.455 4.079-.846 6.159-1.18 11.733-1.879 24.945-3.429 41.195-4.525a102.156 102.156 0 0 1 20.063-4.133l11.129-1.15a102.091 102.091 0 0 1 30.683 1.483l14.567 2.946c21.446-10.75 49.954-22.15 76.167-30.466l12.391-9.267a44.372 44.372 0 0 1 6.705-4.133l16.725-8.334a43.6 43.6 0 0 1 7.216-2.833l17.754-5.204a43.626 43.626 0 0 1 7.555-1.509l18.383-2.008a43.718 43.718 0 0 1 7.742-.154l18.616 1.283c2.617.179 5.217.596 7.763 1.246l18.387 4.675a43.62 43.62 0 0 1 7.546 2.675l17.596 8.113a42.546 42.546 0 0 1 3.579 1.858 326.573 326.573 0 0 1 8.417 5.025c36.229 8.079 65.666 21.583 89.875 37.796 21.233-10.413 48.4-21.25 73.504-29.225l12.396-9.271a44.313 44.313 0 0 1 6.704-4.133l16.725-8.334a43.611 43.611 0 0 1 7.217-2.833l17.754-5.204a43.615 43.615 0 0 1 7.554-1.509l18.383-2.008a43.72 43.72 0 0 1 7.742-.154l18.617 1.283c2.616.179 5.216.596 7.762 1.246l18.388 4.675a43.64 43.64 0 0 1 7.545 2.675l17.596 8.113a42.546 42.546 0 0 1 3.579 1.858 343.525 343.525 0 0 1 8.442 5.037c29.133 6.53 53.858 16.609 75.017 28.759l4.566-1.45a43.362 43.362 0 0 1 5.48-1.354c22.033-3.963 41.775-5.013 60.179-4.455l19.875-10.258a43.822 43.822 0 0 1 10.391-3.792l26.138-5.929a43.835 43.835 0 0 1 11.2-1.058l27.221.962c3.758.13 7.483.75 11.083 1.834l25.458 7.683a43.815 43.815 0 0 1 10.075 4.492s10.05 6.1 10.046 6.1a292.864 292.864 0 0 1 18.759-.025l19.883-10.267a43.83 43.83 0 0 1 10.392-3.792l26.137-5.929a43.887 43.887 0 0 1 11.204-1.058l27.217.962c3.758.13 7.483.75 11.087 1.834l25.455 7.683a43.853 43.853 0 0 1 10.075 4.492l19.812 12.025a102.358 102.358 0 0 1 26.617 12.816l12.287 8.288a102.86 102.86 0 0 1 22.654 20.829l9.217 11.458a103.623 103.623 0 0 1 15.829 27.38l5.817 14.95a104.074 104.074 0 0 1 6.992 33.35l.841 19.908a104.134 104.134 0 0 1-3.746 32.412l-4.65 16.655a103.75 103.75 0 0 1-13.883 30.079l-10.087 14.971a103.169 103.169 0 0 1-9.755 12.337c-.17.188-.345.371-.516.558-4.113 37.738-9.05 72.78-12.484 88.88a1682.407 1682.407 0 0 0-8.45 42.179l2.609 3.212a103.468 103.468 0 0 1 14.821 24.529l6.008 14.025a104.211 104.211 0 0 1 7.6 28.042l1.787 14.263a104.308 104.308 0 0 1 .042 25.562l-1.471 12.067a104.15 104.15 0 0 1-5.079 21.787l-4.029 11.509a103.758 103.758 0 0 1-9.042 19.241l-6.908 11.475a104.753 104.753 0 0 1-5.533 8.267c-17.838 24.054-52.742 49.521-57.359 52.529a43.676 43.676 0 0 1-4.846 2.738l-23.975 11.604a43.95 43.95 0 0 1-10.445 3.512l-25.688 5.159c-3.583.72-7.246.987-10.896.795l-26.154-1.375a50.267 50.267 0 0 1-1.983-.15c-2.2.525-4.442.884-6.7 1.063l-8.154.65c-.88.308-1.771.587-2.671.842l-30.113 8.404a43.746 43.746 0 0 1-12.954 1.591l-31.371-.87a43.592 43.592 0 0 1-13.058-2.38l-25.325-8.745-.879.175a43.65 43.65 0 0 1-10.892.795l-26.158-1.375a50.903 50.903 0 0 1-1.984-.15c-2.2.525-4.441.884-6.7 1.063l-8.15.65a47.11 47.11 0 0 1-2.675.842l-30.112 8.404a43.75 43.75 0 0 1-12.954 1.591l-31.371-.87a43.566 43.566 0 0 1-13.054-2.38l-30.446-10.516a43.911 43.911 0 0 1-6.179-2.679c-12.846-6.796-23.579-13.605-32.596-20.167a43.858 43.858 0 0 1-10.929 5.337l-28.292 9.217a43.627 43.627 0 0 1-12.212 2.129l-26.263.792a102.057 102.057 0 0 1-13.287 7.475l-15.325 7.179a102.221 102.221 0 0 1-28.084 8.5l-16.379 2.475a102.018 102.018 0 0 1-28.162.317l-15.525-1.988a102.095 102.095 0 0 1-25.242-6.587l-13.642-5.504a102.483 102.483 0 0 1-21.221-11.642l-11.475-8.196a102.835 102.835 0 0 1-17.162-15.437l-9.242-10.405a104.492 104.492 0 0 1-7.737-9.862l-4.475.092a103.998 103.998 0 0 1-4.763 4.7 44.1 44.1 0 0 1-4.962 3.97l-25.054 17.217a43.996 43.996 0 0 1-11.255 5.558l-28.291 9.217a43.634 43.634 0 0 1-12.213 2.129l-26.262.792a102.332 102.332 0 0 1-13.288 7.475l-15.325 7.179a102.246 102.246 0 0 1-28.083 8.5l-16.379 2.475a102.025 102.025 0 0 1-28.163.317l-15.525-1.988a102.054 102.054 0 0 1-25.241-6.587l-13.642-5.504a102.483 102.483 0 0 1-21.221-11.642l-11.475-8.196a102.886 102.886 0 0 1-13.212-11.229l-13.771 4.062a43.725 43.725 0 0 1-10.85 1.755l-22.154.762a102.58 102.58 0 0 1-16.217 9.988l-10.771 5.32a102.061 102.061 0 0 1-28.946 9.267l-20.012 3.242a102.087 102.087 0 0 1-36.725-.754l-21.304-4.355a102.284 102.284 0 0 1-31.196-11.95l-20.875-12.22c-5.242-3.071-10.2-6.6-14.813-10.542-9.341 5.725-17.854 10.387-25.404 14.15-45.271 22.583-79.779 24.375-95.917 23.912-10.675-.3-20.4-1.366-29.258-2.916l-5.258 2.546a102.06 102.06 0 0 1-24.863 8.308l-11.471 2.254a102.23 102.23 0 0 1-27.325 1.621l-13.22-1a102.053 102.053 0 0 1-28.917-6.5l-12.842-4.929c-.221-.084-.441-.171-.666-.259-.425.192-.85.38-1.284.555l-29.35 12.166a43.592 43.592 0 0 1-12.725 3.15l-30.929 2.854c-4.325.4-8.679.155-12.929-.733l-30.417-6.342a43.704 43.704 0 0 1-12.291-4.57l-27.805-15.417a44.262 44.262 0 0 1-5.558-3.654c-17.908-13.834-35.221-32.867-49.825-56.992-56.654-39.037-113.283-115.312-125.787-237.304-7.863-76.688 8.108-155.525 56.579-223.592 34.958-49.083 88.096-94.625 168.637-124.871Z"
        style={{
          fill: "#431407",
        }}
      />
      <path
        d="M680.393 442.944c-.829-.458-1.333-.771-1.504-.875.496.304 1 .596 1.504.875ZM918.46 681.852c-12.592 9.921-29.45 12.705-44.633 7.18a46.677 46.677 0 0 1-12.742-7.059c-.333.075-.667.15-1 .221l-6.579 1.375a46.3 46.3 0 0 1-7.75.95l-3.325 7.896-8.475 11.462-9.621 7.905-10.767 5.325-20.016 3.237-21.304-4.354-20.875-12.221-15.946-16.942-8.854-17.541-2.717-13.059.233-13.404 7.596-22.437 6.271-8.275a46.197 46.197 0 0 1-10.129-2.184c-46.859 53.292-87.671 81.113-113.879 94.184-22.542 11.246-39.388 13.437-47.43 13.208-5.954-.171-11.316-.792-16.137-1.721l-16.258-4.9-15.721-9.208-3.954-4.129c-1.342 3.508-2.388 5.966-3.042 7.158l-6.167 8.858-9.637 8.417-11.009 5.329-11.475 2.254-13.22-1-12.838-4.929-8.079-5.779-5.904-6.767c-8.721 1.771-18.013 2.863-27.909 3.121-8.82.234-18.129-.021-27.925-.979a46.81 46.81 0 0 1-15.737 15.708 46.435 46.435 0 0 1-52.488-2.983c-13.291-10.267-25.229-26.546-34.216-47.508a339.887 339.887 0 0 1-19.604-12.421c-38.542-26.283-73.625-79.9-82.13-162.9-5.362-52.3 4.813-106.25 37.871-152.671 28.909-40.587 76.017-76.317 149.234-97.571 1.616-2.637 3.045-5.146 4.229-7.562l12.125-15.671 15.246-8.888 10.3-2.52 12.47-.121 12.013 2.804 10.121 4.871 15.379 14.637c59.412 6.388 108.175 45.429 127.096 88.563 19.496 44.437 13.212 93.375-32.888 128.266a47.052 47.052 0 0 1 9.788 16.471c8.187 23.754 7.571 46.075 3.458 66.329.154 4.917-.05 10.392-.65 16.48.05-.017.1-.034.15-.046l14.488-2.738 17.279 1.296 17.683 7.221 3.379 2.917c32.259-34.33 65.421-79.017 92.1-113.713.642-.833 1.284-1.683 1.917-2.55a46.189 46.189 0 0 1-25.463-5.8l-10.895-7.279-10.955-10.596-6.845-9.575-5.905-12.671-3.67-22.825 4.633-23.946 5.683-11.983 7.304-9.867 10.067-8.77 14.817-7.496c8.9-3.192 25.816-5.063 63.291-14.167 49.771-12.096 67.617-20.358 94.188-25.362l.008.095 10.75-1.783-3.525.429c11.879-1.904 25.679-3.308 43.996-4.15l11.613-3.766 11.129-1.15 21.266 4.3 14.021 8.808 6.938 7.854c8.016-6.987 16.962-13.829 26.9-20.462 19.491-13.013 65.171-30.146 95.625-37.171a47.25 47.25 0 0 1 2.841-4.138c14.271-18.575 39.963-23.704 60.188-12.012 7.358 4.254 14.162 8.683 20.454 13.254 64.75 9.125 98.646 43.833 118.8 74.833 11.379-11.991 25.221-23.671 41.85-34.766 19.492-13.013 65.171-30.146 95.625-37.171a47.481 47.481 0 0 1 2.842-4.138c14.271-18.575 39.962-23.704 60.187-12.012 7.359 4.254 14.163 8.683 20.454 13.254 53.605 7.554 86.063 32.646 107.084 58.646 5.933-14.9 19.125-25.909 35.141-28.788 27.446-4.933 49.646-2.862 70.621.034 2.046.283 4.071.587 6.092.895 7.154-13.829 20.9-23.562 37.025-25.1 16.396-1.562 31.954 5.663 41.521 18.28l3.416.05 14.18 4.279 1.329.896c25.654-4.067 46.729-2.055 66.691.7 2.05.283 4.075.587 6.092.895 7.154-13.829 20.9-23.562 37.025-25.1 16.396-1.562 31.954 5.663 41.525 18.28l3.417.05 14.175 4.279 12.291 8.287 9.213 11.459 5.821 14.95.841 19.912-4.65 16.654-10.087 14.971c-5.679 6.154-15.075 12.033-23.204 16.408-3.917 47.121-10.634 101.346-14.979 121.725-10.321 48.375-15.542 81.821-19.363 106.625l13.65 6.125 11.842 8.859 8.962 11.029 6.013 14.029 1.787 14.263-1.471 12.066-4.029 11.509-6.908 11.475c-9.496 12.804-28.413 25.983-30.871 27.583a46.407 46.407 0 0 1-44.825 3.271 46.38 46.38 0 0 1-5.983-3.313c-11.121 8.017-25.292 10.771-38.688 7.338-14.387 12.779-35.3 15.491-52.583 6.35-10.538-5.571-18.625-10.984-24.817-15.984-1.662 1.196-2.854 2.013-3.358 2.338a46.415 46.415 0 0 1-44.829 3.271 46.593 46.593 0 0 1-5.984-3.313c-11.116 8.017-25.291 10.771-38.683 7.338-14.387 12.779-35.304 15.491-52.583 6.35-17.038-9.009-27.667-17.596-34.234-24.696l-11.229-16.067-5.112-14.741-1.079-14.742 2.608-14.142 6.35-13.6 11.054-13.204c6.633-6.146 22.292-14.846 30.379-19.154.071-5.458.129-13.988-.008-22.246-.313-18.429-.592-43.796 1.012-80.004-3.791 5.558-7.958 10.771-12.479 15.567-17.796 18.883-34.633 31.866-50 40.637a694.62 694.62 0 0 1-1.658 4.783c-8.354 23.83-33.913 36.755-57.879 29.263a46.674 46.674 0 0 1-7.871-3.271 196.29 196.29 0 0 1-.317 1.671l16.713 11.154 11.258 15.479 7.175 20.946.925 20.954-6.525 23.825-8.875 14.746-9.7 10.679c-13.475 12.471-32.937 15.863-49.787 8.684a46.71 46.71 0 0 1-18.73-14.517c-.375.167-.754.337-1.133.512l-4.354 10.542-8.746 12.704-12.396 10.813-15.325 7.175-16.375 2.471-15.525-1.984-13.641-5.504-11.475-8.192-9.238-10.408-6.817-12.321-4.033-13.846-.879-14.704 2.379-14.629 5.342-13.65 7.704-12.117 9.504-10.445c7.954-7.48 19.996-16.13 24.079-19.005.6-3.916 2.254-15.87 2.129-27.595-.162-15.25-1.362-32.659-3.075-50.95-29.487 12.483-58.795 7.683-82.737-7.205a84.505 84.505 0 0 1-9.608-6.983c-.088.096-.175.192-.267.288-17.796 18.883-34.633 31.866-50 40.637a820.75 820.75 0 0 1-1.658 4.783c-8.355 23.83-33.913 36.755-57.88 29.263a46.698 46.698 0 0 1-7.87-3.271c-.105.558-.209 1.113-.317 1.671l16.712 11.154 11.259 15.479 7.175 20.946.925 20.954-6.525 23.825-8.875 14.746-9.7 10.679c-13.475 12.471-32.938 15.863-49.788 8.684a46.708 46.708 0 0 1-18.729-14.517c-.375.167-.754.337-1.133.512l-4.354 10.542-8.746 12.704-12.396 10.813-15.325 7.175-16.375 2.471-15.525-1.984-13.642-5.504-11.475-8.192-9.237-10.408-6.817-12.321-4.033-13.846-.879-14.704 2.379-14.629 5.341-13.65 7.705-12.117 9.504-10.445c7.954-7.48 19.996-16.13 24.079-19.005.6-3.916 2.254-15.87 2.129-27.595-.162-15.25-1.362-32.659-3.075-50.95-29.487 12.483-58.796 7.683-82.737-7.205a83.811 83.811 0 0 1-8.521-6.087c-1.621 7.308-3.663 15.7-6.338 25.704-4.783 17.888-8.579 31.363-12.004 42.729l6.967 6.171 12.121 18.967 5.72 21.041-.687 21.675-4.079 13.471-5.821 10.921-9.317 11.421-9.558 8.108c.15-.108.292-.216.429-.321Zm0 0a45.096 45.096 0 0 0 2.563-2.175c-.525.48-1.363 1.263-2.563 2.175Zm-161.7-25.583c-.246 1.742-.292 3.663-.058 5.783l.058-5.783Zm337.967 35.204-.967.729c.292-.187.617-.433.967-.729Zm339.758 0-.967.729c.292-.187.617-.433.967-.729ZM558.431 587.448l4.792-3.571a32.53 32.53 0 0 0-4.792 3.571Zm-170.733-18.737.1-2.517a36.18 36.18 0 0 0-.1 2.517Zm61.558-93.4c-20.742-6.767-38.4-19.617-50.229-34.396l-9.134-14.7c-.841 2.646-1.687 5.346-2.541 8.112-4.879 15.842-9.654 31.571-13.742 51.492 9.938-4.829 21.721-8.233 34.667-9.85 12.996-1.625 27.596-1.421 40.979-.658Zm1360.11-115.859c-3.912 47.121-10.633 101.346-14.979 121.725-10.316 48.375-15.541 81.821-19.362 106.625l13.65 6.125.696.521a366.303 366.303 0 0 1 11.55-6.408c.066-5.458.125-13.988-.013-22.246-.433-25.625-.808-64.658 3.871-127.608 1.883-25.317 4.937-58.654 6.958-80.034-.796.446-1.591.884-2.371 1.3Z"
        style={{
          fill: "#7c2d12",
        }}
      />
      <path
        d="M1073.01 649.394c-5.871 5.375-7.366 1.067-13.446 20.792-9.35 30.341-46.395 3.196-18.541-23 23.587-22.188 41.733-15.921 41.033-81.484-.867-80.95-31.821-223.416-11.6-232.316 36.825-16.204 57.038 54.529 54.892 85.1-2.117 30.125-5.167 34.254-6.871 104.271-1.054 43.295-1.467 43.37-16.538 83.829 24.338 7.05 40.821 5.354 46.117 15.829 9.888 19.562-4.879 33.229-6.979 35.171-.358-13.167-2.896-43.667-68.067-8.192Z"
        style={{
          fill: "#fed7aa",
        }}
      />
      <path
        d="M1019.76 395.132c-9.108 2.77 3 35.854-24.454 45.516-30.208 10.634-58.317-83.646 39.325-118.866 17.571-6.338 65.838-37.938 128.558-27.884 98.305 15.754 89.742 122.209 52.813 160.671-43.446 45.246-64.533 37.504-70.45 35.329-1.325-.483-4.25-5.487-4.104-5.721 3.083-4.92 41.687-3.116 32.55-23.229-9.234-20.333-45.15-15.466-44.284 19.934.555 22.733 45.755 62.466 115.842-11.909 25.204-26.746 33.908-72.891 14.425-111.129-15.612-30.642-45.621-97.125-158.979-82.442-22.996 2.98-71.288 19.892-90.004 32.388-124.163 82.887-45.738 208.212 19.583 153.796 19.304-16.079 19.35-34.179 19.358-37.567.059-23.079-21.075-31.658-30.179-28.887Z"
        style={{
          fill: "#fed7aa",
        }}
      />
      <path
        d="M1183.74 531.115c17.346-65.075 12.029-72.121-7.879-163.029-6.208-28.359-29.775-85.829-55.25-112.029 64.812 37.466 75.917 91.216 78.258 133.654 3.792 68.816 2.492 91.137-15.129 141.404ZM1412.77 649.394c-5.871 5.375-7.367 1.067-13.446 20.792-9.35 30.341-46.396 3.196-18.542-23 23.588-22.188 41.733-15.921 41.033-81.484-.866-80.95-31.82-223.416-11.6-232.316 36.825-16.204 57.038 54.529 54.892 85.1-2.117 30.125-5.167 34.254-6.871 104.271-1.054 43.295-1.466 43.37-16.537 83.829 24.337 7.05 40.821 5.354 46.116 15.829 9.888 19.562-4.879 33.229-6.979 35.171-.358-13.167-2.896-43.667-68.066-8.192Z"
        style={{
          fill: "#fed7aa",
        }}
      />
      <path
        d="M1359.52 395.132c-9.109 2.77 3 35.854-24.455 45.516-30.208 10.634-58.316-83.646 39.325-118.866 17.571-6.338 65.838-37.938 128.559-27.884 98.304 15.754 89.741 122.209 52.812 160.671-43.446 45.246-64.533 37.504-70.45 35.329-1.325-.483-4.25-5.487-4.104-5.721 3.083-4.92 41.688-3.116 32.55-23.229-9.233-20.333-45.15-15.466-44.283 19.934.554 22.733 45.754 62.466 115.841-11.909 25.205-26.746 33.909-72.891 14.425-111.129-15.612-30.642-45.62-97.125-158.979-82.442-22.996 2.98-71.287 19.892-90.004 32.388-124.162 82.887-45.737 208.212 19.583 153.796 19.305-16.079 19.35-34.179 19.359-37.567.062-23.079-21.075-31.658-30.179-28.887Z"
        style={{
          fill: "#fed7aa",
        }}
      />
      <path
        d="M1523.49 531.115c17.346-65.075 12.03-72.121-7.879-163.029-6.208-28.359-29.775-85.829-55.25-112.029 64.813 37.466 75.917 91.216 78.259 133.654 3.791 68.816 2.491 91.137-15.13 141.404ZM1683.08 627.952c6.158-.737 69.533-5.937 85.496 9.146 9.495 8.967-17.634 26.65-19.938 28.154-6.825-49.812-85-17.954-91.904-15.137-20.129 8.2-9.163 17.046-3.096 26.625-59.45-31.442-3.108-42.563 9.754-53.533 25.579-21.813 6.409-29.45 17.709-181.513 3.687-49.642 13.3-104.562 7.187-117.037-4.946-10.096-22.4-11.5-33.787-19.98 45.27-8.137 72.57 9.042 110.512 2.071 28.725-5.279 37.375-14.121 35.879-.487-.891 8.171-20.825 15.562-22.937 16.346-3.542 1.312-7.304 2.708-46.717 6.691-22.967 57.592 5.433 100.892-48.158 298.654Z"
        style={{
          fill: "#fed7aa",
        }}
      />
      <path
        d="M1764.43 281.032c-14.783 115.47-19.871 135.616-32.742 200.42-14.396 72.48-19.241 79.417-35.675 184.996 37.875-43.996 22.879-55.275 52.717-195.15 7.387-34.646 21.65-171.991 15.7-190.266ZM1853.34 627.952c6.154-.737 69.529-5.937 85.496 9.146 9.496 8.967-17.633 26.65-19.942 28.154-6.825-49.812-84.996-17.954-91.904-15.137-20.125 8.2-9.162 17.046-3.092 26.625-59.454-31.442-3.112-42.563 9.755-53.533 25.579-21.813 6.404-29.45 17.704-181.513 3.691-49.642 13.304-104.562 7.187-117.037-4.946-10.096-22.4-11.5-33.787-19.98 45.275-8.137 72.571 9.042 110.516 2.071 28.721-5.279 37.371-14.121 35.88-.487-.896 8.171-20.83 15.562-22.938 16.346-3.542 1.312-7.304 2.708-46.721 6.691-22.962 57.592 5.438 100.892-48.154 298.654Z"
        style={{
          fill: "#fed7aa",
        }}
      />
      <path
        d="M1934.68 281.032c-14.783 115.47-20.604 134.045-32.737 200.42-13.292 72.692-18.317 87.017-35.68 184.996 37.33-44.987 21.405-57.95 52.717-195.15 7.883-34.537 21.654-171.991 15.7-190.266ZM844.006 637.515c76.558-301.488 49.708-313.413 66.683-321.013 29.188-13.058 6.3 70.4 4.684 76.296-16.6 60.517-9.55 61.971-25.775 122.638-16.188 60.508-20.567 68.325-39.017 120.704M464.277 360.961c-83.721 8.525-10.925 106.191 52.833 59.333 66.579-48.929-9.967-148.904-102.6-132.05-91.554 16.654-137.017 57.608-168.208 102.875-23.459 34.042-35.071 85.375-29.634 122.538 8.609 58.783 29.613 81.279 64.713 113.233 43.783 39.854 89.942 41.379 122.571 40.112 50.258-1.95 57.179-18.391 74.158-50.941 9.342-17.909 23.375-55.209 30.075-72.167 2.654-6.721 36.617-4.287 37.467-9.242.829-4.8-54.888-8.975-64.829-9.662-20.05-1.379-71.3-9.571-92.017 6.242-2.025 36.404 76.712 12.5 76.767 12.541 1.995 1.604-29.3 71.892-43.017 81.521-43.096 30.258-133.596-16.825-161.583-91.662-15.263-40.813-14.163-88.513 28.495-139.575 47.98-57.442 184.905-108.134 219.805-44.238 33.112 60.633-75.1 84.392-57.138 45.333 6.225-13.537 8.954-11.833 15.371-25.25 1.371-2.875-2.771-8.337-3.229-8.941Z"
        style={{
          fill: "#fed7aa",
        }}
      />
      <path
        d="M469.856 680.882c1.383-12.93 30.396-151.875 42.079-191.909 10.596 30.75-3.758 57.771-8.292 77.579-13.133 57.375-35.17 127.259-33.787 114.33ZM582.464 627.177c2.909-3.079 18.667-5.8 4.675-22.287-21.171-24.95-83.271 63.587-19.3 65.412 15.863.45 90.329-32.004 175.892-157.637 3.554-5.221 100.108-131.529 94.117-159.667-.042-.196-20.388-9.279-21.063-9.387-15.562-2.492-38.996 88.466-75.925 136.487-49.846 64.817-121.887 162.971-170.071 171.996-1.962.367-17.45-9.192-1.204-17.229 6.708-3.317 6.875-2.538 12.879-7.688Z"
        style={{
          fill: "#fed7aa",
        }}
      />
      <path
        d="M807.868 622.465c26.325-122.05 31.455-155.163 33.559-168.767 10.262-66.254 7.612-66.387 9.262-129.083 42.234-10.396 26.038 54.717 24.646 94.387-1.292 36.825.113 37.28-19.821 103.817-7.45 24.871-10.408 43.75-25.537 85.863 46.387-8.43 62.671-9.292 68.825 5.275 8.621 20.395-7.417 29.3-9.104 30.837-1.742-12.267 2.737-21.892-10.13-23.05-32.95-2.967-77.762 23.246-76.454 35.096 3.4 30.712-27.658 11.637-32.162-2.204-6.4-19.675 35.479-31.629 36.916-32.171Z"
        style={{
          fill: "#fed7aa",
        }}
      />
      <path
        d="M703.014 401.794c29.913-44.204 45.779-23.037 210.688-82.408-79.279 1.737-77.638 11.354-154.829 30.108-57.746 14.029-62.9 8.533-68.467 23.279-7.15 18.938 12.158 28.746 12.608 29.021ZM833.781 512.377c-3.342-5.079-108.613 17.688-111.229 22.471-5.479 10.029 17.746 28.613 20.054 30.459 28.437-40.855 94.517-47.855 91.175-52.93ZM406.273 265.973c-18.096 36.884-77.209 93.142-100.584 227.484-11.046 63.458-3.962 167.404 31.746 194.987-5.208-31.25-8.337-44.983-15.529-74.071-7.042-28.5-5.163-76.104 3.55-125.421 4.925-27.854 10.996-48.133 17.296-68.57 23.296-75.592 43.283-108.984 71.5-148.242 3.671-5.104-6.154-9.892-7.979-6.167Z"
        style={{
          fill: "#fed7aa",
        }}
      />
    </svg>
  </button>

)

