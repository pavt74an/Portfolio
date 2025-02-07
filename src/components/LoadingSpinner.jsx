import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-100">
      <div className="relative">
        {/* Outer spinner */}
        <div className="w-16 h-16 border-4 border-pink-200 border-t-orange-500 rounded-full animate-spin" />
        {/* Inner spinner */}
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-[spin_3s_linear_infinite_reverse]" />
      </div>
      <p className="mt-4 text-lg font-medium text-blue-900 animate-pulse">
        Loading amazing projects...
      </p>
    </div>
  );
};

export default LoadingSpinner;
