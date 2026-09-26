import MongoAnimatedIcon from "./MongoAnimatedIcon";

export default function TechIcon({ name, className = "w-6 h-6" }) {
  const iconKey = name.toLowerCase();

  if (iconKey.includes("react")) {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (iconKey.includes("next")) {
    return (
      <svg viewBox="0 0 180 180" className={className} fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" stroke="#22252c" strokeWidth="4" />
        <path
          d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
          fill="#f4f4ed"
        />
        <rect x="115" y="54" width="12" height="72" fill="#f4f4ed" />
      </svg>
    );
  }

  if (iconKey.includes("c++") || iconKey.includes("cpp")) {
    return (
      <img
        src="/animations/c-plus-plus-svgrepo-com.svg"
        alt="C++"
        className={`${className} object-contain select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(0,89,156,0.35)]`}
        draggable={false}
      />
    );
  }

  if (iconKey.includes("python")) {
    return (
      <img
        src="/animations/python-svgrepo-com.svg"
        alt="Python"
        className={`${className} object-contain select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(56,126,184,0.35)]`}
        draggable={false}
      />
    );
  }

  if (iconKey.includes("java") && !iconKey.includes("javascript")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#ED8B00">
        <path d="M8.85 17.56c-.95-.08-1.55.33-1.55.77 0 .49.77.83 2.01.83 2.11 0 3.73-.77 3.73-1.93 0-.15-.03-.29-.08-.43-1.07.49-2.67.82-4.11.76zm-1.89-2.61c-1.12.1-1.74.57-1.74 1.11 0 .64.88 1.1 2.39 1.1 2.58 0 4.79-1 4.79-2.49 0-.17-.03-.33-.09-.49-1.39.63-3.5 1.05-5.35.77zm11.71 1.76c-.53.4-1.42.72-2.52.88.58-.33.91-.71.91-1.12 0-.82-1.32-1.44-3.32-1.44-1.47 0-2.81.33-3.69.87 1.48.51 3.51.78 5.62.66 1.34-.08 2.32-.4 2.9-.85h.1zm-8.86-5.83c.89.84 1.84 1.75 1.84 2.92 0 1.94-2.18 3.32-5.46 3.32-1.39 0-2.59-.25-3.47-.69.8 0 1.69-.13 2.48-.41 2.21-.77 3.5-2.03 3.5-3.4 0-.67-.32-1.29-.89-1.74zm2.14-3.19c-.43 1.05-1.17 2.04-2.07 2.96.95.34 1.92.79 1.92 1.44 0 .97-1.63 1.63-3.87 1.63-1.09 0-2.1-.15-2.85-.42.92-.37 1.74-.92 2.3-1.64.91-1.17 1.35-2.5 1.35-3.97 0-.02 0-.04.01-.06.87.1 2.26.11 3.21.06z" />
      </svg>
    );
  }

  if (iconKey.includes("typescript") || iconKey.includes("ts")) {
    return (
      <img
        src="/animations/typescript-svgrepo-com.svg"
        alt="TypeScript"
        className={`${className} object-contain select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(0,122,204,0.35)]`}
        draggable={false}
      />
    );
  }

  if (iconKey === "javascript" || iconKey === "js" || iconKey.includes("javascript")) {
    return (
      <img
        src="/animations/javascript-svgrepo-com.svg"
        alt="JavaScript"
        className={`${className} object-contain select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(247,223,30,0.35)]`}
        draggable={false}
      />
    );
  }

  if (iconKey.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.337,13.382,7.976,12,6.001,12z" />
      </svg>
    );
  }

  if (iconKey.includes("html")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#E34F26">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.438l.422-4.5H3.797l.89 10.125h10.875l-.468 4.781-4.117 1.125-4.125-1.125-.281-3h-3.47l.516 5.86 7.36 2.062 7.36-2.062 1.03-11.666H8.53z" />
      </svg>
    );
  }

  if (iconKey.includes("css")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#1572B6">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm15.422 17.25l.89-9.75H4.078l.234 2.625h10.875l-.422 4.5-3.788 1.031-3.788-1.031-.235-2.625H4.484l.422 4.781 7.07 1.969 7.07-1.969z" />
      </svg>
    );
  }

  if (iconKey.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#5FA04E">
        <path d="M12 0l10.392 6v12L12 24 1.608 18V6L12 0zm0 2.2L3.608 7.05v9.9L12 21.8l8.392-4.85v-9.9L12 2.2zM12 6.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11z" />
      </svg>
    );
  }

  if (iconKey.includes("express")) {
    return (
      <img
        src="/animations/express-svgrepo-com.svg"
        alt="Express.js"
        className={`${className} object-contain select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(255,255,255,0.3)]`}
        draggable={false}
      />
    );
  }

  if (iconKey.includes("mongo")) {
    return <MongoAnimatedIcon className={className} />;
  }

  if (iconKey.includes("firebase")) {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M4.5 19.5L1.2 13.2c-.3-.5-.1-1.1.4-1.3.4-.2.9 0 1.2.4l2.7 5.2 7-13.4c.3-.5.9-.7 1.4-.4.3.2.5.5.5.8l2.2 11.2L4.5 19.5z" fill="#FFA000" />
        <path d="M18.8 9.2l-2.2-4.2c-.3-.5-.9-.7-1.4-.4-.3.2-.5.5-.5.8L12.5 17l6.3-7.8z" fill="#F57C00" />
        <path d="M12 24l9.7-5.5-2.9-14.7c-.1-.5-.6-.9-1.2-.8-.4.1-.7.4-.8.7L4.5 19.5 12 24z" fill="#FFCA28" />
      </svg>
    );
  }

  if (iconKey.includes("supabase")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#3ECF8E">
        <path d="M13.35 24v-8.87h7.4a.75.75 0 00.58-1.22L10.65 0v8.87H3.25a.75.75 0 00-.58 1.22L13.35 24z" />
      </svg>
    );
  }

  if (iconKey.includes("sql") || iconKey.includes("mysql")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#00758F">
        <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 2c4.42 0 8 1.57 8 3s-3.58 3-8 3-8-1.57-8-3 3.58-3 8-3zm8 8c0 1.43-3.58 3-8 3s-8-1.57-8-3V9.82c1.97 1.34 4.86 2.18 8 2.18s6.03-.84 8-2.18V12zm0 5c0 1.43-3.58 3-8 3s-8-1.57-8-3v-2.18c1.97 1.34 4.86 2.18 8 2.18s6.03-.84 8-2.18V17z" />
      </svg>
    );
  }

  if (iconKey.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 2.714h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0-2.714h2.12a.187.187 0 00.184-.186V6.29a.185.185 0 00-.185-.185h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.928 2.714h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.184.185v1.888c0 .102.083.185.185.185m0-2.714h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185h-2.12a.186.186 0 00-.184.185v1.887c0 .102.083.186.185.186m-2.929 2.714h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.184.185v1.888c0 .102.082.185.184.185m-2.929 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.184.185v1.888c0 .102.082.185.184.185M23.766 8.44c-.65-.432-1.637-.608-2.614-.44-.264-1.417-1.367-2.38-2.766-2.521-.138-.014-.276-.014-.415 0a3.66 3.66 0 00-1.804.724l-.448.337-.114.542a4.42 4.42 0 01-.762 1.64c-.452.616-1.07 1.07-1.787 1.314H.624a.624.624 0 00-.624.625 9.014 9.014 0 001.488 4.978c2.322 3.67 6.438 5.485 11.233 5.03 5.495-.522 9.774-4.546 10.772-9.98.058-.314.55-.544.773-.804.288-.335.32-.82.128-1.225l-.628-.22" />
      </svg>
    );
  }

  if (iconKey.includes("redis")) {
    return (
      <img
        src="/animations/redis-logo-svgrepo-com.svg"
        alt="Redis"
        className={`${className} object-contain select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(198,48,43,0.35)]`}
        draggable={false}
      />
    );
  }

  if (iconKey.includes("redux")) {
    return (
      <img
        src="/animations/redux-svgrepo-com.svg"
        alt="Redux"
        className={`${className} object-contain select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(118,74,188,0.35)]`}
        draggable={false}
      />
    );
  }

  if (iconKey.includes("aws") || iconKey.includes("amazon")) {
    return (
      <img
        src="/animations/aws-svgrepo-com.svg"
        alt="AWS"
        className={`${className} object-contain select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(245,133,53,0.35)]`}
        draggable={false}
      />
    );
  }

  if (iconKey.includes("linux") || iconKey.includes("ubuntu")) {
    return (
      <img
        src="/animations/linux-svgrepo-com.svg"
        alt="Linux"
        className={`${className} object-contain select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(253,187,20,0.35)]`}
        draggable={false}
      />
    );
  }

  if (iconKey.includes("git") || iconKey.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#F05032">
        <path d="M23.546 10.93L13.067.452a1.5 1.5 0 00-2.126 0L8.808 2.585l3.22 3.22a1.776 1.776 0 011.666.452 1.782 1.782 0 01.464 1.734l3.09 3.09a1.774 1.774 0 011.735.464 1.78 1.78 0 010 2.518 1.78 1.78 0 01-2.518 0 1.78 1.78 0 01-.464-1.734l-2.92-2.92v6.23a1.78 1.78 0 01.464 1.735 1.78 1.78 0 01-2.518 0 1.78 1.78 0 01-.464-1.735v-6.31a1.78 1.78 0 01-.937-.872L5.85 6.786.454 12.18a1.5 1.5 0 000 2.126l10.478 10.478a1.5 1.5 0 002.126 0l10.488-10.478a1.5 1.5 0 000-2.126z" />
      </svg>
    );
  }

  if (iconKey.includes("socket")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#010101" stroke="#f4f4ed" strokeWidth="1">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 15.688l-3.328 1.848-1.848-3.328-1.848 3.328-3.328-1.848 1.848-3.328-1.848-3.328 3.328-1.848 1.848 3.328 1.848-3.328 3.328 1.848-1.848 3.328 1.848 3.328z" />
      </svg>
    );
  }

  // Default chip icon
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#d2ff00" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  );
}
