import React from 'react';

interface AuthButtonProps {
  onClick: () => void;
  isLoading: boolean;
  icon?: React.ReactNode;
  text: string;
  variant?: 'primary' | 'secondary';
}

export default function AuthButton({
  onClick,
  isLoading,
  icon,
  text,
  variant = 'primary',
}: AuthButtonProps) {
  const baseStyles = "w-full flex justify-center items-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = variant === 'primary' 
    ? "border-transparent text-white bg-indigo-600 hover:bg-indigo-700"
    : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className={`${baseStyles} ${variantStyles}`}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white dark:border-gray-400 border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {text}
        </>
      )}
    </button>
  );
}