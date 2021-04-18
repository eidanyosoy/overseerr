import {
  ExclamationIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import React from 'react';

interface AlertProps {
  title?: React.ReactNode;
  type?: 'warning' | 'info' | 'error';
}

const Alert: React.FC<AlertProps> = ({ title, children, type }) => {
  let design = {
    bgColor: 'bg-yellow-600',
    titleColor: 'text-yellow-200',
    textColor: 'text-yellow-300',
    svg: <ExclamationIcon className="w-5 h-5" />,
  };

  switch (type) {
    case 'info':
      design = {
        bgColor: 'bg-indigo-600',
        titleColor: 'text-indigo-200',
        textColor: 'text-indigo-300',
        svg: <InformationCircleIcon className="w-5 h-5" />,
      };
      break;
    case 'error':
      design = {
        bgColor: 'bg-red-600',
        titleColor: 'text-red-200',
        textColor: 'text-red-300',
        svg: <XCircleIcon className="w-5 h-5" />,
      };
      break;
  }

  return (
    <div className={`rounded-md p-4 mb-4 ${design.bgColor}`}>
      <div className="flex">
        <div className={`flex-shrink-0 ${design.titleColor}`}>{design.svg}</div>
        <div className="ml-3">
          {title && (
            <div className={`text-sm font-medium ${design.titleColor}`}>
              {title}
            </div>
          )}
          {children && (
            <div className={`mt-2 first:mt-0 text-sm ${design.textColor}`}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
