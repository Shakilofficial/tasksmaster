import { BanIcon } from "lucide-react";

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
    <div className="flex flex-col items-center p-6 border border-destructive text-destructive rounded-md shadow-md max-w-sm w-full">
      <BanIcon className="w-6 h-6 mb-2" />
      <p className="text-sm text-center font-medium">{message}</p>
    </div>
  </div>
  );
};

export default Error;
